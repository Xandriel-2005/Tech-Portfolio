// ════════════════════════════════════════
// Site Configuration — Edit this file to update your portfolio
// ════════════════════════════════════════

const siteConfig = {

  // ── Personal Info ──────────────────────
  personal: {
    firstName: 'CHIRAG',
    lastName: 'GUPTA',
    name: 'Chirag Gupta',
    eyebrow: 'COMPUTER SCIENCE & ENGINEERING / FULL-STACK / ML',
    headline: ['I design', 'the systems behind', 'better ideas.'],
    headlineHighlight: 'systems',
    bio: "I'm Chirag, a CSE student turning ambitious ideas into fast, useful interfaces and intelligent systems.",
    availability: 'AVAILABLE FOR INTERNSHIPS',
    email: 'cgupta814@gmail.com',
    github: 'https://github.com/Xandriel-2005',
    linkedin: 'https://linkedin.com/in/chirag-gupta-535a82326',
    resumeLink: '#resume', // Now points to the dedicated resume page
    photoCaption: 'IDENTITY / 01'
  },

  // ── Projects ───────────────────────────
  projects: [
    {
      name: 'VisionOps',
      category: 'AI SYSTEM',
      metric: 'PRODUCTION',
      description: 'A self-service, adapter-based MLOps platform for training, tracking, and running inference on computer vision models.',
      github: 'https://github.com/Xandriel-2005/VisionOps',
      live: ''
    },
    {
      name: 'BFC-IMS',
      category: 'FULL-STACK',
      metric: 'LIVE CLIENT',
      description: 'A full-stack inventory management system enabling non-technical staff to seamlessly manage daily orders, vendors, and inventory.',
      github: '',
      live: ''
    },
    {
      name: 'TerraVision',
      category: 'DATA TOOL',
      metric: 'ACTIVE R&D',
      description: 'Geospatial computer vision for terrain analysis and satellite imagery processing using deep learning models.',
      github: 'https://github.com/Xandriel-2005/TerraVision',
      live: ''
    },
    {
      name: 'Bookvnts',
      category: 'WEB PLATFORM',
      metric: 'DEPLOYED',
      description: 'A complete event booking platform built from scratch with secure user sessions and real-time form validation.',
      github: 'https://github.com/Xandriel-2005/Bookvnts',
      live: 'https://bookvnts-eventbooking.infy.uk/'
    },
    {
      name: 'LifeQuest',
      category: 'FULL-STACK',
      metric: 'IN DEVELOPMENT',
      description: 'Currently in active development. A project that\'s evolving as I learn — details coming soon. Watch this space.',
      github: 'https://github.com/Xandriel-2005/LifeQuest',
      live: ''
    },
  ],

  // ── Experience ─────────────────────────
  experience: [
    {
      role: 'MLOps Engineering Intern',
      company: 'Binomial Technologies Pvt. Ltd.',
      location: 'Jaipur, Rajasthan',
      date: 'Summer 2026',
      description: 'Built production MLOps pipelines for training and deploying CV models. Orchestrated ML workflows using Apache Airflow and MLflow. Containerised inference services with Docker.',
    },
    {
      role: 'Web Development Intern (In-House)',
      company: 'KISTECHNO Software',
      location: 'Jaipur, Rajasthan',
      date: 'Summer 2025',
      description: 'Built responsive front-end interfaces using HTML, CSS, JavaScript, and PHP. Integrated dynamic backend logic and delivered functional prototypes aligned with industry standards.',
    },
    {
      role: 'B.Tech in Computer Science',
      company: 'SKIT, Management & Gramothan',
      location: 'Jaipur, Rajasthan',
      date: '2024 - 2028',
      description: 'Pursuing Bachelor of Technology in Computer Science. Building foundational knowledge in data structures, algorithms, and software engineering.',
    },
  ],

  // ── Skills & Exploration ───────────────
  skills: [
    {
      category: 'Languages',
      items: ['PYTHON', 'C++', 'JAVASCRIPT/TYPESCRIPT', 'JAVA', 'PHP', 'SQL']
    },
    {
      category: 'Frameworks',
      items: ['REACT', 'NODE.JS', 'TAILWIND', 'BOOTSTRAP']
    },
    {
      category: 'ML & AI',
      items: ['COMPUTER VISION', 'DEEP LEARNING', 'YOLO', 'HUGGINGFACE']
    },
    {
      category: 'Infrastructure',
      items: ['DOCKER', 'AIRFLOW', 'MLFLOW', 'LINUX']
    }
  ],

  // ── Footer ─────────────────────────────
  footer: {
    name: 'CHIRAG GUPTA',
    tagline: 'BUILT WITH CURIOSITY.',
  },
};

export default siteConfig;
