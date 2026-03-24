import { getAllProposals } from "@/lib/proposals"
import Link from "next/link"

export default function ProposalsIndex() {
  const proposals = getAllProposals()

  return (
    <div className="w-full max-w-[960px] mx-auto px-6 py-8 min-h-screen">
      <p className="text-small text-muted mb-4">Propositions</p>
      <div className="border-t border-dotted border-line">
        {proposals.map(({ slug, data }) => (
          <Link
            key={slug}
            href={`/proposal/${slug}`}
            className="grid grid-cols-[1fr_auto] gap-6 py-3 border-b border-dotted border-line hover:bg-surface transition-colors px-2 -mx-2"
          >
            <div>
              <p className="text-body">{data.client.project}</p>
              <p className="text-small text-muted">{data.intro.heading}</p>
            </div>
            <p className="text-small text-muted pt-px">{data.meta.date}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
