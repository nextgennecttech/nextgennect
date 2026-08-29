import { TeamMember, TechDomain, StatItem, EventItem, Testimonial, CoreValue, FaqItem } from '../types';

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    id: 'aliyan-shah',
    name: 'Aliyan Shah',
    role: 'Founder & Chief Executive Officer',
    title: 'Visionary Leader & Technology Evangelist',
    bio: 'Pioneering youth empowerment and technological advancement across KP and Pakistan through community-first leadership and ecosystem building.',
    detailedBio: 'Aliyan founded Next Gennect with a singular mission: to democratize high-tier engineering skills and unlock world-class career pathways for passionate youth in Peshawar and Pakistan. With deep experience in community architecture and tech ecosystems, he spearheads strategic partnerships with universities and international tech hubs.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    specialties: ['Ecosystem Architecture', 'Product Strategy', 'Youth Leadership', 'Tech Advocacy'],
    gradient: 'from-cyan-500 to-blue-600',
    badge: 'Founder',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    email: 'aliyan@nextgennect.com'
  },
  {
    id: 'fatima-zahra',
    name: 'Fatima Zahra',
    role: 'Chief Technology Officer',
    title: 'Systems Architect & AI Engineering Lead',
    bio: 'Architecting cutting-edge curricula, hands-on engineering tracks, and technical innovation labs that bridge academia and industry.',
    detailedBio: 'Fatima oversees the technical roadmap and innovation standards at Next Gennect. She is an avid advocate for women in deep tech and specializes in distributed systems, machine learning engineering, and secure infrastructure design. Under her guidance, Next Gennect members have shipped 80+ open-source and production-ready applications.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    specialties: ['Distributed Systems', 'Applied AI/ML', 'Curriculum Engineering', 'Cloud Native'],
    gradient: 'from-purple-500 to-indigo-600',
    badge: 'CTO',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    email: 'fatima@nextgennect.com'
  },
  {
    id: 'muhammad-atif',
    name: 'Muhammad Atif',
    role: 'Chief Operating Officer',
    title: 'Operations Director & Growth Strategist',
    bio: 'Scaling high-impact workshops, hackathons, university chapter networks, and mentor pipelines across Khyber Pakhtunkhwa.',
    detailedBio: 'Atif drives operational excellence, university chapter scaling, and community logistics for Next Gennect. Bringing relentless execution and passion for student engagement, he has orchestrated 45+ multi-campus hackathons and bootcamps, connecting hundreds of students with industry mentors.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    specialties: ['Operations Scaling', 'Community Growth', 'Hackathon Logistics', 'Talent Mentorship'],
    gradient: 'from-teal-400 to-emerald-600',
    badge: 'COO',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    email: 'atif@nextgennect.com'
  }
];

