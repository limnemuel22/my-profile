export const profile = {
  name: 'Nemuel Lim',
  fullName: 'Nemuel Sumagui Lim',
  shortName: 'Nem',
  aliases: ['Nemuel Lim', 'Nemuel Sumagui Lim', 'Nem', 'Nem Profile'],
  initials: 'NL',
  siteUrl: (import.meta.env.VITE_SITE_URL || 'https://my-profile.vercel.app').replace(/\/$/, ''),
  title: 'Senior Frontend Developer · Angular & Full-Stack',
  location: 'Bacoor, Cavite, Philippines',
  headline:
    'Nine years building web apps. Angular, TypeScript, and JavaScript are my core — with React, Vue, Apigee, and .NET when the project needs it.',
  about: [
    'Hi, I’m Nemuel Sumagui Lim — Nemuel Lim, or Nem for short. This is my profile: Nem Profile, a page for who I am and the work I ship. I have 9 years in IT as a web application developer. My primary expertise is Angular, TypeScript, and JavaScript. React and Vue are my secondary frameworks.',
    'At Blackfort I work as a senior frontend engineer and, depending on the project, as a full-stack developer. Day to day that usually means Angular on the UI and Apigee for API management, with T-SQL and C# .NET when we own more of the stack. I have also shipped static and headless-CMS sites with React (Gatsby), Netlify, Decap CMS, and Strapi.',
    'I started as a junior full-stack developer on PHP and CodeIgniter, then moved into frontend-heavy Angular work for local and international teams. I am continuously learning, adaptive, and flexible — currently deepening React, Node.js / NestJS, and Flutter. I also use AI-assisted development in my daily workflow with Cursor, Claude, ChatGPT, and GitHub Copilot. Outside work I like sports, mobile games, and PC games. Originally from Talon, Amadeo, Cavite.',
  ],
  avatar: '/nemuel.jpg',
  thumbnail: '/og.jpg',
  email: 'lim.nemuel.22@gmail.com',
  phone: '09059772573',
  phoneHref: 'tel:+639059772573',
  social: {
    github: 'https://github.com/limnemuel22',
    linkedin: 'https://www.linkedin.com/in/nemuel-lim-57244629b',
  },
  stats: [
    { value: '9', label: 'Years in web development' },
    { value: 'Angular', label: 'Primary frontend stack' },
    { value: '2+', label: 'Years with Apigee APIs' },
  ],
}

