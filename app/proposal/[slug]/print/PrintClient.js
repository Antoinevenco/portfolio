"use client"

import { useEffect } from "react"
import TabIntro from "@/components/TabIntro"
import TabScope from "@/components/TabScope"
import TabPricing from "@/components/TabPricing"
import TabTerms from "@/components/TabTerms"
import Link from "next/link"

export default function PrintClient({ proposal, slug, basePath = "" }) {
  useEffect(() => {
    document.body.classList.add("print-page")
    return () => document.body.classList.remove("print-page")
  }, [])

  return (
    <div className="max-w-[720px] mx-auto bg-white min-h-screen">

      {/* Print button — screen only */}
      <div className="no-print flex justify-between items-center py-4 mb-4 border-b border-dotted border-line">
        <Link
          href={`${basePath}/${slug}`}
          className="text-small text-muted hover:text-ink transition-colors"
        >
          ← Retour
        </Link>
        <button
          onClick={() => window.print()}
          className="text-small px-3 py-1.5 bg-ink text-white hover:bg-ink-soft transition-colors"
        >
          Imprimer / PDF
        </button>
      </div>

      {/* Page 1 */}
      <div className="print-section">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-small text-muted mb-1">{proposal.meta.from}</p>
            <h1 className="text-display mb-0.5">{proposal.intro.heading}</h1>
            <p className="text-body text-muted">{proposal.client.project}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-small text-muted">{proposal.meta.ref}</p>
            <p className="text-small text-muted">{proposal.meta.date}</p>
          </div>
        </div>
        <div className="border-t border-dotted border-line grid grid-cols-4 mb-10">
          <PrintMeta label="Client" value={proposal.client.name} />
          <PrintMeta label="Contact" value={proposal.client.contact} border />
          <PrintMeta label="Ref" value={proposal.meta.ref} border />
          <PrintMeta label="Date" value={proposal.meta.date} border />
        </div>
        <SectionLabel>Contexte</SectionLabel>
        <TabIntro proposal={proposal} />
      </div>

      <div className="print-section">
        <SectionLabel>Périmètre</SectionLabel>
        <TabScope proposal={proposal} />
      </div>

      <div className="print-section">
        <SectionLabel>Tarification</SectionLabel>
        <TabPricing proposal={proposal} />
      </div>

      <div className="print-section">
        <SectionLabel>Modalités</SectionLabel>
        <TabTerms proposal={proposal} />
      </div>

    </div>
  )
}

function SectionLabel({ children }) {
  return <p className="text-small text-muted uppercase tracking-widest mb-6">{children}</p>
}

function PrintMeta({ label, value, border }) {
  return (
    <div className={["py-2 flex gap-3", border ? "pl-4 border-l border-dotted border-line" : ""].join(" ")}>
      <span className="text-small text-muted shrink-0 w-12">{label}</span>
      <span className="text-small">{value}</span>
    </div>
  )
}
