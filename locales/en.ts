// locales/en.ts
export default {
  hello: 'Hello',
  welcome: 'Hello {name}!',

  navbar: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },

  hero: {
    title_prefix: 'Frontend Developer specializing in',
    title_stack: ' NextJs & React & TailwindCSS',
    subtitle:
      "I craft modern, responsive, and performant web applications with a focus on user experience and developer maintainability.",
    cta_hire: 'Hire Me',
    cta_projects: 'View Projects',
  },

  about: {
    heading: 'About Me',
    bio:
      "I'm Olivier Kouassi — A former geotechnical engineer who transformed a passion for code into a craft for building performant web solutions. Eager to collaborate and fully invest my unique problem-solving skills in your next project.",
    skills: {
      next: 'Next',
      react: 'React',
      typescript: 'TypeScript',
      tailwind: 'TailwindCSS',
      sass: 'Sass',
      auth: 'JWT/OAuth',
    },
  },

  services: {
    heading: 'Services Offered',
    intro:
      'Specialized backend development services to help your business build robust and scalable systems.',
    items: {
      django_api_title: 'Django REST API Development',
      django_api_desc:
        'Custom API development with Django REST Framework, following best practices for security, performance, and maintainability.',
      auth_title: 'API Authentication (JWT/OAuth2)',
      auth_desc:
        'Implement secure authentication systems using industry-standard protocols like JWT and OAuth2.',
      db_title: 'Database Design & Optimization',
      db_desc:
        'Design efficient database schemas and optimize queries for PostgreSQL, MySQL, and other database systems.',
      docker_title: 'Dockerization & CI/CD Setup',
      docker_desc:
        'Containerize your applications with Docker and set up continuous integration and deployment pipelines.',
      cloud_title: 'Cloud Deployment',
      cloud_desc:
        'Deploy your applications to Heroku, AWS, or Render with proper configuration and monitoring.',
      bugfix_title: 'Bug Fixing & Backend Refactoring',
      bugfix_desc:
        'Identify and fix bugs in existing systems, and refactor code for better performance and maintainability.',
    },
    cta: "Let's Work Together",
  },

  projects: {
    heading: 'Projects',
    intro:
      'A showcase of my backend development work, featuring Django REST APIs and related technologies.',
    loading: 'Loading projects...',
    error_fetch: 'Failed to fetch projects',
    error_unexpected: 'Unexpected error',
    untitled: 'Untitled Project',
    no_description: 'No description provided.',
    github: 'GitHub',
    demo: 'Demo',
    video: 'Video',
  },

  contact: {
    heading: 'Get In Touch',
    intro:
      "Have a project in mind or want to discuss how I can help your business? Let's talk!",
    info_heading: 'Contact Information',
    email_label: 'Email',
    connect_heading: 'Connect with me',
    form_heading: 'Send a Message',
    success_title: 'Message Sent!',
    success_text:
      "Thank you for reaching out. I'll get back to you as soon as possible.",
    fields: {
      name_label: 'Name',
      name_placeholder: 'Your name',
      email_label: 'Email',
      email_placeholder: 'your.email@example.com',
      message_label: 'Message',
      message_placeholder: 'Tell me about your project...',
    },
    sending: 'Sending...',
    send: 'Send Message',
  },

  testimonials: {
    heading: 'Testimonials',
    intro:
      "What clients say about working with me. This section will be updated as you complete projects.",
    future_client: 'Future Client',
    role_founder: 'Tech Startup Founder',
    role_pm: 'Product Manager',
    role_cto: 'CTO',
    content_1:
      "This section will showcase feedback from satisfied clients who have worked with you. As you complete projects, you'll add real testimonials here.",
    content_2:
      'Client testimonials build trust and demonstrate your ability to deliver quality work. This placeholder will be replaced with actual client feedback.',
    content_3:
      'Screenshots of feedback, quotes from Upwork/Fiverr clients, or even short audio/video praise can be added here as you gain more experience.',
  },

  blog: {
    heading: 'Blog & Case Studies',
    intro:
      'Technical articles and case studies to share knowledge and demonstrate expertise.',
    read_more: 'Read more',
    coming_soon: 'Coming Soon',
    post_1_title: 'How I Built a Doctor Booking API With Django + JWT',
    post_1_desc:
      'A detailed walkthrough of building a secure appointment booking system with Django REST Framework and JWT authentication.',
    post_2_title: 'A Step-by-Step Guide to Deploying Django on Render With Docker',
    post_2_desc:
      'Learn how to containerize your Django application and deploy it to Render with proper configuration and monitoring.',
    post_3_title:
      'My Experience Contributing to an Open Source API for Collaboration',
    post_3_desc:
      'Insights and lessons learned from contributing to open source projects in the Django ecosystem.',
  },

  footer: {
    role: 'Frontend Developer',
    rights: 'All rights reserved.',
  },
} as const