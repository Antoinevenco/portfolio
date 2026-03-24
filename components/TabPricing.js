"use client"

import { useState } from "react"

export default function TabPricing({ proposal }) {
  const [selected, setSelected] = useState(0)
  const vol = proposal.pricing.volumes[selected]

  return (
    <div className="space-y-8">
      {/* Volume selector */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px">
          {proposal.pricing.volumes.map((v, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={[
                "p-4 text-left transition-colors",
                selected === i ? "bg-ink text-white" : " hover:bg-surface",
              ].join(" ")}
            >
              <p
                className={`text-small mb-2 ${
                  selected === i ? "text-subtle" : "text-muted"
                }`}
              >
                {v.label}
              </p>
              <p
                className={`text-body whitespace-nowrap ${
                  selected === i ? "text-white" : ""
                }`}
              >
                {v.monthly.toLocaleString("fr-FR")} €
                <span
                  className={`text-small ml-1 ${
                    selected === i ? "text-subtle" : "text-muted"
                  }`}
                >
                  /mois
                </span>
              </p>
              <p
                className={`text-small ${
                  selected === i ? "text-subtle" : "text-muted"
                }`}
              >
                {v.days}j · {v.note}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Projection */}
      <section>
        <div className="border-t border-dotted border-line">
          {[1, 2, 3].map((month) => (
            <div
              key={month}
              className="grid grid-cols-[140px_1fr] border-b border-dotted border-line"
            >
              <div className="py-2.5 pr-6 border-r border-dotted border-line">
                <span className="text-small text-muted">Mois {month}</span>
              </div>
              <div className="py-2.5 pl-6 flex justify-between gap-4">
                <p className="text-body">
                  {vol.monthly.toLocaleString("fr-FR")} €
                </p>
                <p className="text-small text-muted pt-px shrink-0">
                  {vol.days}j
                </p>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-[140px_1fr]">
            <div className="py-2.5 pr-6 border-r border-dotted border-line">
              <span className="text-small text-muted">Total Q2</span>
            </div>
            <div className="py-2.5 pl-6 flex justify-between gap-4">
              <p className="text-body">
                {(vol.monthly * 3).toLocaleString("fr-FR")} €
              </p>
              <p className="text-small text-muted pt-px shrink-0">
                {vol.days * 3}j
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section>
        <div className="border-t border-dotted border-line">
          {proposal.pricing.notes.map((note, i) => (
            <div
              key={i}
              className="py-2.5 border-b border-dotted border-line last:border-0"
            >
              <p className="text-small text-muted">{note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