export const TECH_DOMAINS: TechDomain[] = [
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    shortCode: 'AI / ML',
    category: 'AI & Data',
    description: 'Master foundation models, transformer architectures, neural networks, computer vision, and scalable MLOps deployments.',
    detailedDescription: 'From fine-tuning state-of-the-art LLMs to deploying real-time vision algorithms, our AI track equips builders with rigorous theoretical foundations and modern toolchains (PyTorch, TensorFlow, Hugging Face, LangChain, and ONNX).',
    iconName: 'Brain',
    color: '#00E5FF',
    borderGlow: 'hover:border-[#00E5FF]/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.25)]',
    accentBg: 'bg-cyan-500/10 text-[#00E5FF]',
    tags: ['LLMs & RAG', 'Computer Vision', 'Deep Learning', 'PyTorch', 'MLOps'],
    activeProjects: 24,
    membersCount: 420,
    upcomingWorkshop: 'Generative AI & Agentic Systems Bootcamp',
    roadmap: [
      { step: 1, title: 'Math & Python Foundations', duration: 'Weeks 1-3', description: 'Linear algebra, calculus for optimization, NumPy & Pandas vectorization.', keySkills: ['Python', 'Linear Algebra', 'NumPy'] },
      { step: 2, title: 'Deep Learning & PyTorch', duration: 'Weeks 4-7', description: 'Neural networks, backprop, CNNs, Transformers, and gradient descent algorithms.', keySkills: ['PyTorch', 'CNNs', 'Transformers'] },
      { step: 3, title: 'LLMs, Agents & RAG', duration: 'Weeks 8-10', description: 'Vector databases, LangChain, semantic embeddings, and local model fine-tuning.', keySkills: ['LangChain', 'ChromaDB', 'Hugging Face'] },
      { step: 4, title: 'Production MLOps', duration: 'Weeks 11-12', description: 'Model serving with FastAPI, Docker, GPU orchestration, and monitoring.', keySkills: ['FastAPI', 'Docker', 'Triton'] }
    ],
    featuredProject: {
      title: 'Pashto-English Multimodal AI Assistant',
      description: 'An open-source voice-and-text language model fine-tuned on regional dialects to assist rural telemedicine centers.',
      impact: 'Tested across 4 regional clinics with 94.2% accuracy'
    }
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking',
    shortCode: 'CYBER',
    category: 'Security & Systems',
    description: 'Defend systems against zero-day exploits, conduct penetration tests, audit smart contracts, and compete in global CTFs.',
    detailedDescription: 'Dive deep into offensive and defensive cybersecurity: binary exploitation, web application pentesting, threat intelligence, reverse engineering, and cryptographic defense frameworks.',
    iconName: 'ShieldCheck',
    color: '#7C3AED',
    borderGlow: 'hover:border-[#7C3AED]/60 hover:shadow-[0_0_30px_rgba(124,58,237,0.25)]',
    accentBg: 'bg-purple-500/10 text-purple-400',
    tags: ['Ethical Hacking', 'Penetration Testing', 'CTF Warfare', 'Cryptography', 'SIEM'],
    activeProjects: 16,
    membersCount: 310,
    upcomingWorkshop: 'Live Red Team vs Blue Team War Games',
    roadmap: [
      { step: 1, title: 'Networking & OS Internals', duration: 'Weeks 1-3', description: 'TCP/IP protocols, packet inspection with Wireshark, Linux kernel security.', keySkills: ['Wireshark', 'Linux', 'Network Protocols'] },
      { step: 2, title: 'Web App Pentesting', duration: 'Weeks 4-7', description: 'OWASP Top 10 vulnerabilities, Burp Suite, SQLi, XSS, and authorization bypasses.', keySkills: ['Burp Suite', 'OWASP', 'Exploitation'] },
      { step: 3, title: 'Reverse Engineering & Binaries', duration: 'Weeks 8-10', description: 'Ghidra, disassembly, buffer overflows, and memory security mechanisms.', keySkills: ['Ghidra', 'Assembly', 'GDB'] },
      { step: 4, title: 'Enterprise SOC & Blue Teaming', duration: 'Weeks 11-12', description: 'Log auditing, incident response, SIEM systems, and malware analysis.', keySkills: ['SIEM', 'Splunk', 'Threat Intel'] }
    ],
    featuredProject: {
      title: 'Autonomous Vulnerability Scanner for Academia',
      description: 'A modular security scanning engine detecting subdomain takeovers, open ports, and vulnerable SSL configs across 100+ school websites.',
      impact: 'Identified 32 critical CVEs responsibly reported to webmasters'
    }
  },
  {
    id: 'software-dev',
    title: 'Full-Stack Software Development',
    shortCode: 'BUILD',
    category: 'Development',
    description: 'Build hyper-scalable web and mobile applications with Next.js, TypeScript, microservices, and distributed cloud backends.',
    detailedDescription: 'Learn modern software craftsmanship: full-stack TypeScript, asynchronous architectures, distributed caching, GraphQL/REST APIs, database optimization, and CI/CD pipelines.',
    iconName: 'Code2',
    color: '#00E5FF',
    borderGlow: 'hover:border-[#00E5FF]/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.25)]',
    accentBg: 'bg-cyan-500/10 text-[#00E5FF]',
    tags: ['React & Next.js', 'Node.js & Go', 'PostgreSQL', 'Microservices', 'GraphQL'],
    activeProjects: 38,
    membersCount: 540,
    upcomingWorkshop: 'Modern High-Scale Web Architecture Sprint',
    roadmap: [
      { step: 1, title: 'Modern TypeScript & React', duration: 'Weeks 1-3', description: 'Type systems, state management, concurrent React 19 patterns, and performance.', keySkills: ['TypeScript', 'React', 'Tailwind'] },
      { step: 2, title: 'Backend Systems & Databases', duration: 'Weeks 4-7', description: 'Express/Fastify, relational DB design with PostgreSQL, indexing, Prisma/Drizzle.', keySkills: ['Node.js', 'PostgreSQL', 'Drizzle ORM'] },
      { step: 3, title: 'Distributed Systems & Caching', duration: 'Weeks 8-10', description: 'Redis pub/sub, message brokers with RabbitMQ, WebSocket real-time pipelines.', keySkills: ['Redis', 'WebSockets', 'RabbitMQ'] },
      { step: 4, title: 'Production CI/CD & Deployments', duration: 'Weeks 11-12', description: 'Docker containerization, GitHub Actions CI/CD, monitoring, and cloud hosting.', keySkills: ['Docker', 'GitHub Actions', 'Cloud Run'] }
    ],
    featuredProject: {
      title: 'TalentLink - Regional Tech Hiring Portal',
      description: 'A lightning-fast job matching engine connecting KP university software graduates directly with international remote recruiters.',
      impact: 'Facilitated 65+ developer placements in 6 months'
    }
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    shortCode: 'CLOUD',
    category: 'Cloud & Hardware',
    description: 'Orchestrate multi-cloud container clusters, infrastructure-as-code (Terraform), Kubernetes, and resilient CI/CD pipelines.',
    detailedDescription: 'Master modern site reliability engineering and cloud engineering across AWS, GCP, and Azure. Build automated, fault-tolerant infrastructure with Terraform, Kubernetes, Helm, and Grafana observability.',
    iconName: 'Cloud',
    color: '#A855F7',
    borderGlow: 'hover:border-[#A855F7]/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]',
    accentBg: 'bg-purple-500/10 text-purple-400',
    tags: ['Kubernetes', 'Docker', 'Terraform', 'AWS / GCP', 'GitOps & CI/CD'],
    activeProjects: 14,
    membersCount: 220,
    upcomingWorkshop: 'Hands-on Kubernetes & GitOps Masterclass',
    roadmap: [
      { step: 1, title: 'Linux Mastery & Containerization', duration: 'Weeks 1-3', description: 'Shell scripting, network namespaces, multi-stage Docker builds.', keySkills: ['Linux', 'Docker', 'Bash'] },
      { step: 2, title: 'Kubernetes Cluster Orchestration', duration: 'Weeks 4-7', description: 'Pods, Deployments, Services, Ingress, Helm charts, stateful sets.', keySkills: ['Kubernetes', 'Helm', 'Ingress'] },
      { step: 3, title: 'Infrastructure as Code (IaC)', duration: 'Weeks 8-10', description: 'Terraform, CloudFormation, declarative cloud provisioning on AWS & GCP.', keySkills: ['Terraform', 'AWS', 'GCP'] },
      { step: 4, title: 'Observability & SRE', duration: 'Weeks 11-12', description: 'Prometheus metrics, Grafana dashboards, log aggregation, and zero-downtime rollouts.', keySkills: ['Prometheus', 'Grafana', 'ArgoCD'] }
    ],
    featuredProject: {
      title: 'Cost-Optimized Auto-Scaling Student Cloud Cluster',
      description: 'A shared Kubernetes bare-metal server cluster hosted locally, offering free deployment sandboxes for 500+ student projects.',
      impact: 'Saved students over $12,000 in personal cloud billing'
    }
  },
  {
    id: 'data-science',
    title: 'Data Science & Big Data',
    shortCode: 'DATA',
    category: 'AI & Data',
    description: 'Transform massive raw datasets into actionable insights using big data pipelines, predictive statistics, and dynamic visual dashboards.',
    detailedDescription: 'Uncover deep patterns and fuel decision-making with Apache Spark, Polars, DuckDB, modern SQL data warehousing (Snowflake/BigQuery), and production business intelligence systems.',
    iconName: 'BarChart3',
    color: '#00E5FF',
    borderGlow: 'hover:border-[#00E5FF]/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.25)]',
    accentBg: 'bg-cyan-500/10 text-[#00E5FF]',
    tags: ['Big Data & Spark', 'SQL Analytics', 'Predictive Modeling', 'Data Pipelines', 'BI Viz'],
    activeProjects: 19,
    membersCount: 290,
    upcomingWorkshop: 'Predictive Analytics & Real-Time Data Pipelines',
    roadmap: [
      { step: 1, title: 'Advanced SQL & Data Wrangling', duration: 'Weeks 1-3', description: 'Window functions, CTEs, Polars & Pandas high-speed data transformations.', keySkills: ['Advanced SQL', 'Polars', 'Pandas'] },
      { step: 2, title: 'Statistical Modeling & Inference', duration: 'Weeks 4-7', description: 'Hypothesis testing, regression, time-series forecasting, Bayesian analysis.', keySkills: ['Statistics', 'Scikit-Learn', 'A/B Testing'] },
      { step: 3, title: 'Big Data with Spark & DuckDB', duration: 'Weeks 8-10', description: 'Distributed data pipelines, streaming processing, columnar storage formats.', keySkills: ['Apache Spark', 'DuckDB', 'Parquet'] },
      { step: 4, title: 'Interactive BI & Data Apps', duration: 'Weeks 11-12', description: 'Streamlit data apps, Tableau/PowerBI visual dashboards, automated ETL cron jobs.', keySkills: ['Streamlit', 'Airflow', 'Data Storytelling'] }
    ],
    featuredProject: {
      title: 'KP Traffic & Urban Air Quality Analytics',
      description: 'Real-time sensor data ingest aggregating particulate matter (PM2.5) across 15 Peshawar urban corridors to advise local municipal planners.',
      impact: 'Public dashboard cited by 3 university research papers'
    }
  },
  {
    id: 'innovation-lab',
    title: 'Innovation & Hardware Lab',
    shortCode: 'INNOVATE',
    category: 'Cloud & Hardware',
    description: 'Bridge software and the physical world through IoT sensor networks, embedded microcontrollers, robotics, and rapid prototyping.',
    detailedDescription: 'Where code meets silicon: hands-on tinkering with ESP32, Raspberry Pi, ARM Cortex firmware in C/C++ and Rust, custom PCB design, and industrial IoT automation protocols.',
    iconName: 'Cpu',
    color: '#7C3AED',
    borderGlow: 'hover:border-[#7C3AED]/60 hover:shadow-[0_0_30px_rgba(124,58,237,0.25)]',
    accentBg: 'bg-purple-500/10 text-purple-400',
    tags: ['IoT & ESP32', 'Embedded C/Rust', 'Robotics', 'PCB Prototyping', 'Edge AI'],
    activeProjects: 11,
    membersCount: 180,
    upcomingWorkshop: 'Edge AI on Microcontrollers: TinyML Workshop',
    roadmap: [
      { step: 1, title: 'Circuits & Embedded C Basics', duration: 'Weeks 1-3', description: 'GPIO pins, ADC/DAC, I2C/SPI communication, Arduino & ESP32 flashing.', keySkills: ['C/C++', 'ESP32', 'Circuit Design'] },
      { step: 2, title: 'IoT Protocols & Cloud Sync', duration: 'Weeks 4-7', description: 'MQTT brokers, WebSockets, Bluetooth Low Energy (BLE), telemetry ingestion.', keySkills: ['MQTT', 'BLE', 'ThingsBoard'] },
      { step: 3, title: 'PCB CAD & Rapid Prototyping', duration: 'Weeks 8-10', description: 'KiCad schematic capture, PCB layout routing, 3D casing prototyping.', keySkills: ['KiCad', 'Schematic Design', 'Soldering'] },
      { step: 4, title: 'TinyML & Edge Inference', duration: 'Weeks 11-12', description: 'Running quantized neural models on Cortex-M microcontrollers for real-time vision.', keySkills: ['TinyML', 'Edge AI', 'TensorFlow Lite'] }
    ],
    featuredProject: {
      title: 'Smart Agri-Telemetry Irrigation Node',
      description: 'Solar-powered ultra-low power soil moisture and weather nodes utilizing LoRaWAN mesh networks for sustainable agricultural water management.',
      impact: 'Deployed across 6 experimental farms with 35% water savings'
    }
  }
];

