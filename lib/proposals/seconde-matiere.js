export const proposal = {
  meta: {
    from: "Antoine Venco",
    email: "contact@antoinevenco.fr",
    date: "Avril 2026",
    ref: "PROP-2026-04",
  },

  client: {
    name: "Seconde Matière",
    project: "Seconde Matière",
    contact: "Thomas & Félicie",
  },

  intro: {
    heading: "Proposition d'accompagnement",
    body: `Suite à notre échange, je vous propose un cadre de collaboration souple pour avancer sur votre roadmap Q2. L'idée : travailler feature par feature, à votre rythme — brief, design, handoff — en restant flexible sur le volume d'un mois à l'autre. On peut travailler en async (Loom, Figma) ou en présentiel selon ce qui est le plus efficace à chaque étape.`,
  },

  approach: [
    {
      step: "01 Brief",
      description: "Atelier stratégique : vision, objectifs, contraintes. Co-construction des critères de succès de la feature.",
      duration: "0.5j",
    },
    {
      step: "02 Design",
      description: "Userflows, wireframes, maquettes Figma annotées. Itérations jusqu'à validation.",
      duration: "Variable",
    },
    {
      step: "03 Handoff",
      description: "Livraison du fichier Figma avec specs, assets exportables et notes d'implémentation.",
      duration: "0.5j",
    },
  ],

  scope: [
    { feature: "Onboarding vendeur", detail: "Checklist, breadcrumbs, UX inscription → dépôt d'annonce", size: "M", days: "2", price: 1000 },
    { feature: "Suivi transaction", detail: "Lien de suivi, QR code + articles sur même écran, bordereau, transitions states, dispute process", size: "M", days: "2", price: 1000 },
    { feature: "Lots — achats groupés", detail: "Panier multi-vendeur, UI économies de frais", size: "L", days: "3–4", price: 1500, priceMax: 2000 },
    { feature: "Wallet + Dashboard vendeur", detail: "Solde, payout manuel, génération de factures — Epic multi-sprint", size: "L", days: "4–5", price: 2000, priceMax: 2500 },
    { feature: "Fractionnement annonce / paliers", detail: "UI quantité flexible, badge tarification", size: "M", days: "2", price: 1000 },
    { feature: "Calculateur textile", detail: "Optimisation matière tissu, résultats en infographie", size: "M", days: "2", price: 1000 },
    { feature: "Calculateur cuir", detail: "Nb de peaux pour patron, import formes 2D, estimation dm²", size: "M", days: "2", price: 1000 },
    { feature: "Alertes & intentions de recherche", detail: "MVP étape 1 : capture formulaire (alertes automatisées = étapes suivantes)", size: "M", days: "2", price: 1000 },
    { feature: "Avis utilisateurs", detail: "Post-transaction, règles d'affichage", size: "S", days: "1", price: 500 },
    { feature: "Apple Pay", detail: "Intégration Stripe existante", size: "S", days: "0.5", price: 250 },
    { feature: "Chatbot WhatsApp", detail: "Contact direct vendeur/acheteur, sans API LLM", size: "S", days: "1", price: 500 },
    { feature: "Page sur notre lieu", detail: "Page statique présentant l'espace physique", size: "S", days: "0.5", price: 250 },
    { feature: "Promos & codes de réduction", detail: "Spike exploratoire + design flows", size: "M", days: "1.5", price: 750 },
  ],

  pricing: {
    volumes: [
      { label: "Léger", days: 4, monthly: 2000, note: "~1 feature M / mois" },
      { label: "Intermédiaire", days: 6, monthly: 3000, note: "~2 features / mois" },
      { label: "Intensif", days: 8, monthly: 4000, note: "Rythme roadmap complète" },
    ],
    notes: [
      "Tarif journalier : 500 €/j (tarif collaboration long terme, TJM standard 700 €/j)",
      "Facturation mensuelle, préavis d'un mois",
      "Acompte de 30 % à la signature pour le premier mois",
      "Révisions incluses dans le volume journalier estimé",
      "Dépassement de scope : ajustement discuté au brief, avant démarrage",
    ],
  },

  terms: {
    start: "Début avril 2026",
    commitment: "Minimum 1 mois, renouvelable",
    deliverables: [
      "Fichier Figma structuré avec variantes et auto-layout",
      "Specs annotées pour handoff développeur",
      "Assets exportés (SVG, PNG, tokens si applicable)",
      "Documentation des décisions produit",
    ],
    notIncluded: [
      "Recherche utilisateur qualitative (interviews, tests)",
      "Développement front-end ou intégration code",
      "Gestion de projet ou coordination d'équipe",
    ],
  },
}
