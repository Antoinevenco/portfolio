// CV content — EN / FR.
// The home route (app/page.js) is intentionally left untouched; this file only feeds /cv and /cv/fr.

const email = "contact@antoinevenco.fr"
const linkedin = "https://www.linkedin.com/in/antoine-venco"

const en = {
  lang: "en",
  name: "Antoine Venco",
  role: "Graphic Designer & Developer",
  labels: {
    contact: "Contact",
    about: "Profile",
    skills: "Skills",
    designSkills: "Design skills",
    devSkills: "Development skills",
    technologies: "Technologies",
    languages: "Languages",
    softSkills: "Soft skills",
    experiences: "Work experience",
    experiencesCols: ["Company", "Period", "Job title", "Main tasks"],
    education: "Education",
    educationCols: ["School", "Period", "Degree", "Details"],
    other: "Additional information",
    certifications: "Certifications",
    hobbies: "Hobbies",
    recommendation: "Recommendation",
    print: "Print / PDF",
    switchLang: "Français",
  },
  contact: {
    location: "Marseille, France",
    email,
    linkedin,
  },
  about:
    "As a graphic designer who doubles as a developer, I'm able to build coherent systems where design and development support each other. With 10+ years of experience, I've shaped a practice that moves fluidly between visual direction, interface thinking, and technical execution. This hybrid background lets me bridge teams and disciplines, and gives me the freedom to take a project on my own from concept to production with the same level of intent.",
  designSkills: ["Branding", "Graphic Design", "Webdesign", "User Experience", "Motion", "Sound Design", "3D Rendering"],
  devSkills: ["Front-end", "Back-end", "Headless CMS", "E-commerce", "Creative Coding", "Open-source"],
  technologies: ["React", "Next.js", "Sanity", "Shopify", "Webflow", "Wordpress", "Three.js"],
  languages: ["French (native)", "English"],
  softSkills: ["Empathy", "Autonomy", "Problem-solving", "Adaptability", "Multidisciplinary", "Role-bridging"],
  experiences: [
    {
      title: "Freelance",
      period: "2014–Present",
      role: "Graphic Designer, Developer",
      details: "Design (branding, art direction, 3D, motion, digital, print), full-stack development (React, Webflow, Wordpress, e-commerce, headless CMS)",
    },
    {
      title: "Ola Radio",
      period: "2019–Present",
      role: "Co-runner, AD, Developer",
      details: "Branding, art direction, website development & maintenance, custom tooling, music programming, motion",
    },
    {
      title: "Antiprocess",
      period: "2018–Present",
      role: "Co-founder, AD, Developer",
      details: "Art direction, jewelry design & fabrication, e-commerce development, 3D modeling/rendering, motion",
    },
    {
      title: "Oil in Water",
      period: "2021–2024",
      role: "Graphic Designer, Developer",
      details: "Art direction, interface design, prototyping, motion, development",
    },
    {
      title: "Dataveyes",
      period: "2019–2021",
      role: "Assistant AD, Developer",
      details: "Art direction, interface design, prototyping, motion, data-visualization",
    },
    {
      title: "Adyax",
      period: "2018–2019",
      role: "Assistant AD",
      details: "Interface design, graphic adaptations, motion",
    },
  ],
  education: [
    {
      title: "ECV Paris",
      period: "2018–2020",
      degree: "Interactive Designer (Master's level, Bac+5)",
      details: "Graphic design, interface & UX design, motion design, photo/video, speculative design",
    },
    {
      title: "OpenClassrooms",
      period: "2017–2018",
      degree: "Multimedia Project Manager, UX Design specialization (Bachelor's level, Bac+3)",
      details: "",
    },
    {
      title: "Self-taught",
      period: "2014–Present",
      degree: "Continuous learning",
      details: "Books, e-learning",
    },
  ],
  certifications: ["Rhino 3D — Design and development of parametric 3D parts"],
  hobbies: ["DJing", "Music production", "Photography", "Cooking"],
  recommendation: {
    quote:
      "During his time at Dataveyes, Antoine showed great adaptability and initiative. He brought the team his motivation, perfectionism, curiosity and creativity, and demonstrated his skills in graphic design, creative coding and artistic experimentation.",
    author: "Caroline Goulard, CEO & co-founder, Dataveyes",
  },
}