export const IMPACT_STATS: StatItem[] = [
  {
    id: 'members',
    value: 1200,
    displayValue: '1,200+',
    label: 'Community Members',
    description: 'Active young engineers, designers, and students across KP and Pakistan',
    category: 'Community',
    icon: 'Users'
  },
  {
    id: 'workshops',
    value: 45,
    displayValue: '45+',
    label: 'Workshops & Bootcamps',
    description: 'Intensive hands-on technical sessions led by industry professionals',
    category: 'Education',
    icon: 'Terminal'
  },
  {
    id: 'projects',
    value: 80,
    displayValue: '80+',
    label: 'Projects Launched',
    description: 'Open-source software, startup prototypes, and AI systems deployed to production',
    category: 'Innovation',
    icon: 'Rocket'
  },
  {
    id: 'mentors',
    value: 30,
    displayValue: '30+',
    label: 'Industry Mentors',
    description: 'Senior engineers from global tech firms and research laboratories',
    category: 'Mentorship',
    icon: 'Award'
  },
  {
    id: 'partners',
    value: 18,
    displayValue: '18+',
    label: 'Industry Partners',
    description: 'Tech firms, incubators, and innovation hubs supporting our cohorts',
    category: 'Ecosystem',
    icon: 'Briefcase'
  },
  {
    id: 'universities',
    value: 15,
    displayValue: '15+',
    label: 'Partner Universities',
    description: 'Active campus student chapters and faculty collaborations',
    category: 'Academia',
    icon: 'GraduationCap'
  },
  {
    id: 'cities',
    value: 6,
    displayValue: '6+',
    label: 'Active Hub Cities',
    description: 'Peshawar HQ with expanding chapters across Mardan, Abbottabad, Islamabad & beyond',
    category: 'Reach',
    icon: 'MapPin'
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'hands-on',
    title: 'Hands-On Building',
    description: 'We believe genuine mastery comes from shipping real code, deploying live servers, and solving tangible community problems.',
    iconName: 'Hammer',
    badge: 'Core Principle'
  },
  {
    id: 'mentorship',
    title: 'Relentless Mentorship',
    description: 'No student builds alone. Senior engineers and alumni guide junior learners through 1-on-1 code reviews and career roadmaps.',
    iconName: 'HeartHandshake',
    badge: 'Community First'
  },
  {
    id: 'inclusivity',
    title: 'Radical Inclusivity',
    description: 'Democratizing tech for everyone regardless of background, gender, or institution. We actively champion women in deep tech.',
    iconName: 'Sparkles',
    badge: 'Equal Access'
  },
  {
    id: 'ethical-innovation',
    title: 'Ethical Engineering',
    description: 'Designing trustworthy AI and resilient systems that respect privacy, user dignity, and regional societal well-being.',
    iconName: 'ShieldCheck',
    badge: 'Integrity'
  },
  {
    id: 'open-source',
    title: 'Open Source Spirit',
    description: 'We share our curricula, libraries, and project blueprints publicly to elevate the entire regional technology ecosystem.',
    iconName: 'GitBranch',
    badge: 'Pay It Forward'
  },
  {
    id: 'global-ambition',
    title: 'Global Standards',
    description: 'Training Pakistani youth to compete, innovate, and lead on the world stage with silicon-valley caliber technical rigor.',
    iconName: 'Globe',
    badge: 'Excellence'
  }
];

