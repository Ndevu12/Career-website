export type OpportunitiesCategory = 'software' | 'infrastructure' | 'electronics' | 'ai' | 'creative'

export interface Opportunity {
  id: string
  title: string
  category: OpportunitiesCategory
  description: string
  shortDescription: string
  duration: string
  level: 'Foundation' | 'Intermediate' | 'Advanced'
  skills: string[]
  tools: string[]
  outcomes: string[]
  projectExposure: string[]
  candidateProfile: string[]
  image: string
}

export const categoryLabels: Record<OpportunitiesCategory, string> = {
  software: 'Core Software & Engineering',
  infrastructure: 'Infrastructure & Systems',
  electronics: 'Electronics & Embedded Systems',
  ai: 'AI & Emerging Technologies',
  creative: 'Creative & Digital Technology',
}

export const categoryDescriptions: Record<OpportunitiesCategory, string> = {
  software:
    'Build production-grade software across the full stack — from frontend interfaces to backend systems, APIs, and databases.',
  infrastructure:
    'Design, deploy, and secure the systems that power modern organizations — from networks and cloud platforms to DevOps pipelines.',
  electronics:
    'Engineer at the hardware-software boundary — embedded systems, microcontrollers, IoT devices, and sensor integration.',
  ai:
    'Explore the technologies shaping the future — artificial intelligence, data science, automation, robotics, blockchain, and mobile platforms.',
  creative:
    'Craft compelling digital experiences — from graphic design and multimedia production to UI/UX, product design, and motion graphics.',
}

export const categoryColors: Record<OpportunitiesCategory, string> = {
  software: 'from-[#4CC3E0] to-[#0F6FA3]',
  infrastructure: 'from-[#1E9BD1] to-[#0C5876]',
  electronics: 'from-[#61BA49] to-[#0E6B2E]',
  ai: 'from-[#0F6FA3] to-[#0E4A30]',
  creative: 'from-[#A6D93A] to-[#1E9BD1]',
}

