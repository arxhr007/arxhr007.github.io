export const profile = {
  name: "Aaron Thomas",
  title: "Backend Engineer | Full-Stack Developer",
  location: "Thrissur, Kerala",
  email: "aaron123thomas098@gmail.com",
  avatar: "/Aaron.webp",
  links: {
    github: "https://github.com/arxhr007",
    linkedin: "https://www.linkedin.com/in/aaron-thomas-parakkal",
    website: "https://arxhr007.tech",
    resume: "/Aaron_Thomas.pdf",
    blog: "https://arxhr007.tech/blog",
  },
};

export const summary =
  "Final year Computer Science student building **production backends** — " +
  "**REST APIs** in **Python/FastAPI** and **Node.js**, **PostgreSQL** and " +
  "**Firebase** data models, and **AWS deployments** — from **government CMS " +
  "and LMS platforms** to **Android app backends**.";

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "Go", "Rust", "TypeScript/JavaScript", "Java", "C"],
  },
  {
    group: "Backend",
    items: ["Node.js", "FastAPI", "REST APIs", "PostgreSQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    group: "Cloud/DevOps",
    items: ["AWS", "GCP", "Docker", "CI/CD"],
  },
  {
    group: "AI/ML",
    items: ["LangChain", "LangGraph", "LlamaIndex", "Prompt Engineering"],
  },
  {
    group: "Soft Skills",
    items: ["Communication", "Teamwork", "Leadership", "Problem Solving"],
  },
];

export const experience: {
  role: string;
  company: string;
  url?: string;
  meta: string;
  points: string[];
}[] = [
  {
    role: "Backend Developer (Contract)",
    company: "Lions Information Technology L.L.C",
    url: "https://www.lionsinfosys.com/",
    meta: "04/2026 - 08/2026 | Dubai, UAE (Remote)",
    points: [
      "Built **backend services** and **REST APIs** powering **Android applications** using **Python** and **FastAPI**.",
      "Designed **PostgreSQL data models** and deployed services on **AWS** for mobile clients.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Stride, K-DISC",
    meta: "10/2025 - 10/2026 | Thiruvananthapuram, KL",
    points: [
      "Developed enterprise **CMS** and **LMS platforms** for the **Government of Kerala** using **Next.js**, **Node.js**, and **AWS**.",
    ],
  },
  {
    role: "Backend & Automation Engineer (Part-time)",
    company: "Sahrdaya College of Engineering & Technology (Autonomous)",
    meta: "08/2025 - 02/2026 | Kodakara, KL",
    points: [
      "Architected backend systems for the **official college website** and **CMS** using **Firebase**, **Node.js**, and **REST APIs**.",
      "Built **workflow automation** and **system orchestration** to streamline CMS operations and reduce repetitive manual work.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Pexcel Solutions",
    meta: "12/2024 - 06/2025 | New Zealand (Remote)",
    points: [
      "Developed **responsive frontend interfaces** using **React.js** and **Tailwind CSS** for international client projects.",
    ],
  },
];

export const projects: {
  name: string;
  url?: string;
  tagline: string;
  points: string[];
  tags: string[];
}[] = [
  {
    name: "Aliens Eye",
    url: "https://github.com/arxhr007/Aliens_eye",
    tagline: "AI-Powered Cross-Platform Profile Analysis",
    points: [
      "Built an **async platform** analyzing public profiles across **840+ sites** with **ML/heuristic scoring** and cross-site profile correlation.",
      "Achieved **4700+ GitHub stars**.",
    ],
    tags: ["Python", "Bash"],
  },
  {
    name: "AYRA",
    url: "https://blog.myosa-sensors.org/blog.html?file=blogs%2Fayra.md",
    tagline: "TinyML-Based Autonomic Dysreflexia Early Warning System",
    points: [
      "Built a **below-knee early-warning wearable** for autonomic dysreflexia, combining **GSR**, **PPG/HRV**, **ECG**, skin temperature, humidity, and motion with an **int8-quantized TinyML model** on **ESP32**.",
      "Presented AYRA at the **IEEE BioSensors 2026** conference in Bangkok, Thailand.",
    ],
    tags: ["TinyML", "ESP32", "TensorFlow Lite"],
  },
  {
    name: "NeuroLearn",
    url: "https://github.com/arxhr007/neurolearn",
    tagline: "Adaptive AI Tutor",
    points: [
      "Built an **adaptive tutor for neurodivergent learners** using **LangGraph**, personalized learning flows, and **RAG**.",
      "Presented at an **OpenAI Community Meetup**.",
    ],
    tags: ["LangGraph", "RAG", "FastAPI"],
  },
  {
    name: "Amma",
    url: "https://github.com/arxhr007/amma",
    tagline: "Malayalam Programming Language",
    points: [
      "Designed a **Rust interpreter** — lexer, parser, and evaluator — with transliteration for **Malayalam script** or romanized English.",
    ],
    tags: ["Rust"],
  },
];

export const openSource: string[] = [
  "**ggml-org/llama.cpp** (Python): Rejected malformed **gguf-py** tokenizer merge pairs to prevent corrupted models.",
  "**apache/kafka** (Java) & **apache/airflow** (Python): Rejected negative wire-decoded field sizes reaching new byte[size]; fixed a secrets masker leaking a prefixed secret's tail into logs.",
  "**docker/docker-agent** (Go): Fixed safety rules that let sort -o and tree -o overwrite files without a prompt; added regression tests.",
  "**redis/redis-py** (Python): Fixed CLIENT LIST parsing splitting records on VT, FF, NEL and U+2028; unified both parse paths.",
  "**projectdiscovery** nuclei, httpx & subfinder (Go): Fixed template validation, charset decoding, and -max-results limits.",
  "**awslabs/llrt** & **VirusTotal/yara-x** (Rust): Aligned Buffer encodings and concat with Node.js; let --ignore-module skip partially implemented modules.",
  "**radareorg/radare2** & **fastfetch** (C): Added a histogram ruler, fixed Cs arguments, and three format-parser bugs.",
  "Also contributed: **python-pillow/Pillow**, **bettercap/bettercap**, **TabularisDB/tabularis**, **mvt-project/mvt**, **awslabs/amazon-documentdb-tools**.",
];

export const leadership: string[] = [
  "**Coders Club Lead**, IEDC Sahrdaya: Organized developer workshops, project sessions, and innovation activities.",
  "**Technical Team**, IEEE Sahrdaya: Built event websites, attendance systems, and event management applications.",
];

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  lines: [
    "Sahrdaya College of Engineering & Technology (Autonomous)",
    "APJ Abdul Kalam Technological University (KTU)",
  ],
  meta: "2023 - 2027 | Kodakara, KL",
};

export const achievements: string[] = [
  "**AYRA** — **MYOSA International Hackathon Finalist**; presented at **IEEE BioSensors 2026**, Bangkok, Thailand.",
  "**4x CTF Winner** — Won four **Capture The Flag** cybersecurity competitions.",
];
