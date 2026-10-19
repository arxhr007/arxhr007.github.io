// lxask docs: theme toggle, mobile menu, search, copy buttons, "on this page" highlighting.
(function () {
  "use strict";
  var BASE = "/lxask";
  var root = document.documentElement;
  var body = document.body;

  /* ---- theme ---- */
  var themeBtn = document.querySelector(".theme-btn");
  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set === "dark" || set === "light") return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("lxask-theme", next);
      } catch (e) {
        /* private mode: the choice lasts for this page only */
      }
    });
  }

  /* ---- mobile menu ---- */
  var menuBtn = document.querySelector(".menu-btn");
  var scrim = document.querySelector(".scrim");
  function setNav(open) {
    body.classList.toggle("nav-open", open);
    if (menuBtn) menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (menuBtn) menuBtn.addEventListener("click", function () { setNav(!body.classList.contains("nav-open")); });
  if (scrim) scrim.addEventListener("click", function () { setNav(false); });

  /* ---- sidebar: show the current page ---- */
  var active = document.querySelector('.sidebar a[aria-current="page"]');
  if (active && active.scrollIntoView) active.scrollIntoView({ block: "center" });

  /* ---- copy buttons ---- */
  function copyText(text, button) {
    function done() {
      var old = button.textContent;
      button.textContent = "Copied";
      button.classList.add("done");
      setTimeout(function () {
        button.textContent = old;
        button.classList.remove("done");
      }, 1400);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () {});
    } else {
      var area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand("copy");
        done();
      } catch (e) {
        /* nothing to do */
      }
      area.remove();
    }
  }
  document.addEventListener("click", function (event) {
    var button = event.target.closest && event.target.closest(".copy");
    if (!button) return;
    var direct = button.getAttribute("data-copy");
    if (direct) return copyText(direct, button);
    var code = button.closest(".code");
    var el = code && code.querySelector("pre code");
    if (el) copyText(el.textContent.replace(/\n$/, ""), button);
  });

  /* ---- on this page ---- */
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll(".toc a"));
  if (tocLinks.length && "IntersectionObserver" in window) {
    var byId = {};
    tocLinks.forEach(function (a) { byId[decodeURIComponent(a.getAttribute("href").slice(1))] = a; });
    var headings = Array.prototype.slice
      .call(document.querySelectorAll(".prose h2[id], .prose h3[id]"))
      .filter(function (h) { return byId[h.id]; });
    var visible = {};
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
        var first = headings.find(function (h) { return visible[h.id]; });
        if (!first) return;
        tocLinks.forEach(function (a) { a.classList.remove("active"); });
        byId[first.id].classList.add("active");
      },
      { rootMargin: "-70px 0px -65% 0px" }
    );
    headings.forEach(function (h) { observer.observe(h); });
  }

  /* ---- search ---- */
  var overlay = document.querySelector(".search-overlay");
  var input = overlay && overlay.querySelector(".search-input");
  var list = overlay && overlay.querySelector(".search-results");
  var index = null;
  var loading = null;
  var selected = -1;
  var hits = [];

  function loadIndex() {
    if (index) return Promise.resolve(index);
    if (!loading) {
      var url = (document.querySelector('meta[name="lxask-index"]') || {}).content || BASE + "/search-index.json";
      loading = fetch(url)
        .then(function (r) { return r.json(); })
        .then(function (data) { index = data; return data; })
        .catch(function () { loading = null; return []; });
    }
    return loading;
  }

  function openSearch() {
    if (!overlay) return;
    setNav(false);
    overlay.classList.add("open");
    input.value = "";
    render("");
    input.focus();
    loadIndex().then(function () { render(input.value); });
  }
  function closeSearch() {
    if (overlay) overlay.classList.remove("open");
  }

  function esc(s) {
    return s.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function terms(query) {
    return query.toLowerCase().split(/[^\p{L}\p{N}_.+-]+/u).filter(Boolean);
  }
  function score(entry, words) {
    var title = entry.t.toLowerCase();
    var page = entry.p.toLowerCase();
    var text = entry.x.toLowerCase();
    var total = 0;
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      var s = 0;
      if (title.indexOf(w) === 0) s += 12;
      else if (title.indexOf(w) > -1) s += 8;
      if (page.indexOf(w) > -1) s += 3;
      var at = text.indexOf(w);
      if (at > -1) s += 2 + (text.split(w).length > 3 ? 1 : 0);
      if (!s) return 0; // every word must match somewhere
      total += s;
    }
    return total;
  }
  function snippet(entry, words) {
    var text = entry.x;
    var lower = text.toLowerCase();
    var at = -1;
    for (var i = 0; i < words.length && at < 0; i++) at = lower.indexOf(words[i]);
    var start = Math.max(0, at - 50);
    var piece = text.slice(start, start + 170);
    var html = esc(piece);
    words.forEach(function (w) {
      html = html.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>");
    });
    return (start > 0 ? "… " : "") + html + (start + 170 < text.length ? " …" : "");
  }

  function render(query) {
    if (!list) return;
    var words = terms(query);
    hits = [];
    selected = -1;
    if (!words.length) {
      list.innerHTML = '<div class="empty">Search the docs: install, restrictions, Ctrl+G, --serve, adapter …</div>';
      return;
    }
    if (!index) {
      list.innerHTML = '<div class="empty">Loading …</div>';
      return;
    }
    hits = index
      .map(function (e) { return { e: e, s: score(e, words) }; })
      .filter(function (h) { return h.s > 0; })
      .sort(function (a, b) { return b.s - a.s; })
      .slice(0, 9);
    if (!hits.length) {
      list.innerHTML = '<div class="empty">No results for “' + esc(query) + "”</div>";
      return;
    }
    list.innerHTML = hits
      .map(function (h, i) {
        var e = h.e;
        return (
          '<a href="' + esc(e.u) + '" data-i="' + i + '"><div class="where">' + esc(e.p) +
          '</div><div class="what">' + esc(e.t) + '</div><div class="snippet">' + snippet(e, words) + "</div></a>"
        );
      })
      .join("");
  }
  function select(delta) {
    var links = list.querySelectorAll("a");
    if (!links.length) return;
    selected = (selected + delta + links.length) % links.length;
    links.forEach(function (a, i) { a.classList.toggle("sel", i === selected); });
    links[selected].scrollIntoView({ block: "nearest" });
  }

  if (overlay) {
    document.querySelectorAll(".search-btn").forEach(function (b) { b.addEventListener("click", openSearch); });
    overlay.addEventListener("click", function (e) { if (e.target === overlay) closeSearch(); });
    input.addEventListener("input", function () { render(input.value); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); select(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); select(-1); }
      else if (e.key === "Enter") {
        var target = list.querySelector("a.sel") || list.querySelector("a");
        if (target) window.location.href = target.getAttribute("href");
      }
    });
    list.addEventListener("click", function () { closeSearch(); });
  }
  document.addEventListener("keydown", function (e) {
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target || {}).tagName || "");
    if ((e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      openSearch();
    } else if (e.key === "/" && !typing && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      openSearch();
    } else if (e.key === "Escape") {
      closeSearch();
      setNav(false);
    }
  });
  var isMac = /Mac|iPhone|iPad/.test(navigator.platform || "");
  document.querySelectorAll(".search-btn kbd").forEach(function (k) { k.textContent = isMac ? "⌘K" : "Ctrl K"; });
})();
