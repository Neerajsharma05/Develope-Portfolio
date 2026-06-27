export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export const SOCIALS = [
  { label: 'GitHub', handle: 'neerajsharma05', href: 'https://github.com' },
  { label: 'LinkedIn', handle: 'in/neerajsharma', href: 'https://linkedin.com' },
  { label: 'Twitter', handle: '@neeraj_dev', href: 'https://twitter.com' },
]

export const TIMELINE = [
  {
    year: 'OCT, 2025  — Present',
    title: 'Frontend Developer',
    org: 'Swiftsence Consultancy',
    desc: 'Building modern, responsive web applications with React, Tailwind CSS, and JavaScript while collaborating on real-world client projects and scalable UI solutions',
  },
  {
    year: '2024 — 2025',
    title: 'Freelance Web Developer',
    org: 'Self-employed',
    desc: 'Delivered modern marketing sites and web apps for early-stage clients using React and Tailwind.',
  },
  {
    year: '2023 — 2026',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'Buddha Degree College',
    desc: 'Graduated with a strong foundation in web technologies, data structures, and UI engineering and also Built projects like Eventify, Moviefy, Recipe App.',
  },
]

export const SKILL_GROUPS = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 93 },
      { name: 'JavaScript', level: 92 },
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Redux Toolkit', level: 88 },
      { name: 'Framer Motion', level: 82 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 84 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT Authentication', level: 85 },
      { name: 'Nodemailer', level: 82 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', level: 87 },
      { name: 'SQL', level: 85 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 92 },
      { name: 'Vite', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 88 },
      { name: 'Figma', level: 80 },
    ],
  },
]

export const EXPERIENCE = [
  {
    role: 'Frontend Developer',
    company: 'Swiftsence Consultancy',
    duration: 'OCT, 2025 — Present',
    points: [
      'Developing responsive and scalable web applications using React, JavaScript, and Tailwind CSS.',
      'Collaborating with designers and backend developers to deliver production-ready features',
      'Building reusable UI components and improving application performance and user experience.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Independent',
    duration: '2024 — 2025',
    points: [
      'Shipped 10+ responsive websites and web apps for clients across industries.',
      'Built authentication systems, REST APIs, contact forms, and admin dashboards for client projects',
      'Collaborated directly with clients to translate ideas into polished interfaces.',
    ],
  },
]

export const PROJECTS = [
  
  {
    name: 'Moviefy',
    tagline: 'Movie discovery application',
    description:
      'A movie browsing application powered by the TMDB API featuring trending movies, search, categories, and detailed movie information.',
    image: '/project-moviefy.png',
    stack: ['React', 'TMDB API', 'Context API', 'Tailwind CSS'],
    github: 'https://github.com/Neerajsharma05',
    demo: 'https://moviefy-frontend-six.vercel.app/',
    accent: '#10b981',
  },
  {
    name: 'ERP & KYC Management System',
    tagline: 'Enterprise resource planning & employee management',
    description:
      'A full-stack ERP application featuring secure authentication, role-based access, KYC verification, branch management, file uploads, and admin dashboards.',
    image: '/project-erp.png',
    stack: [
      'React',
      'Node.js',
      'Express.js',
      'MySQL',
      'Tailwind CSS',
    ],
    github: 'https://github.com/Neerajsharma05',
    demo: 'https://www.svdinfracity.com/Home/SvdCity',
    accent: '#7c3aed',
  },
  {
    name: 'SadaShiv BuildTech',
    tagline: 'Construction company website',
    description:
      'Developed a modern business website with responsive design, service pages, contact forms, email integration, and performance-focused UI.',
    image: '/project-sadashiv.png',
    stack: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Nodemailer',
    ],
    github: 'https://github.com/Neerajsharma05',
    demo: 'http://www.sadashivbuildtech.com/',
    accent: '#06b6d4',
  },
  {
    name: 'Eventify',
    tagline: 'Event discovery platform',
    description:
      'A responsive event management platform where users can discover events across India with interactive UI, event details, and seamless navigation.',
    image: '/project-eventify.png',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Neerajsharma05',
    demo: 'https://neerajsharma05.github.io/Eventify/',
    accent: '#f97316',
  },
  ,
  {
    name: 'Recipe App',
    tagline: 'Recipe search application',
    description:
      'A recipe discovery app using TheMealDB API with ingredient search, recipe details, and a clean responsive user interface.',
    image: '/project-recipe.png',
    stack: ['React', 'REST API', 'Tailwind CSS'],
    github: 'https://github.com/Neerajsharma05/Recipe-App',
    demo: 'https://neerajsharma05.github.io/Recipe-App/',
    accent: '#ef4444',
  },
  {
    name: 'Developer Portfolio',
    tagline: 'Personal portfolio website',
    description:
      'A modern developer portfolio showcasing projects, skills, experience, animations, and responsive design with smooth interactions.',
    image: '/project-portfolio.png',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Neerajsharma05',
    demo: '#',
    accent: '#8b5cf6',
  },
]
export const ACHIEVEMENTS = [
  {
    title: 'Tech Yuva Winner',
    desc: 'First place at the Tech Yuva development competition for an innovative web solution.',
    glow: '#7c3aed',
  },
  {
    title: 'HackerRank Competition Winner',
    desc: 'Ranked top in a competitive coding challenge among hundreds of participants.',
    glow: '#06b6d4',
  },
  {
    title: 'Research Paper Publication',
    desc: 'Co-authored and published a research paper on modern web interface design.',
    glow: '#f97316',
  },
]

export const CERTIFICATES = [
  { title: 'Meta Front-End Developer', issuer: 'Coursera · Meta', year: '2024' },
  { title: 'Advanced React', issuer: 'Scrimba', year: '2024' },
  { title: 'JavaScript Algorithms', issuer: 'freeCodeCamp', year: '2023' },
  { title: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2023' },
  { title: 'UI/UX Design Foundations', issuer: 'Google', year: '2023' },
  { title: 'Node.js Essentials', issuer: 'Udemy', year: '2022' },
]