const fr = {
  lang: "fr",
  name: "Antoine Venco",
  role: "Graphiste & Développeur",
  labels: {
    contact: "Contact",
    about: "Profil",
    skills: "Compétences",
    designSkills: "Design",
    devSkills: "Développement",
    technologies: "Technologies",
    languages: "Langues",
    softSkills: "Savoir-être",
    experiences: "Expériences professionnelles",
    experiencesCols: ["Entreprise", "Période", "Poste", "Missions principales"],
    education: "Formation",
    educationCols: ["École", "Période", "Diplôme", "Détails"],
    other: "Informations complémentaires",
    certifications: "Certifications",
    hobbies: "Loisirs",
    recommendation: "Recommandation",
    print: "Imprimer / PDF",
    switchLang: "English",
  },
  contact: {
    location: "Marseille, France",
    email,
    linkedin,
  },
  about:
    "Graphiste et développeur, je conçois des systèmes cohérents où design et développement se renforcent mutuellement. En plus de 10 ans d'expérience, j'ai construit une pratique qui circule librement entre direction visuelle, conception d'interface et exécution technique. Ce profil hybride me permet de faire le lien entre les équipes et les disciplines, et de mener seul un projet du concept à la mise en production avec la même exigence.",
  designSkills: ["Identité visuelle", "Design graphique", "Webdesign", "Expérience utilisateur", "Motion", "Sound design", "Rendu 3D"],
  devSkills: ["Front-end", "Back-end", "Headless CMS", "E-commerce", "Creative coding", "Open-source"],
  technologies: ["React", "Next.js", "Sanity", "Shopify", "Webflow", "Wordpress", "Three.js"],
  languages: ["Français (natif)", "Anglais"],
  softSkills: ["Empathie", "Autonomie", "Résolution de problèmes", "Adaptabilité", "Pluridisciplinarité", "Pont entre métiers"],
  experiences: [
    {
      title: "Freelance",
      period: "2014–Aujourd'hui",
      role: "Graphiste, Développeur",
      details: "Design (identité, direction artistique, 3D, motion, digital, print), développement full-stack (React, Webflow, Wordpress, e-commerce, headless CMS)",
    },
    {
      title: "Ola Radio",
      period: "2019–Aujourd'hui",
      role: "Co-gérant, DA, Développeur",
      details: "Identité, direction artistique, développement et maintenance du site, outils sur mesure, programmation musicale, motion",
    },
    {
      title: "Antiprocess",
      period: "2018–Aujourd'hui",
      role: "Co-fondateur, DA, Développeur",
      details: "Direction artistique, design et fabrication de bijoux, développement e-commerce, modélisation/rendu 3D, motion",
    },
    {
      title: "Oil in Water",
      period: "2021–2024",
      role: "Graphiste, Développeur",
      details: "Direction artistique, design d'interface, prototypage, motion, développement",
    },
    {
      title: "Dataveyes",
      period: "2019–2021",
      role: "DA assistant, Développeur",
      details: "Direction artistique, design d'interface, prototypage, motion, data-visualisation",
    },
    {
      title: "Adyax",
      period: "2018–2019",
      role: "DA assistant",
      details: "Design d'interface, déclinaisons graphiques, motion",
    },
  ],
  education: [
    {
      title: "ECV Paris",
      period: "2018–2020",
      degree: "Designer interactif (Bac+5)",
      details: "Conception graphique, design d'interface, UX design, motion design, photo/vidéo, design prospectif",
    },
    {
      title: "OpenClassrooms",
      period: "2017–2018",
      degree: "Chef de projet multimédia, spécialité UX Design (Bac+3)",
      details: "",
    },
    {
      title: "Autoformation",
      period: "2014–Aujourd'hui",
      degree: "Formation continue",
      details: "Livres, e-learning",
    },
  ],
  certifications: ["Rhino 3D — Conception et développement de pièces 3D paramétriques"],
  hobbies: ["DJing", "Production musicale", "Photographie", "Cuisine"],
  recommendation: {
    quote:
      "Pendant son expérience chez Dataveyes, Antoine a témoigné d'une grande capacité d'adaptation et de prise d'initiative. Il a apporté à l'équipe sa motivation, son perfectionnisme, sa curiosité et sa créativité. Il a démontré ses compétences en design graphique, en creative coding et en expérimentations artistiques.",
    author: "Caroline Goulard, CEO & co-fondatrice, Dataveyes",
  },
}

export const cv = { en, fr }