export const COMMUNITY_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Hamza Khan',
    role: 'Junior Machine Learning Engineer',
    university: 'University of Engineering and Technology (UET) Peshawar',
    city: 'Peshawar',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    quote: 'Joining Next Gennect transformed my university experience. I went from reading dry textbooks to building and deploying a live medical vision system within a 6-week cohort. The mentorship is unmatched!',
    outcome: 'Landed remote ML residency at a US HealthTech startup',
    domain: 'AI & Machine Learning'
  },
  {
    id: 'test-2',
    name: 'Ayesha Mehsud',
    role: 'Cybersecurity Analyst & CTF Player',
    university: 'Institute of Management Sciences (IMSciences)',
    city: 'Peshawar',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'As a woman in tech, finding an inclusive, highly technical community was crucial. Next Gennect’s ethical hacking sprint gave me the confidence to lead our university CTF team to top 5 nationally.',
    outcome: 'Ranked Top 5 in National Cyber Battle 2025',
    domain: 'Cybersecurity'
  },
  {
    id: 'test-3',
    name: 'Bilal Ahmad',
    role: 'Full-Stack Developer',
    university: 'CECOS University',
    city: 'Peshawar',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    quote: 'The emphasis on shipping production-ready code with CI/CD and Docker set me apart in my job interviews. Next Gennect is truly engineering the next generation of Pakistani leaders.',
    outcome: 'Hired as Full-Stack Engineer at international software house',
    domain: 'Software Engineering'
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'event-1',
    title: 'GenAI & Autonomous Agents Hackathon 2026',
    category: 'Hackathon',
    date: 'March 14-15, 2026',
    time: '09:00 AM - 08:00 PM PKT',
    location: 'National Incubation Center (NIC) Peshawar & Virtual',
    isOnline: false,
    instructor: 'Fatima Zahra & Guest Mentors',
    instructorRole: 'CTO, Next Gennect & Lead AI Engineers',
    registeredCount: 168,
    maxCapacity: 200,
    description: 'A 48-hour build marathon where multidisciplinary teams build agentic workflows, multi-modal applications, and local fine-tuned models.',
    prerequisites: ['Basic Python or TypeScript', 'Git fundamentals', 'Enthusiasm to build!'],
    tags: ['AI Agents', 'Hackathon', 'Prizes', 'Live Demos'],
    status: 'Filling Fast'
  },
  {
    id: 'event-2',
    title: 'Offensive Security & Live CTF War Games',
    category: 'CTF',
    date: 'March 22, 2026',
    time: '02:00 PM - 07:00 PM PKT',
    location: 'Next Gennect Peshawar Innovation Lab / Discord',
    isOnline: true,
    instructor: 'Usman Durrani',
    instructorRole: 'Senior Penetration Tester & Security Lead',
    registeredCount: 94,
    maxCapacity: 120,
    description: 'Hands-on jeopardy-style CTF covering binary reverse engineering, web exploits, cryptography challenges, and cloud privilege escalation.',
    prerequisites: ['Linux command line', 'Basic networking'],
    tags: ['Cybersecurity', 'CTF', 'Hands-On', 'Bug Bounty'],
    status: 'Open'
  },
  {
    id: 'event-3',
    title: 'Production Kubernetes & Cloud-Native Architectures',
    category: 'Masterclass',
    date: 'April 05, 2026',
    time: '05:00 PM - 08:00 PM PKT',
    location: 'Virtual Live Stream & Interactive Sandbox',
    isOnline: true,
    instructor: 'Zainab Qazi',
    instructorRole: 'Cloud Solutions Architect',
    registeredCount: 180,
    maxCapacity: 200,
    description: 'Learn how to deploy multi-cluster Kubernetes apps with Helm, manage ingress traffic with Traefik, and establish automated GitOps pipelines.',
    prerequisites: ['Docker basics', 'Web backend concepts'],
    tags: ['DevOps', 'Kubernetes', 'Cloud', 'Live Lab'],
    status: 'Open'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is Next Gennect and who can join?',
    answer: 'Next Gennect is a youth-led, non-profit technology community headquartered in Peshawar, Pakistan. Any university student, high school coder, self-taught developer, or aspiring technologist passionate about hands-on building is warmly welcome to join.'
  },
  {
    id: 'faq-2',
    category: 'Membership',
    question: 'Is joining Next Gennect free?',
    answer: 'Yes! Membership, open workshops, community hackathons, and Discord study groups are 100% free. We believe quality technical education and mentorship should be accessible to all students regardless of financial background.'
  },
  {
    id: 'faq-3',
    category: 'Workshops',
    question: 'Do I need prior coding experience to attend bootcamps?',
    answer: 'We offer structured tracks for all skill levels! While advanced workshops require basic syntax familiarity, our foundational cohorts start with fundamentals and pair you with a mentor to guide your journey.'
  },
  {
    id: 'faq-4',
    category: 'Mentorship',
    question: 'How can industry professionals or alumni become mentors?',
    answer: 'We actively invite seasoned engineers, researchers, and tech founders to give back. You can apply through our Join Community modal as a "Mentor" or reach out directly to leadership to conduct masterclasses or review student projects.'
  },
  {
    id: 'faq-5',
    category: 'Mentorship',
    question: 'Can my university establish an official Next Gennect Student Chapter?',
    answer: 'Absolutely. We partner with universities across Khyber Pakhtunkhwa and Pakistan. Contact COO Muhammad Atif (atif@nextgennect.com) to initiate a campus ambassador charter.'
  }
];

export const GROWTH_CHART_DATA = [
  { period: 'Jan 24', members: 120, workshops: 3, projects: 5 },
  { period: 'Apr 24', members: 280, workshops: 9, projects: 14 },
  { period: 'Jul 24', members: 490, workshops: 18, projects: 29 },
  { period: 'Oct 24', members: 740, workshops: 27, projects: 48 },
  { period: 'Jan 25', members: 980, workshops: 36, projects: 65 },
  { period: 'Present', members: 1240, workshops: 45, projects: 82 }
];

export const SKILLS_DISTRIBUTION = [
  { name: 'Software Dev & Next.js', percentage: 35, color: '#00E5FF', count: '430+ builders' },
  { name: 'AI & Machine Learning', percentage: 28, color: '#38BDF8', count: '350+ learners' },
  { name: 'Cybersecurity & CTFs', percentage: 20, color: '#7C3AED', count: '250+ defenders' },
  { name: 'Cloud Infrastructure', percentage: 17, color: '#A855F7', count: '210+ architects' }
];
