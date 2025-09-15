// locales/fr.ts
export default {
  hello: 'Salut',
  welcome: 'Salut {name}!',

  navbar: {
    home: 'Accueil',
    about: 'À propos',
    projects: 'Projets',
    contact: 'Contact',
  },

  hero: {
    title_prefix: 'Développeur Frontend spécialisé en',
    title_stack: ' NextJs & React & TailwindCSS',
    subtitle:
      "Je crée des applications web modernes, réactives et performantes, avec un accent sur l'expérience utilisateur et la maintenabilité pour les développeurs.",
    cta_hire: 'Engagez-moi',
    cta_projects: 'Voir les projets',
  },

  about: {
    heading: 'À propos de moi',
    bio:
      "Je suis Olivier Kouassi — Ancien ingénieur géotechnicien devenu développeur, j'ai transformé une passion pour le code en un savoir-faire pour construire des solutions web performantes. Prêt à collaborer et à mettre mes compétences en résolution de problèmes au service de votre projet.",
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
    heading: 'Services proposés',
    intro:
      "Services de développement backend spécialisés pour aider votre entreprise à créer des systèmes robustes et évolutifs.",
    items: {
      django_api_title: 'Développement d’API Django REST',
      django_api_desc:
        "Développement d’API sur mesure avec Django REST Framework, en suivant les bonnes pratiques de sécurité, de performance et de maintenabilité.",
      auth_title: 'Authentification d’API (JWT/OAuth2)',
      auth_desc:
        "Mise en place de systèmes d’authentification sécurisés avec des protocoles standard comme JWT et OAuth2.",
      db_title: 'Conception et optimisation de bases de données',
      db_desc:
        "Concevoir des schémas efficaces et optimiser les requêtes pour PostgreSQL, MySQL et autres systèmes.",
      docker_title: 'Dockerisation et mise en place CI/CD',
      docker_desc:
        "Containeriser vos applications avec Docker et configurer des pipelines d’intégration et de déploiement continus.",
      cloud_title: 'Déploiement Cloud',
      cloud_desc:
        "Déployer vos applications sur Heroku, AWS ou Render avec la configuration et la supervision adaptées.",
      bugfix_title: 'Correction de bogues et refactorisation backend',
      bugfix_desc:
        "Identifier et corriger les bogues des systèmes existants, et refactoriser pour de meilleures performances et une meilleure maintenabilité.",
    },
    cta: 'Travaillons ensemble',
  },

  projects: {
    heading: 'Projets',
    intro:
      "Une vitrine de mon travail en développement backend, mettant en avant des APIs Django REST et technologies associées.",
    loading: 'Chargement des projets...',
    error_fetch: "Échec du chargement des projets",
    error_unexpected: 'Erreur inattendue',
    untitled: 'Projet sans titre',
    no_description: 'Aucune description fournie.',
    github: 'GitHub',
    demo: 'Démo',
    video: 'Vidéo',
  },

  contact: {
    heading: 'Contactez-moi',
    intro:
      "Vous avez un projet en tête ou souhaitez discuter de la façon dont je peux aider votre entreprise ? Parlons-en !",
    info_heading: 'Informations de contact',
    email_label: 'Email',
    connect_heading: 'Réseaux',
    form_heading: 'Envoyer un message',
    success_title: 'Message envoyé !',
    success_text:
      "Merci pour votre message. Je vous répondrai dès que possible.",
    fields: {
      name_label: 'Nom',
      name_placeholder: 'Votre nom',
      email_label: 'Email',
      email_placeholder: 'votre.email@exemple.com',
      message_label: 'Message',
      message_placeholder: 'Parlez-moi de votre projet...',
    },
    sending: 'Envoi...',
    send: 'Envoyer le message',
  },

  testimonials: {
    heading: 'Témoignages',
    intro:
      "Ce que disent les clients de notre collaboration. Cette section sera mise à jour au fil des projets.",
    future_client: 'Futur client',
    role_founder: 'Fondateur de startup',
    role_pm: 'Product Manager',
    role_cto: 'CTO',
    content_1:
      "Cette section mettra en valeur les retours de clients satisfaits. Au fil des projets, vous y ajouterez de vrais témoignages.",
    content_2:
      "Les témoignages inspirent confiance et démontrent votre capacité à livrer un travail de qualité. Ce contenu sera remplacé par de vrais retours.",
    content_3:
      "Captures d’écran de retours, citations de clients (Upwork/Fiverr) ou courts messages audio/vidéo pourront être ajoutés ici.",
  },

  blog: {
    heading: 'Blog et études de cas',
    intro:
      "Articles techniques et études de cas pour partager des connaissances et démontrer l’expertise.",
    read_more: 'Lire la suite',
    coming_soon: 'Bientôt disponible',
    post_1_title: 'Comment j’ai construit une API de prise de rendez-vous avec Django + JWT',
    post_1_desc:
      "Un guide détaillé pour créer un système de prise de rendez-vous sécurisé avec Django REST Framework et l’authentification JWT.",
    post_2_title: 'Guide pas à pas pour déployer Django sur Render avec Docker',
    post_2_desc:
      "Apprenez à containeriser votre application Django et à la déployer sur Render avec la configuration et la supervision adéquates.",
    post_3_title:
      "Mon expérience de contribution à une API open-source pour la collaboration",
    post_3_desc:
      "Aperçus et leçons tirées de contributions à des projets open-source dans l’écosystème Django.",
  },

  footer: {
    role: 'Développeur Frontend',
    rights: 'Tous droits réservés.',
  },
} as const