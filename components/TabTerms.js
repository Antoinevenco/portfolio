export default function TabTerms({ proposal }) {
  return (
    <div className="space-y-8">

      {/* Deliverables */}
      <section>
        <p className="text-small text-muted mb-2">Livrables inclus</p>
        <div className="border-t border-dotted border-line">
          {proposal.terms.deliverables.map((item, i) => (
            <div key={i} className="grid grid-cols-[140px_1fr] border-b border-dotted border-line last:border-0">
              <div className="py-2.5 pr-6 border-r border-dotted border-line">
                <span className="text-small text-muted tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="py-2.5 pl-6">
                <p className="text-body">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hors périmètre */}
      <section>
        <p className="text-small text-muted mb-2">Hors périmètre</p>
        <div className="border-t border-dotted border-line">
          {proposal.terms.notIncluded.map((item, i) => (
            <div key={i} className="py-2.5 border-b border-dotted border-line last:border-0">
              <p className="text-small text-muted">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cadre général */}
      <section>
        <p className="text-small text-muted mb-2">Cadre général</p>
        <div className="border-t border-dotted border-line">
          {[
            ["Démarrage", proposal.terms.start],
            ["Engagement", proposal.terms.commitment],
            ["Préavis", "1 mois"],
            ["Outil", "Figma"],
            ["Suivi", "Présentiel ou async (Loom + Figma)"],
            ["Révisions", "Incluses dans le volume estimé"],
          ].map(([label, value], i) => (
            <div key={i} className="grid grid-cols-[140px_1fr] border-b border-dotted border-line last:border-0">
              <div className="py-2.5 pr-6 border-r border-dotted border-line">
                <span className="text-small text-muted">{label}</span>
              </div>
              <div className="py-2.5 pl-6">
                <p className="text-body">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
