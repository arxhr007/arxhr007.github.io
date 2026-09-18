export const profile = {
  name: "Aaron Thomas",
  title: "Full-Stack Developer | AI/RAG Systems Engineer",
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
  "Computer Science undergraduate building **production-ready full-stack platforms**, " +
  "**scalable backends**, and **AI systems**. Experienced in **RAG pipelines**, " +
  "**CMS/LMS platforms**, **cloud deployment**, **automation**, and " +
  "**developer-focused open-source tools**.";

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "TypeScript/JavaScript", "Rust", "Java", "C", "C++"],
  },
  {
    group: "Backend",
    items: ["Node.js", "REST APIs", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    group: "Cloud/DevOps",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    group: "AI/ML",
    items: ["PyTorch", "TensorFlow", "LangChain", "LangGraph", "LlamaIndex"],
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
    meta: "10/2025 - Present | Thiruvananthapuram, KL",
    points: [
      "Developed enterprise **CMS** and **LMS platforms** for the **Government of Kerala** using **Next.js**, **Node.js**, and **AWS**.",
      "Built **scalable backend services**, **REST APIs**, and **cloud-integrated workflows** for reliable content delivery.",
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
      "Integrated **SEO best practices** that increased **organic search visibility** for project deployments.",
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
    tagline: "AI-Powered Public Data Analysis Platform",
    points: [
      "Built an **AI-powered platform** for large-scale public data analysis, with **parallel processing pipelines** and **automated information extraction** over high-volume web data.",
      "Achieved **4000+ GitHub stars**, demonstrating strong community adoption and developer interest.",
    ],
    tags: ["Python", "Bash"],
  },
  {
    name: "NeuroLearn",
    url: "https://github.com/arxhr007/neurolearn",
    tagline: "Adaptive AI Tutor",
    points: [
      "Built an **adaptive tutor for neurodivergent learners** using **LangGraph**, personalized learning flows, and **RAG**.",
      "Presented at an **OpenAI Community Meetup**, showcasing adaptive learning and AI-driven remediation workflows.",
    ],
    tags: ["LangGraph", "RAG", "FastAPI"],
  },
  {
    name: "Amma",
    url: "https://github.com/arxhr007/amma",
    tagline: "Malayalam Programming Language",
    points: [
      "Designed a custom **interpreter in Rust** — lexer, parser, and evaluator — supporting variables, control flow, recursive functions, lists, strings, and file I/O.",
      "Built a **transliteration layer** so code runs in Malayalam script or romanized English, and shipped prebuilt Windows and Linux binaries with a full language reference and sample programs.",
    ],
    tags: ["Rust"],
  },
  {
    name: "AYRA",
    url: "https://blog.myosa-sensors.org/blog.html?file=blogs%2Fayra.md",
    tagline: "TinyML-Based Autonomic Dysreflexia Early Warning System",
    points: [
      "Developed a **below-knee wearable** for real-time autonomic dysreflexia early warning, fusing **GSR**, **PPG/HRV**, **ECG**, skin temperature, humidity, and motion signals from a single placement.",
      "Implemented an **int8 quantized TinyML neural network** on an **ESP32** for on-device inference with **sub-50 ms latency** and real-time alerts via OLED, buzzer, and **MQTT**.",
      "Presented at the **IEEE BioSensors 2026** international conference in Bangkok, Thailand.",
    ],
    tags: ["TinyML", "ESP32", "TensorFlow Lite", "MQTT"],
  },
];

export const leadership: string[] = [
  "**Coders Club Lead**, IEDC Sahrdaya: Organized developer workshops, project sessions, and innovation activities.",
  "**Technical Team**, IEEE Sahrdaya: Built event websites, attendance systems, and event management applications.",
  "**Mentor**, TinkerHub: Guided peers on project architecture, development workflows, and implementation strategy.",
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
  "**4x CTF Winner** — First-place finishes across four Capture The Flag security competitions.",
  "**MYOSA International Hackathon Finalist** — Selected as a finalist for developing **AYRA**, a real-time autonomic dysreflexia early-warning wearable using TinyML.",
  "**IEEE BioSensors 2026** — Presented **AYRA** at the IEEE BioSensors 2026 international conference in Bangkok, Thailand.",
];