export const experience = [
  {
    role: 'Senior Frontend / Full Stack Developer',
    company: 'Blackfort PH',
    period: 'Jan 2023 — Present',
    location: 'Philippines',
    highlights: [
      'Senior frontend, and full-stack when the project needs it — mainly Angular on the UI with Apigee, T-SQL, and C# .NET.',
      'Lead front-end developer on the Cebu Pacific Airlines assignment, working closely with QA and product.',
      'Also built static and headless-CMS sites with React (Gatsby), Netlify, Decap CMS, and Strapi.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Accenture',
    period: 'May 2020 — Dec 2022',
    location: 'Mandaluyong City, NCR',
    highlights: [
      'Frontend-focused Angular work for client management, inventory, and financial record systems.',
      'Delivered enterprise web applications in a large delivery organization using Agile practices.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Blackfort PH',
    period: 'Oct 2021 — Apr 2022',
    location: 'Philippines',
    highlights: [
      'Mid-to-senior full-stack engagement building web applications for consulting clients.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'InterVenn Biosciences',
    period: 'Nov 2020 — Apr 2021',
    location: 'Philippines / US collaboration',
    highlights: [
      'Frontend-focused engineering on web platforms for a biotech product team.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Metrolime, Inc.',
    period: 'Aug 2018 — Mar 2020',
    location: 'Mandaluyong City, NCR',
    highlights: [
      'Frontend developer for an international product team.',
      'Built a video karaoke application with Angular, Electron, and Node.js.',
      'Also worked on an email server and a POS system for a trampoline park business.',
    ],
  },
  {
    role: 'Junior Full Stack Developer',
    company: 'Sert Technology Inc.',
    period: 'Jul 2017 — Aug 2018',
    location: 'Makati City, NCR',
    highlights: [
      'First role: junior full-stack developer on an HR information system using PHP, CodeIgniter, and MySQL.',
      'Supported clients on production issues and app concerns for more than a year.',
    ],
  },
]

export const education = [
  {
    school: 'City College of Tagaytay',
    degree: 'Bachelor of Science in Information Technology',
    period: '2013 — 2017',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'Angular 6–latest',
      'TypeScript',
      'JavaScript',
      'React',
      'Vue',
      'HTML5',
      'CSS3',
      'SCSS',
      'Bootstrap',
      'jQuery',
      'Tailwind CSS',
    ],
  },
  {
    title: 'AI-Assisted Development',
    items: [
      'Cursor (Claude Opus, Grok, and other supported models)',
      'Claude',
      'ChatGPT',
      'GitHub Copilot',
    ],
  },
  {
    title: 'Angular UI & apps',
    items: ['Angular Material', 'PrimeNG', 'Kendo UI', 'ngx-bootstrap', 'NgRx', 'Electron'],
  },
  {
    title: 'Backend & data',
    items: ['Apigee', 'REST APIs', 'Node.js', 'NestJS', 'C# .NET', 'T-SQL', 'PHP', 'CodeIgniter', 'MySQL'],
  },
  {
    title: 'Platforms & process',
    items: [
      'Git',
      'GitHub',
      'Azure Repos',
      'Bitbucket',
      'Jira',
      'Trello',
      'Slack',
      'Gatsby',
      'Strapi',
      'Decap CMS',
      'Netlify',
      'Agile',
      'Waterfall',
    ],
  },
]

export const projects = [
      {
        name: 'Cebu Pacific web applications',
        company: 'Blackfort PH',
        description:
          'Lead frontend developer on airline web apps, working with QA and product to ship production features for Cebu Pacific.',
        tags: ['Angular', 'TypeScript', 'Apigee'],
        live: null,
        repo: null,
      },
      {
        name: 'Tinsel CRM',
        company: 'Blackfort PH',
        description:
          'Construction CRM used for proposals, invoices, franchise templates, payments, and field support. Frontend feature work plus client support.',
        tags: ['Frontend', 'CRM', 'Support'],
        live: 'https://www.tinselcrm.com/',
        repo: null,
      },
      {
        name: 'MasterCare Plus',
        company: 'Global Health',
        description:
          'Healthcare cloud platform work: clinical test items, client records, outcome measures, and module delivery in a MasterCare environment.',
        tags: ['Healthcare', 'Cloud', 'SQL'],
        live: null,
        repo: null,
      },
      {
        name: 'CAEMC',
        company: null,
        description: 'Company web application for CAEMC.',
        tags: ['Web app'],
        live: 'https://www.caemc.com.ph/home',
        repo: null,
      },
      {
        name: 'Komento Live',
        company: 'Komento',
        description:
          'Live-selling and liquidation portal used to move overstock through wholesale, retail, and live-commerce channels.',
        tags: ['Web portal'],
        live: 'https://portal.komentolive.com/',
        repo: null,
      },
      {
        name: 'Agora Express',
        company: null,
        description:
          'Portal and login experience for a Philippine cargo and logistics service covering nationwide delivery.',
        tags: ['Web portal', 'Logistics'],
        live: null,
        repo: null,
      },
      {
        name: 'Headless CMS and static sites',
        company: 'Blackfort PH',
        description:
          'Static and CMS-backed sites built with React (Gatsby), Netlify, Decap CMS, and Strapi.',
        tags: ['Gatsby', 'Strapi', 'Decap CMS', 'Netlify'],
        live: null,
        repo: null,
      },
      {
        name: 'Client management system',
        company: 'Accenture',
        description:
          'Frontend Angular work on a client management system delivered in an enterprise Agile team.',
        tags: ['Angular', 'TypeScript'],
        live: null,
        repo: null,
      },
      {
        name: 'Inventory system',
        company: 'Accenture',
        description: 'Frontend Angular work on a client inventory system.',
        tags: ['Angular', 'TypeScript'],
        live: null,
        repo: null,
      },
      {
        name: 'Financial record system',
        company: 'Accenture',
        description: 'Frontend Angular work on a financial records application for an enterprise client.',
        tags: ['Angular', 'TypeScript'],
        live: null,
        repo: null,
      },
      {
        name: 'Health solution with lab graphs',
        company: 'InterVenn Biosciences',
        description:
          'Health application that presents blood-test and related results in graphs. Frontend-focused work in a biotech product environment.',
        tags: ['Angular', 'Frontend', 'Healthcare'],
        live: null,
        repo: null,
      },
      {
        name: 'Karaoke, photo booth, and video message',
        company: 'Metrolime / Racket Studios',
        description:
          'Videoke, photobooth, and video-message machines built with Angular and Electron.',
        tags: ['Angular', 'Electron', 'Node.js'],
        live: 'https://racketstudios.com/karaoke-photo-booth-charleston/',
        repo: null,
      },
      {
        name: 'Email server',
        company: 'Metrolime, Inc.',
        description: 'Email server work for Metrolime alongside the karaoke and POS products.',
        tags: ['Node.js'],
        live: null,
        repo: null,
      },
      {
        name: 'Trampoline park POS',
        company: 'Metrolime, Inc.',
        description: 'Point-of-sale system for a trampoline park business.',
        tags: ['POS', 'Web app'],
        live: null,
        repo: null,
      },
      {
        name: 'HR information system',
        company: 'Sert Technology Inc.',
        description:
          'HR web app for recruitment and hiring, built with PHP, CodeIgniter, and MySQL, plus client support after release.',
        tags: ['PHP', 'CodeIgniter', 'MySQL'],
        live: 'https://serttech.hrweb.ph/login',
        repo: null,
      },
      {
        name: 'Battle Rap PH',
        company: null,
        description:
          'Contributed to the Battle Rap PH web and admin apps — public-facing site and admin tooling for the community.',
        tags: ['React', 'Web app'],
        live: null,
        repo: null,
      },
]
