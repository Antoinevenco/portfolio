import { proposal as secondeMatiere } from "./seconde-matiere"

// ─── Registry — add new proposals here ───────────────────────
export const proposals = {
  "seconde-matiere": secondeMatiere,
}

// ─── Helpers ─────────────────────────────────────────────────
export function getProposal(slug) {
  return proposals[slug] ?? null
}

export function getAllProposals() {
  return Object.entries(proposals).map(([slug, data]) => ({ slug, data }))
}