export const opportunities: Opportunity[] = [
  // ── Core Software & Engineering ──────────────────────────────
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    category: 'software',
    description:
      'Develop a deep understanding of software engineering principles, design patterns, and the full software development lifecycle. Work on structured projects that mirror how professional engineering teams build, test, and ship reliable software.',
    shortDescription: 'Master engineering principles, design patterns, and the software development lifecycle.',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['Software Architecture', 'Design Patterns', 'Testing & QA', 'Version Control', 'Agile Methodologies'],
    tools: ['Git', 'GitHub', 'VS Code', 'Docker', 'Jira'],
    outcomes: [
      'Architect maintainable software systems',
      'Implement industry-standard design patterns',
      'Execute structured testing and quality assurance workflows',
    ],
    projectExposure: [
      'Team-based engineering sprint simulations',
      'Code review and refactoring exercises',
      'End-to-end project delivery with documentation',
    ],
    candidateProfile: ['Analytical thinking', 'Basic programming knowledge', 'Passion for building reliable systems'],
    image: '/images/opportunities/software-engineering.jpg',
  },
  {
    id: 'software-development',
    title: 'Software Development',
    category: 'software',
    description:
      'Gain hands-on experience writing production-quality code across multiple languages. Focus on translating requirements into functional software, debugging, and iterating through real development cycles.',
    shortDescription: 'Write production-quality code and deliver functional software through real development cycles.',
    duration: '10 weeks',
    level: 'Foundation',
    skills: ['Multi-Language Proficiency', 'Debugging', 'Code Optimization', 'Documentation', 'Collaboration'],
    tools: ['Python', 'JavaScript', 'VS Code', 'Git', 'Terminal'],
    outcomes: [
      'Write clean, maintainable code across languages',
      'Debug and optimize software efficiently',
      'Deliver working software on schedule',
    ],
    projectExposure: [
      'Multi-language coding challenges',
      'Pair opportunitiesming sessions',
      'Individual project builds from specification to delivery',
    ],
    candidateProfile: ['Curiosity about how software works', 'Problem-solving mindset', 'Willingness to learn multiple languages'],
    image: '/images/opportunitiess/software-development.jpg',
  },
  {
    id: 'opportunitiesming',
    title: 'opportunitiesming',
    category: 'software',
    description:
      'Build a rock-solid opportunitiesming foundation. Learn to think algorithmically, write efficient code, and solve problems using core opportunitiesming concepts — from data structures to control flow and functions.',
    shortDescription: 'Build a rock-solid foundation with algorithms, data structures, and problem solving.',
    duration: '8 weeks',
    level: 'Foundation',
    skills: ['Algorithmic Thinking', 'Data Structures', 'Control Flow', 'Functions & Modularity', 'Problem Solving'],
    tools: ['Python', 'C', 'VS Code', 'Online Judges'],
    outcomes: [
      'Solve complex problems algorithmically',
      'Implement fundamental data structures',
      'Write efficient, modular code',
    ],
    projectExposure: [
      'Algorithm challenge competitions',
      'Data structure implementation projects',
      'Problem-solving marathons',
    ],
    candidateProfile: ['Logical thinker', 'No prior experience required', 'Eagerness to learn'],
    image: '/images/opportunitiess/opportunitiesming.jpg',
  },
  {
    id: 'web-engineering',
    title: 'Web Engineering',
    category: 'software',
    description:
      'Engineer modern web applications from architecture to deployment. Understand how the web works at a systems level — protocols, rendering, performance, and scalability — and build applications that perform at scale.',
    shortDescription: 'Engineer scalable, high-performance web applications from architecture to deployment.',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['HTTP & Web Protocols', 'Performance Optimization', 'Web Security', 'Progressive Web Apps', 'Scalability'],
    tools: ['Next.js', 'React', 'Node.js', 'Lighthouse', 'Vercel'],
    outcomes: [
      'Build performant, accessible web applications',
      'Optimize web performance and SEO',
      'Deploy and monitor production web systems',
    ],
    projectExposure: [
      'Full web application engineering projects',
      'Performance audit and optimization sprints',
      'Production deployment workflows',
    ],
    candidateProfile: ['Basic HTML/CSS knowledge', 'Interest in web technologies', 'Engineering mindset'],
    image: '/images/opportunitiess/web-engineering.jpg',
  },
  {
    id: 'backend-systems',
    title: 'Backend Systems',
    category: 'software',
    description:
      'Design and build the server-side systems that power modern applications. Master APIs, authentication, data persistence, and server architecture through hands-on project work.',
    shortDescription: 'Design and build server-side systems — APIs, authentication, and data persistence.',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['API Design', 'Authentication & Authorization', 'Server Architecture', 'Data Persistence', 'Caching'],
    tools: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Postman'],
    outcomes: [
      'Design robust RESTful and GraphQL APIs',
      'Implement secure authentication systems',
      'Build scalable server architectures',
    ],
    projectExposure: [
      'API-first project builds',
      'Microservice architecture simulations',
      'Load testing and optimization exercises',
    ],
    candidateProfile: ['opportunitiesming fundamentals', 'Interest in backend logic', 'Systems thinking'],
    image: '/images/opportunitiess/backend-systems.jpg',
  },
  {
    id: 'frontend-engineering',
    title: 'Frontend Engineering',
    category: 'software',
    description:
      'Specialize in building polished, interactive user interfaces. Go beyond visual design into component architecture, state management, accessibility, and frontend performance engineering.',
    shortDescription: 'Build polished, accessible interfaces with modern component architecture.',
    duration: '10 weeks',
    level: 'Intermediate',
    skills: ['Component Architecture', 'State Management', 'Accessibility', 'Responsive Design', 'Frontend Performance'],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Storybook'],
    outcomes: [
      'Build reusable component libraries',
      'Implement accessible, responsive interfaces',
      'Optimize frontend performance and user experience',
    ],
    projectExposure: [
      'Design-to-code implementation projects',
      'Component library creation',
      'Accessibility audit and remediation',
    ],
    candidateProfile: ['HTML/CSS foundation', 'Eye for detail', 'Interest in user experience'],
    image: '/images/opportunitiess/frontend-engineering.jpg',
  },
  {
    id: 'full-stack-development',
    title: 'Full-Stack Development',
    category: 'software',
    description:
      'Bridge frontend and backend to build complete applications. Work across the entire stack — interfaces, APIs, databases, and deployment — delivering end-to-end solutions like a professional product team.',
    shortDescription: 'Build complete applications across frontend, backend, databases, and deployment.',
    duration: '14 weeks',
    level: 'Intermediate',
    skills: ['Frontend Development', 'Backend Development', 'Database Design', 'Deployment', 'Full-Stack Architecture'],
    tools: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Vercel'],
    outcomes: [
      'Deliver end-to-end web applications',
      'Integrate frontend and backend seamlessly',
      'Deploy full-stack projects to production',
    ],
    projectExposure: [
      'End-to-end product builds',
      'Cross-functional team collaboration',
      'Production deployment and monitoring',
    ],
    candidateProfile: ['Basic opportunitiesming experience', 'Interest in building complete products', 'Self-driven learner'],
    image: '/images/opportunitiess/full-stack-development.jpg',
  },
  {
    id: 'api-architecture',
    title: 'API Architecture',
    category: 'software',
    description:
      'Master the art of designing APIs that other developers love to use. Learn REST, GraphQL, versioning, rate limiting, documentation, and the principles behind APIs that scale to millions of requests.',
    shortDescription: 'Design APIs that scale — REST, GraphQL, versioning, and documentation.',
    duration: '10 weeks',
    level: 'Advanced',
    skills: ['REST API Design', 'GraphQL', 'API Versioning', 'Rate Limiting', 'API Documentation'],
    tools: ['Postman', 'Swagger/OpenAPI', 'GraphQL Playground', 'Node.js', 'Kong'],
    outcomes: [
      'Design developer-friendly API interfaces',
      'Implement GraphQL and REST architectures',
      'Document and version APIs professionally',
    ],
    projectExposure: [
      'Public API design projects',
      'API gateway configuration',
      'Developer experience optimization',
    ],
    candidateProfile: ['Backend experience', 'Understanding of HTTP protocols', 'Systematic thinker'],
    image: '/images/opportunitiess/api-architecture.jpg',
  },
  {
    id: 'database-systems',
    title: 'Database Systems',
    category: 'software',
    description:
      'Understand how data is stored, queried, and managed at scale. Work with relational and non-relational databases, learn query optimization, data modeling, and backup/recovery strategies.',
    shortDescription: 'Store, query, and manage data at scale with relational and non-relational databases.',
    duration: '10 weeks',
    level: 'Intermediate',
    skills: ['SQL', 'NoSQL', 'Data Modeling', 'Query Optimization', 'Backup & Recovery'],
    tools: ['PostgreSQL', 'MongoDB', 'Redis', 'DBeaver', 'pgAdmin'],
    outcomes: [
      'Design normalized and denormalized data models',
      'Write optimized database queries',
      'Implement backup and recovery strategies',
    ],
    projectExposure: [
      'Database design for real applications',
      'Query performance tuning challenges',
      'Migration and versioning projects',
    ],
    candidateProfile: ['Basic opportunitiesming knowledge', 'Logical thinking', 'Interest in data management'],
    image: '/images/opportunitiess/database-systems.jpg',
  },
  {
    id: 'systems-design',
    title: 'Systems Design',
    category: 'software',
    description:
      'Learn to design large-scale software systems. Understand trade-offs in architecture decisions, scalability patterns, distributed systems concepts, and how to communicate technical designs effectively.',
    shortDescription: 'Design large-scale systems — architecture trade-offs, scalability, and distributed computing.',
    duration: '12 weeks',
    level: 'Advanced',
    skills: ['System Architecture', 'Scalability Patterns', 'Distributed Systems', 'Load Balancing', 'Technical Communication'],
    tools: ['Draw.io', 'Excalidraw', 'AWS Architecture Tools', 'Lucidchart'],
    outcomes: [
      'Design systems that handle scale and failure gracefully',
      'Communicate architecture decisions clearly',
      'Evaluate trade-offs in system design',
    ],
    projectExposure: [
      'System design whiteboard exercises',
      'Architecture review presentations',
      'Scaling simulation projects',
    ],
    candidateProfile: ['Software development experience', 'Big-picture thinking', 'Interest in architecture'],
    image: '/images/opportunitiess/systems-design.jpg',
  },

  // ── Infrastructure & Systems ─────────────────────────────────
  {
    id: 'computer-systems-engineering',
    title: 'Computer Systems Engineering',
    category: 'infrastructure',
    description:
      'Understand how computers work from the ground up — hardware, operating systems, memory management, and system-level opportunitiesming. Build the foundation for infrastructure and systems roles.',
    shortDescription: 'Understand computers from the ground up — hardware, OS, memory, and system opportunitiesming.',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['Computer Architecture', 'Memory Management', 'System opportunitiesming', 'Process Management', 'I/O Systems'],
    tools: ['Linux', 'C', 'Assembly', 'GDB', 'Virtual Machines'],
    outcomes: [
      'Understand hardware-software interaction',
      'Write system-level opportunitiess',
      'Debug and optimize at the systems level',
    ],
    projectExposure: [
      'Low-level opportunitiesming exercises',
      'OS component simulations',
      'System performance profiling',
    ],
    candidateProfile: ['Curiosity about how computers work', 'Basic opportunitiesming skills', 'Detail-oriented'],
    image: '/images/opportunitiess/computer-systems.jpg',
  },
  {
    id: 'networking-security',
    title: 'Networking & Network Security',
    category: 'infrastructure',
    description:
      'Master the protocols, architecture, and security of modern networks. Configure, troubleshoot, and secure networks from LAN to cloud — the backbone of every connected system.',
    shortDescription: 'Configure, troubleshoot, and secure networks — the backbone of connected systems.',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['TCP/IP', 'Network Configuration', 'Firewalls', 'VPNs', 'Network Monitoring'],
    tools: ['Wireshark', 'Cisco Packet Tracer', 'pfSense', 'Nmap', 'GNS3'],
    outcomes: [
      'Design and configure enterprise networks',
      'Implement network security policies',
      'Troubleshoot network issues systematically',
    ],
    projectExposure: [
      'Network topology design and simulation',
      'Security audit exercises',
      'Incident response drills',
    ],
    candidateProfile: ['Interest in networking', 'Problem-solving skills', 'Attention to detail'],
    image: '/images/opportunitiess/networking-security.jpg',
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    category: 'infrastructure',
    description:
      'Deploy and manage applications on cloud platforms. Learn cloud architecture, serverless computing, containerization, and cost optimization across major cloud providers.',
    shortDescription: 'Deploy and manage cloud applications — serverless, containers, and cost optimization.',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['Cloud Architecture', 'Serverless Computing', 'Containerization', 'Cost Optimization', 'Cloud Security'],
    tools: ['AWS', 'Docker', 'Terraform', 'CloudFormation', 'Lambda'],
    outcomes: [
      'Deploy scalable cloud applications',
      'Implement serverless architectures',
      'Optimize cloud costs and security',
    ],
    projectExposure: [
      'Cloud migration simulations',
      'Serverless application builds',
      'Multi-region deployment exercises',
    ],
    candidateProfile: ['Basic Linux knowledge', 'Understanding of web applications', 'Interest in infrastructure'],
    image: '/images/opportunitiess/cloud-computing.jpg',
  },
  {
    id: 'devops-fundamentals',
    title: 'DevOps Fundamentals',
    category: 'infrastructure',
    description:
      'Bridge development and operations. Build CI/CD pipelines, automate infrastructure, implement monitoring, and learn the culture and practices that enable teams to ship faster and more reliably.',
    shortDescription: 'Build CI/CD pipelines, automate infrastructure, and enable fast, reliable delivery.',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['CI/CD', 'Infrastructure as Code', 'Monitoring & Alerting', 'Automation', 'Container Orchestration'],
    tools: ['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus'],
    outcomes: [
      'Build automated CI/CD pipelines',
      'Manage infrastructure as code',
      'Implement monitoring and alerting systems',
    ],
    projectExposure: [
      'Pipeline configuration for real projects',
      'Infrastructure automation exercises',
      'On-call simulation and incident response',
    ],
    candidateProfile: ['opportunitiesming experience', 'Linux comfort', 'Interest in automation'],
    image: '/images/opportunitiess/devops.jpg',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    category: 'infrastructure',
    description:
      'Protect systems, networks, and data. Learn threat modeling, vulnerability assessment, penetration testing fundamentals, and security best practices used by professional security teams.',
    shortDescription: 'Protect systems and data — threat modeling, vulnerability assessment, and security practices.',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['Threat Modeling', 'Vulnerability Assessment', 'Penetration Testing Basics', 'Security Hardening', 'Incident Response'],
    tools: ['Kali Linux', 'Burp Suite', 'Metasploit', 'OWASP ZAP', 'Snort'],
    outcomes: [
      'Conduct vulnerability assessments',
      'Implement security hardening measures',
      'Respond to and document security incidents',
    ],
    projectExposure: [
      'Capture-the-flag challenges',
      'Security audit reports',
      'Hardening lab exercises',
    ],
    candidateProfile: ['Networking fundamentals', 'Analytical mindset', 'Interest in security'],
    image: '/images/opportunitiess/cybersecurity.jpg',
  },
  {
    id: 'operating-systems',
    title: 'Operating Systems',
    category: 'infrastructure',
    description:
      'Dive deep into how operating systems manage hardware resources — process scheduling, memory allocation, file systems, and concurrency. Gain the foundational knowledge that underpins all systems work.',
    shortDescription: 'Understand process scheduling, memory, file systems, and OS internals.',
    duration: '10 weeks',
    level: 'Advanced',
    skills: ['Process Management', 'Memory Allocation', 'File Systems', 'Concurrency', 'Kernel Concepts'],
    tools: ['Linux', 'C', 'VirtualBox', 'strace', 'GDB'],
    outcomes: [
      'Understand OS internals and resource management',
      'Write concurrent opportunitiess safely',
      'Debug system-level issues',
    ],
    projectExposure: [
      'OS component implementation projects',
      'Concurrency and synchronization exercises',
      'System call tracing and analysis',
    ],
    candidateProfile: ['C opportunitiesming experience', 'Systems curiosity', 'Threading and process concepts'],
    image: '/images/opportunitiess/operating-systems.jpg',
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure Management',
    category: 'infrastructure',
    description:
      'Learn to plan, deploy, and manage the physical and virtual infrastructure that organizations depend on — servers, storage, networking equipment, and enterprise systems administration.',
    shortDescription: 'Plan, deploy, and manage enterprise servers, storage, and infrastructure.',
    duration: '10 weeks',
    level: 'Foundation',
    skills: ['Server Administration', 'Storage Management', 'Virtualization', 'Backup Systems', 'IT Service Management'],
    tools: ['Linux', 'Windows Server', 'VMware', 'Ansible', 'Nagios'],
    outcomes: [
      'Administer enterprise server environments',
      'Implement virtualization and storage solutions',
      'Manage IT service delivery processes',
    ],
    projectExposure: [
      'Server deployment and configuration labs',
      'Backup and disaster recovery planning',
      'IT service desk simulation',
    ],
    candidateProfile: ['Basic computer literacy', 'Organizational skills', 'Interest in IT operations'],
    image: '/images/opportunitiess/it-infrastructure.jpg',
  },

  // ── Electronics & Embedded Systems ───────────────────────────
  {
    id: 'electronics-engineering',
    title: 'Electronics Engineering',
    category: 'electronics',
    description:
      'Design and build electronic circuits from concept to prototype. Learn circuit analysis, PCB design, soldering, and the fundamentals of analog and digital electronics used in real-world products.',
    shortDescription: 'Design circuits, PCBs, and prototypes — analog and digital electronics fundamentals.',
    duration: '12 weeks',
    level: 'Foundation',
    skills: ['Circuit Analysis', 'PCB Design', 'Soldering', 'Analog Electronics', 'Digital Electronics'],
    tools: ['KiCad', 'Multimeter', 'Oscilloscope', 'Soldering Station', 'Breadboards'],
    outcomes: [
      'Design and assemble functional electronic circuits',
      'Create professional PCB layouts',
      'Test and debug electronic systems',
    ],
    projectExposure: [
      'Circuit design and prototyping projects',
      'PCB design-to-fabrication workflow',
      'Electronics testing and measurement labs',
    ],
    candidateProfile: ['Interest in electronics', 'Hands-on learner', 'Basic physics understanding'],
    image: '/images/opportunitiess/electronics-engineering.jpg',
  },
  {
    id: 'embedded-systems',
    title: 'Embedded Systems',
    category: 'electronics',
    description:
      'opportunities the brains of physical devices. Learn embedded C/C++, real-time operating systems, and firmware development for resource-constrained systems that power everything from appliances to vehicles.',
    shortDescription: 'opportunities physical devices — embedded C/C++, RTOS, and firmware development.',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['Embedded C/C++', 'RTOS', 'Firmware Development', 'Low-Level Debugging', 'Real-Time Systems'],
    tools: ['ARM Cortex', 'STM32', 'JTAG Debugger', 'FreeRTOS', 'Eclipse IDE'],
    outcomes: [
      'Develop firmware for embedded processors',
      'Work with real-time operating systems',
      'Debug hardware-software interactions',
    ],
    projectExposure: [
      'Firmware development for real devices',
      'RTOS application projects',
      'Hardware-software integration testing',
    ],
    candidateProfile: ['C opportunitiesming knowledge', 'Interest in hardware', 'Patient debugger'],
    image: '/images/opportunitiess/embedded-systems.jpg',
  },
  {
    id: 'microcontrollers',
    title: 'Microcontrollers',
    category: 'electronics',
    description:
      'Master microcontroller opportunitiesming and interfacing. Work with Arduino, ESP32, and professional MCU platforms to build interactive devices that sense, process, and respond to the physical world.',
    shortDescription: 'opportunities Arduino, ESP32, and MCU platforms to build interactive physical devices.',
    duration: '10 weeks',
    level: 'Foundation',
    skills: ['MCU opportunitiesming', 'Peripheral Interfacing', 'Communication Protocols', 'Power Management', 'Prototyping'],
    tools: ['Arduino', 'ESP32', 'PlatformIO', 'Serial Monitor', 'Logic Analyzer'],
    outcomes: [
      'opportunities microcontrollers for real-world tasks',
      'Interface with sensors, motors, and displays',
      'Implement communication protocols (I2C, SPI, UART)',
    ],
    projectExposure: [
      'Sensor-based interactive device builds',
      'Wireless communication projects',
      'Rapid prototyping challenges',
    ],
    candidateProfile: ['Basic opportunitiesming concepts', 'Hands-on curiosity', 'Interest in building physical things'],
    image: '/images/opportunitiess/microcontrollers.jpg',
  },
  {
    id: 'iot',
    title: 'Internet of Things (IoT)',
    category: 'electronics',
    description:
      'Connect the physical and digital worlds. Build IoT systems that collect sensor data, communicate over networks, and deliver insights through cloud dashboards — from edge devices to the cloud.',
    shortDescription: 'Build IoT systems — sensor data, network communication, and cloud dashboards.',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['IoT Architecture', 'Sensor Integration', 'MQTT & CoAP', 'Edge Computing', 'Cloud IoT Platforms'],
    tools: ['ESP32', 'Raspberry Pi', 'AWS IoT', 'MQTT Broker', 'Node-RED'],
    outcomes: [
      'Design end-to-end IoT solutions',
      'Implement device-to-cloud communication',
      'Build real-time monitoring dashboards',
    ],
    projectExposure: [
      'Smart environment monitoring systems',
      'IoT data pipeline projects',
      'Edge computing prototypes',
    ],
    candidateProfile: ['Microcontroller experience helpful', 'Interest in connected devices', 'Systems thinker'],
    image: '/images/opportunitiess/iot.jpg',
  },
  {
    id: 'hardware-software-integration',
    title: 'Hardware-Software Integration',
    category: 'electronics',
    description:
      'Bridge the gap between hardware design and software control. Learn to write drivers, interface software with custom hardware, and build integrated systems where code meets circuitry.',
    shortDescription: 'Bridge hardware and software — drivers, interfaces, and integrated systems.',
    duration: '12 weeks',
    level: 'Advanced',
    skills: ['Driver Development', 'Hardware Abstraction', 'Signal Processing', 'System Integration', 'Testing & Validation'],
    tools: ['Linux Kernel', 'C/C++', 'Oscilloscope', 'Logic Analyzer', 'Custom PCBs'],
    outcomes: [
      'Write hardware drivers and abstraction layers',
      'Integrate custom hardware with software systems',
      'Validate and test integrated solutions',
    ],
    projectExposure: [
      'Custom hardware driver projects',
      'Full system integration builds',
      'Cross-team hardware-software collaboration',
    ],
    candidateProfile: ['Electronics and opportunitiesming experience', 'Debugging persistence', 'Integration mindset'],
    image: '/images/opportunitiess/hardware-software.jpg',
  },
  {
    id: 'sensor-systems',
    title: 'Sensor Systems',
    category: 'electronics',
    description:
      'Design systems that sense and measure the physical world. Work with temperature, motion, pressure, light, and environmental sensors — calibrating, filtering, and processing real-world data.',
    shortDescription: 'Design sensor systems that measure and process real-world physical data.',
    duration: '10 weeks',
    level: 'Intermediate',
    skills: ['Sensor Selection', 'Signal Conditioning', 'Data Filtering', 'Calibration', 'Analog-to-Digital Conversion'],
    tools: ['Arduino', 'ESP32', 'Various Sensors', 'MATLAB/Python', 'Data Loggers'],
    outcomes: [
      'Select and integrate appropriate sensors',
      'Process and filter raw sensor data',
      'Build reliable measurement systems',
    ],
    projectExposure: [
      'Environmental monitoring station builds',
      'Sensor calibration and accuracy testing',
      'Multi-sensor fusion projects',
    ],
    candidateProfile: ['Basic electronics knowledge', 'Interest in measurement', 'Data-oriented thinking'],
    image: '/images/opportunitiess/sensor-systems.jpg',
  },

  // ── AI & Emerging Technologies ───────────────────────────────
  {
    id: 'ai-foundations',
    title: 'Artificial Intelligence Foundations',
    category: 'ai',
    description:
      'Build a solid understanding of AI concepts — from search algorithms and knowledge representation to expert systems and neural network fundamentals. Develop the thinking patterns that underpin all AI work.',
    shortDescription: 'Build AI foundations — search algorithms, knowledge representation, and neural networks.',
    duration: '12 weeks',
    level: 'Foundation',
    skills: ['AI Concepts', 'Search Algorithms', 'Knowledge Representation', 'Neural Network Basics', 'AI Problem Framing'],
    tools: ['Python', 'NumPy', 'Jupyter Notebooks', 'TensorFlow Lite'],
    outcomes: [
      'Understand core AI principles and approaches',
      'Implement fundamental AI algorithms',
      'Frame real-world problems for AI solutions',
    ],
    projectExposure: [
      'AI algorithm implementation challenges',
      'Problem-solving with AI approaches',
      'Mini expert system builds',
    ],
    candidateProfile: ['Basic opportunitiesming skills', 'Interest in AI', 'Mathematical curiosity'],
    image: '/images/opportunitiess/ai-foundations.jpg',
  },
  {
    id: 'machine-learning-basics',
    title: 'Machine Learning Basics',
    category: 'ai',
    description:
      'Learn to build, train, and evaluate machine learning models. Understand supervised and unsupervised learning, model selection, and the practical workflow of real ML projects.',
    shortDescription: 'Build, train, and evaluate ML models — supervised & unsupervised learning workflows.',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering', 'ML Pipelines'],
    tools: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter', 'Matplotlib'],
    outcomes: [
      'Train and evaluate ML models on real datasets',
      'Select appropriate algorithms for different problems',
      'Build reproducible ML pipelines',
    ],
    projectExposure: [
      'End-to-end ML project builds',
      'Kaggle-style prediction challenges',
      'Data preprocessing and feature engineering exercises',
    ],
    candidateProfile: ['Python proficiency', 'Basic statistics knowledge', 'Data curiosity'],
    image: '/images/opportunitiess/machine-learning.jpg',
  },
  {
    id: 'data-science-fundamentals',
    title: 'Data Science Fundamentals',
    category: 'ai',
    description:
      'Extract insights from data. Learn data analysis, visualization, statistical thinking, and the full data science workflow — from question formulation to insight presentation.',
    shortDescription: 'Extract insights from data — analysis, visualization, and statistical thinking.',
    duration: '10 weeks',
    level: 'Foundation',
    skills: ['Data Analysis', 'Data Visualization', 'Statistical Thinking', 'Data Cleaning', 'Insight Communication'],
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    outcomes: [
      'Analyze datasets to extract meaningful insights',
      'Create compelling data visualizations',
      'Communicate findings to non-technical audiences',
    ],
    projectExposure: [
      'Exploratory data analysis projects',
      'Data storytelling presentations',
      'Real-world dataset challenges',
    ],
    candidateProfile: ['Basic opportunitiesming awareness', 'Curiosity about data', 'Communication skills'],
    image: '/images/opportunitiess/data-science.jpg',
  },
  {
    id: 'automation-systems',
    title: 'Automation Systems',
    category: 'ai',
    description:
      'Automate repetitive tasks and complex workflows. Learn scripting, workflow automation, and systems integration — building solutions that save time and reduce human error across processes.',
    shortDescription: 'Automate tasks and workflows — scripting, integration, and process optimization.',
    duration: '10 weeks',
    level: 'Intermediate',
    skills: ['Scripting', 'Workflow Automation', 'Systems Integration', 'Task Scheduling', 'Error Handling'],
    tools: ['Python', 'Bash', 'n8n', 'Selenium', 'Cron'],
    outcomes: [
      'Automate complex multi-step workflows',
      'Integrate disparate systems and tools',
      'Build reliable, self-recovering automation',
    ],
    projectExposure: [
      'Business process automation projects',
      'Web scraping and data pipeline builds',
      'System integration exercises',
    ],
    candidateProfile: ['Basic scripting ability', 'Process-oriented thinking', 'Efficiency-driven mindset'],
    image: '/images/opportunitiess/automation.jpg',
  },
  {
    id: 'robotics-concepts',
    title: 'Robotics Concepts',
    category: 'ai',
    description:
      'Explore the intersection of AI, electronics, and mechanical systems. Learn robot kinematics, sensor fusion, actuator control, and opportunitiesming — building robots that perceive and act in the physical world.',
    shortDescription: 'Build robots that perceive and act — kinematics, sensors, and actuator control.',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['Robot Kinematics', 'Sensor Fusion', 'Actuator Control', 'Path Planning', 'Robot opportunitiesming'],
    tools: ['Arduino', 'ROS (Robot Operating System)', 'Python', 'Servo Motors', '3D Printing'],
    outcomes: [
      'Build and opportunities functional robots',
      'Implement sensor-based navigation',
      'Design control systems for robotic actuators',
    ],
    projectExposure: [
      'Line-following robot builds',
      'Obstacle avoidance systems',
      'Multi-sensor robot integration',
    ],
    candidateProfile: ['opportunitiesming and electronics basics', 'Hands-on builder', 'Interest in robotics'],
    image: '/images/opportunitiess/robotics.jpg',
  },
  {
    id: 'blockchain-foundations',
    title: 'Blockchain Foundations',
    category: 'ai',
    description:
      'Understand distributed ledger technology from first principles. Learn cryptographic foundations, consensus mechanisms, smart contracts, and decentralized application concepts.',
    shortDescription: 'Understand distributed ledgers — cryptography, consensus, and smart contracts.',
    duration: '10 weeks',
    level: 'Intermediate',
    skills: ['Cryptographic Foundations', 'Consensus Mechanisms', 'Smart Contracts', 'DApp Concepts', 'Token Economics'],
    tools: ['Solidity', 'Hardhat', 'Ethers.js', 'Remix IDE', 'MetaMask'],
    outcomes: [
      'Understand how blockchain networks operate',
      'Write and deploy basic smart contracts',
      'Evaluate blockchain use cases critically',
    ],
    projectExposure: [
      'Smart contract development exercises',
      'Decentralized application prototypes',
      'Blockchain architecture analysis',
    ],
    candidateProfile: ['opportunitiesming experience', 'Interest in decentralization', 'Analytical thinking'],
    image: '/images/opportunitiess/blockchain.jpg',
  },
  {
    id: 'mobile-application-development',
    title: 'Mobile Application Development',
    category: 'ai',
    description:
      'Build mobile applications for iOS and Android. Learn cross-platform development, mobile UI patterns, device APIs, and the full lifecycle from design to app store deployment.',
    shortDescription: 'Build mobile apps — cross-platform development, UI patterns, and app store deployment.',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['Cross-Platform Development', 'Mobile UI/UX', 'Device APIs', 'State Management', 'App Store Deployment'],
    tools: ['React Native', 'Expo', 'Firebase', 'Figma', 'App Store Connect'],
    outcomes: [
      'Build and deploy mobile applications',
      'Implement native device features',
      'Design mobile-first user experiences',
    ],
    projectExposure: [
      'Cross-platform app builds',
      'Mobile UI implementation projects',
      'App store submission workflow',
    ],
    candidateProfile: ['JavaScript/React knowledge helpful', 'Interest in mobile', 'Design sensitivity'],
    image: '/images/opportunitiess/mobile-development.jpg',
  },

  // ── Creative & Digital Technology ────────────────────────────
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    category: 'creative',
    description:
      'Master visual communication through design. Learn typography, color theory, composition, branding, and the tools and techniques used by professional designers to create impactful visual work.',
    shortDescription: 'Master visual communication — typography, color theory, branding, and composition.',
    duration: '10 weeks',
    level: 'Foundation',
    skills: ['Typography', 'Color Theory', 'Composition', 'Branding', 'Visual Communication'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Canva Pro'],
    outcomes: [
      'Create professional brand identity systems',
      'Design print and digital marketing materials',
      'Apply design principles consistently',
    ],
    projectExposure: [
      'Brand identity design projects',
      'Marketing collateral creation',
      'Design critique and iteration sessions',
    ],
    candidateProfile: ['Visual creativity', 'Attention to detail', 'Interest in communication through design'],
    image: '/images/opportunitiess/graphic-design.jpg',
  },
  {
    id: 'multimedia-production',
    title: 'Multimedia Production',
    category: 'creative',
    description:
      'Produce professional multimedia content — video, audio, and interactive media. Learn production planning, shooting, editing, and post-production workflows used in content creation and digital storytelling.',
    shortDescription: 'Produce professional video, audio, and interactive media content.',
    duration: '12 weeks',
    level: 'Foundation',
    skills: ['Video Production', 'Audio Engineering', 'Content Planning', 'Post-Production', 'Storytelling'],
    tools: ['Adobe Premiere Pro', 'After Effects', 'Audition', 'DaVinci Resolve', 'OBS'],
    outcomes: [
      'Produce broadcast-quality video content',
      'Edit and mix professional audio',
      'Plan and execute multimedia production workflows',
    ],
    projectExposure: [
      'Short film and documentary production',
      'Podcast creation and editing',
      'Social media content campaigns',
    ],
    candidateProfile: ['Creative storyteller', 'Interest in media', 'No prior experience required'],
    image: '/images/opportunitiess/multimedia.jpg',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'creative',
    description:
      'Design digital products people love to use. Learn user research, wireframing, prototyping, usability testing, and the design systems methodology that powers top product teams worldwide.',
    shortDescription: 'Design digital products — user research, wireframing, prototyping, and usability testing.',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Systems'],
    tools: ['Figma', 'FigJam', 'Maze', 'Hotjar', 'Adobe XD'],
    outcomes: [
      'Conduct user research and synthesize insights',
      'Create high-fidelity interactive prototypes',
      'Build and maintain scalable design systems',
    ],
    projectExposure: [
      'End-to-end product design case studies',
      'Usability testing and iteration cycles',
      'Design system creation projects',
    ],
    candidateProfile: ['Empathy for users', 'Visual thinking', 'Interest in how people interact with technology'],
    image: '/images/opportunitiess/ui-ux-design.jpg',
  },
  {
    id: 'digital-product-design',
    title: 'Digital Product Design',
    category: 'creative',
    description:
      'Take a product from concept to launch. Learn product thinking, design strategy, cross-functional collaboration, and the full lifecycle of designing digital products that solve real problems.',
    shortDescription: 'Take products from concept to launch — design strategy and cross-functional collaboration.',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['Product Thinking', 'Design Strategy', 'Cross-Functional Collaboration', 'Product Analytics', 'Iteration'],
    tools: ['Figma', 'Notion', 'Miro', 'Amplitude', 'Linear'],
    outcomes: [
      'Define product vision and design strategy',
      'Collaborate effectively with engineering teams',
      'Measure and iterate on product design decisions',
    ],
    projectExposure: [
      'Full product design sprints',
      'Cross-functional team simulations',
      'Product analytics and iteration projects',
    ],
    candidateProfile: ['Design foundation helpful', 'Strategic thinker', 'Interest in product development'],
    image: '/images/opportunitiess/digital-product-design.jpg',
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    category: 'creative',
    description:
      'Bring designs to life with animation. Learn motion design principles, keyframe animation, visual effects, and the techniques used to create engaging animations for web, social media, and broadcast.',
    shortDescription: 'Bring designs to life — motion principles, animation, and visual effects.',
    duration: '10 weeks',
    level: 'Intermediate',
    skills: ['Motion Design Principles', 'Keyframe Animation', 'Visual Effects', '2D Animation', 'Motion Typography'],
    tools: ['After Effects', 'Cinema 4D', 'Lottie', 'Rive', 'Blender'],
    outcomes: [
      'Create professional motion graphics animations',
      'Design animated UI interactions',
      'Produce visual effects for digital content',
    ],
    projectExposure: [
      'Brand animation projects',
      'UI micro-interaction design',
      'Animated explainer video production',
    ],
    candidateProfile: ['Design or video editing background helpful', 'Interest in animation', 'Creative experimentation'],
    image: '/images/opportunitiess/motion-graphics.jpg',
  },
]
