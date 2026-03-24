const sizeColor = {
  S: "text-faint",
  M: "text-subtle",
  L: "text-ink",
}

function formatPrice(feature) {
  if (feature.priceMax) {
    return `${feature.price.toLocaleString("fr-FR")} – ${feature.priceMax.toLocaleString("fr-FR")} €`
  }
  return `${feature.price.toLocaleString("fr-FR")} €`
}

export default function TabScope({ proposal }) {
  const totalMin = proposal.scope.reduce((acc, f) => acc + f.price, 0)
  const totalMax = proposal.scope.reduce((acc, f) => acc + (f.priceMax ?? f.price), 0)

  return (
    <div className="space-y-8">
      <section>

        {/* Column headers — desktop only */}
        <div className="hidden sm:grid grid-cols-[1fr_32px_56px_100px] gap-4 pb-2 border-b border-dotted border-line">
          <p className="text-small text-muted">Feature</p>
          <p className="text-small text-muted text-center">T.</p>
          <p className="text-small text-muted text-center">Jours</p>
          <p className="text-small text-muted text-right">Tarif</p>
        </div>
        {/* Mobile header */}
        <div className="sm:hidden pb-2 border-b border-dotted border-line">
          <p className="text-small text-muted">Feature</p>
        </div>

        {/* Rows */}
        {proposal.scope.map((feature, i) => (
          <div key={i} className="py-2.5 border-b border-dotted border-line last:border-0">

            {/* Desktop */}
            <div className="hidden sm:grid grid-cols-[1fr_32px_56px_100px] gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-body">{feature.feature}</p>
                <p className="text-small text-muted">{feature.detail}</p>
              </div>
              <div className="flex items-start justify-center pt-px">
                <span className={`text-small ${sizeColor[feature.size]}`}>{feature.size}</span>
              </div>
              <p className="text-small text-muted text-center pt-px">{feature.days}j</p>
              <p className="text-small text-right pt-px whitespace-nowrap">{formatPrice(feature)}</p>
            </div>

            {/* Mobile */}
            <div className="sm:hidden flex flex-col gap-1">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-body">{feature.feature}</p>
                <p className="text-small shrink-0 whitespace-nowrap">{formatPrice(feature)}</p>
              </div>
              <p className="text-small text-muted">{feature.detail}</p>
              <p className="text-small text-muted">
                <span className={sizeColor[feature.size]}>{feature.size}</span>
                {" · "}{feature.days}j
              </p>
            </div>

          </div>
        ))}

        {/* Total */}
        <div className="flex justify-between gap-4 pt-2.5 border-t border-dotted border-line">
          <p className="text-small text-muted">Total estimé</p>
          <p className="text-small whitespace-nowrap">
            {totalMin.toLocaleString("fr-FR")} – {totalMax.toLocaleString("fr-FR")} €
          </p>
        </div>

      </section>

      {/* Size legend */}
      <section>
        <div className="border-t border-dotted border-line">
          {["S", "M", "L"].map((s) => (
            <div key={s} className="grid grid-cols-[140px_1fr] border-b border-dotted border-line last:border-0">
              <div className="py-2.5 pr-6 border-r border-dotted border-line">
                <span className={`text-small ${sizeColor[s]}`}>{s}</span>
              </div>
              <div className="py-2.5 pl-6">
                <p className="text-small text-muted">
                  {s === "S" && "0.5–1j · Ajout ciblé, peu d'UI"}
                  {s === "M" && "2j · Feature autonome, userflow complet"}
                  {s === "L" && "3–4j · Epic, plusieurs états et cas limites"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
