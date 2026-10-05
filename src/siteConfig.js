// ════════════════════════════════════════
// Site Configuration — Edit this file to update your portfolio
// ════════════════════════════════════════

const siteConfig = {

  // ── Personal Info ──────────────────────
  personal: {
    name: 'Chirag Gupta',
    tagline: 'I build systems that see, learn, and ship.',
    bio: [
      'I\'m a 20-year-old Computer Science student from <strong>Kota, Rajasthan</strong>, currently studying at <strong>SKIT, Jaipur</strong>. I\'m driven by a deep curiosity for how things work under the hood — from the pixel-level operations in computer vision to the orchestration layers that get models from notebook to production.',
      'My recent internship solidified my passion for <strong>MLOps</strong> — building the infrastructure that takes machine learning from experiment to deployment. I worked on production pipelines, learned to wrangle Airflow DAGs, and got my hands dirty with model tracking in MLflow.',
      'When I\'m not writing code, I\'m usually exploring new tools, breaking things to understand them, or reading about system design patterns. I believe the best way to learn is to build — and ship.',
    ],
    roles: ['CS Undergrad @ SKIT Jaipur', 'Computer Vision', 'MLOps', 'Full-Stack'],
    email: 'cgupta814@gmail.com',
    github: 'https://github.com/Xandriel-2005',
    githubHandle: 'Xandriel-2005',
    linkedin: 'https://linkedin.com/in/',  // TODO: Add your LinkedIn URL
    // twitter: 'https://twitter.com/yourhandle',  // Uncomment & fill when ready
    resumeLink: '',  // TODO: Add your resume PDF link
  },

  // ── Stats shown in About section ──────
  stats: [
    { value: 5, label: 'projects built', isCounter: true },
    { value: 8, label: 'technologies', isCounter: true },
    { value: '2027', label: 'expected grad', isCounter: false },
    { value: '●', label: 'open to work', isCounter: false, isStatus: true },
  ],

  // ── Projects ───────────────────────────
  projects: [
    {
      name: 'VisionOps',
      status: 'deployed',      // 'deployed' | 'active' | 'building' | 'hackathon' | 'archived' | 'private'
      date: 'Jul 2026',
      featured: true,
      description: 'Built after my internship at Binomial Technologies, applying everything I learned on the job. A self-service, adapter-based MLOps platform for training, tracking, and running inference on computer vision object-detection models. Built on Airflow, MLflow, and a pluggable BaseDetector interface so new architectures (YOLO, Hugging Face, custom) drop in without touching the pipeline.',
      tech: ['Python', 'Airflow', 'MLflow', 'YOLO', 'HuggingFace', 'Docker'],
      github: 'https://github.com/Xandriel-2005/VisionOps',
      live: '',  // Add live demo link if available
    },
    {
      name: 'TerraVision',
      status: 'active',
      date: 'Sep 2026',
      featured: false,
      description: 'Geospatial computer vision project exploring terrain analysis and satellite imagery processing. Combines remote sensing data with deep learning models for environmental monitoring and land classification.',
      tech: ['Python', 'Computer Vision', 'GIS'],
      github: 'https://github.com/Xandriel-2005/TerraVision',
      live: '',
    },
    {
      name: 'BFC-IMS',
      status: 'private',
      date: '2026',
      featured: false,
      description: 'Inventory Management System built for real-world business operations. Handles stock tracking, order management, and reporting with a clean interface designed for non-technical users.',
      tech: ['React', 'Node.js', 'SQL'],
      github: '',
      live: '',
    },
    {
      name: 'Veilex',
      status: 'hackathon',
      date: '2026',
      featured: false,
      description: 'Hackathon project built under time pressure. Rapid prototyping and creative problem-solving under constraints — the kind of build where you learn the most in the shortest time.',
      tech: ['JavaScript', 'Python', 'API'],
      github: 'https://github.com/Xandriel-2005/Veilex',
      live: '',
    },
    {
      name: 'LifeQuest',
      status: 'building',
      date: '2026 · ongoing',
      featured: false,
      description: 'Currently in active development. A project that\'s evolving as I learn — details coming soon. Watch this space.',
      tech: ['TBD'],
      github: 'https://github.com/Xandriel-2005/LifeQuest',
      live: '',
    },
    {
      name: 'Bookvnts',
      status: 'archived',
      date: 'Jul 2025',
      featured: false,
      description: 'Built after a 15-day in-house internship at Kistechno Software, Jaipur, applying the skills they taught. A full event booking platform built with hand-written PHP. No frameworks, no shortcuts. Where it all started. Raw code, maximum learning.',
      tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/Xandriel-2005/Bookvnts',
      live: 'https://bookvnts-eventbooking.infy.uk/',
    },
  ],

  // ── Skills ─────────────────────────────
  // level: 0-100 (controls the bar fill width)
  skills: [
    {
      category: 'Languages',
      items: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript / TypeScript', level: 75 },
        { name: 'C++', level: 90 },
        { name: 'Java', level: 70 },
        { name: 'HTML / CSS', level: 80 },
      ],
    },
    {
      category: 'Frameworks & Tools',
      items: [
        { name: 'React', level: 72 },
        { name: 'Node.js', level: 65 },
        { name: 'Git / Linux', level: 75 },
        { name: 'Docker', level: 55 },
        { name: 'SQL / Databases', level: 70 },
      ],
    },
    {
      category: 'ML / AI',
      items: [
        { name: 'Computer Vision', level: 75 },
        { name: 'MLOps (Airflow, MLflow)', level: 70 },
        { name: 'Deep Learning', level: 60 },
        { name: 'YOLO / HuggingFace', level: 65 },
      ],
    },
  ],

  // ── Experience / Timeline ──────────────
  experience: [
    {
      role: 'MLOps Engineering Intern',
      company: 'Binomial Technologies Pvt. Ltd., Jaipur',
      date: 'Summer 2026 · 45 days',
      description: 'Completed a 45-day summer internship at Binomial Technologies Pvt. Ltd., Jaipur. Worked on production MLOps pipelines — building infrastructure for training, tracking, and deploying computer vision models. Gained hands-on experience with Airflow orchestration, MLflow experiment tracking, and model serving in production environments.',
      tags: ['MLOps', 'Airflow', 'MLflow', 'Python', 'Docker'],
    },
    {
      role: 'Web Development Intern',
      company: 'KIS Techno Software, Jaipur',
      date: 'Summer 2025 · 15 days',
      description: 'Completed a 15-day in-house internship after first year. Learned full-stack web development fundamentals which I then applied to build BookVNTS — a complete event booking platform from scratch using PHP, MySQL, and vanilla JavaScript.',
      tags: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    },
    {
      role: 'B.Tech Computer Science',
      company: 'SKIT, Jaipur',
      date: '2024 - Present',
      description: 'Pursuing Computer Science with a focus on machine learning and systems engineering. Active in hackathons and building side projects to apply classroom theory to real-world problems.',
      tags: ['DSA', 'OS', 'DBMS', 'ML'],
    },
  ],

  // ── Blog Posts (add when you start writing) ──
  // blogPosts: [
  //   {
  //     title: 'Building VisionOps: Lessons in MLOps Architecture',
  //     date: 'Oct 2026',
  //     excerpt: 'What I learned about adapter patterns...',
  //     link: '/blog/visionops-lessons',
  //   },
  // ],

  // ── Terminal hero config ───────────────
  terminal: {
    user: 'chirag',
    host: 'portfolio',
    path: '~/portfolio',
    branch: 'main',
    command: 'cat about_me.md',
  },

  // ── Footer ─────────────────────────────
  footer: {
    credit: 'Designed & built by Chirag Gupta',
    tagline: '© 2026',
  },
};

export default siteConfig;
