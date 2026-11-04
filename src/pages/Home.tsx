import { Rich } from "../components/Rich";
import { Tags, Points } from "../components/Bits";
import { Link } from "../router";
import { useRevealAll } from "../useReveal";
import { blogs, formatDate } from "../blogs";
import {
  profile,
  summary,
  skills,
  experience,
  projects,
  openSource,
  leadership,
  education,
  achievements,
} from "../data";

export function Home() {
  useRevealAll([]);
  const latest = blogs.slice(0, 2);

  return (
    <main className="container">
      <section className="card">
        <div className="hero">
          <img
            className="avatar"
            src="/Aaron.webp"
            alt={profile.name}
            width={180}
            height={180}
          />
          <div>
            <h1>{profile.name}</h1>
            <p className="subtitle">{profile.title}</p>
            <div className="meta">
              <span>{profile.location}</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </div>
            <div className="meta">
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.links.website} target="_blank" rel="noreferrer">
                arxhr007.tech
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="card reveal">
        <h2>Profile</h2>
        <p className="about-text">
          <Rich>{summary}</Rich>
        </p>
      </section>

      <section className="card tech-skills reveal">
        <h2>Technical Skills</h2>
        <div className="grid-2">
          {skills.map((s) => (
            <div key={s.group}>
              <h3>{s.group}</h3>
              <Tags items={s.items} />
            </div>
          ))}
        </div>
      </section>

      <section className="card reveal">
        <h2>Experience</h2>
        {experience.map((job, i) => (
          <article className="job" key={i}>
            <div className="job-head">
              <h3>
                {job.role} &bull;{" "}
                {job.url ? (
                  <a href={job.url} target="_blank" rel="noreferrer">
                    {job.company} &#8599;
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <span className="job-meta">{job.meta}</span>
            </div>
            <Points items={job.points} />
          </article>
        ))}
      </section>

      <section className="card reveal">
        <h2>Projects</h2>
        <div className="grid-2">
          {projects.map((p) => (
            <div key={p.name}>
              <h3 className="project-title">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noreferrer">
                    {p.name} &#8599;
                  </a>
                ) : (
                  p.name
                )}
              </h3>
              <p className="job-meta" style={{ marginBottom: 8 }}>
                {p.tagline}
              </p>
              <Points items={p.points} />
              <div style={{ marginTop: 10 }}>
                <Tags items={p.tags} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card reveal">
        <h2>Open Source Contributions</h2>
        <Points items={openSource} />
      </section>

      <section className="card reveal">
        <div className="section-head">
          <h2>Writing</h2>
          <Link to="/blog" className="see-all">
            All posts &rarr;
          </Link>
        </div>
        <div className="blog-list">
          {latest.map((b) => (
            <Link className="blog-card" to={`/blog/${b.slug}`} key={b.slug}>
              <h3>{b.title}</h3>
              <p className="post-meta">
                {formatDate(b.date)} &middot; {b.readingTime} min read
              </p>
              <p className="job-meta">{b.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="card grid-2 reveal">
        <div>
          <h2>Leadership</h2>
          <Points items={leadership} />
        </div>
        <div>
          <h2>Education</h2>
          <h3>{education.degree}</h3>
          {education.lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
          <p className="job-meta">{education.meta}</p>
        </div>
      </section>

      <section className="card reveal">
        <h2>Achievements</h2>
        <Points items={achievements} />
      </section>

      <section className="card reveal">
        <h2>Get In Touch</h2>
        <p style={{ fontSize: "1.15rem", marginBottom: 14 }}>
          I'm <span className="hl">open to work</span> on exciting projects. Feel free to reach
          out!
        </p>
        <p style={{ fontSize: "1.05rem" }}>
          Email me at{" "}
          <a
            href={`mailto:${profile.email}`}
            style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}
          >
            {profile.email}
          </a>
        </p>
      </section>
    </main>
  );
}
