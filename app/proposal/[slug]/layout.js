import ProposalNav from "@/components/ProposalNav"
import { getAllProposals, getProposal } from "@/lib/proposals"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return getAllProposals().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const proposal = getProposal(slug)
  if (!proposal) return {}
  return {
    title: `Proposition — ${proposal.client.project}`,
    description: `Proposition d'accompagnement par ${proposal.meta.from}`,
    robots: { index: false, follow: false },
  }
}

export default async function ProposalLayout({ children, params }) {
  const { slug } = await params
  const proposal = getProposal(slug)
  if (!proposal) notFound()

  return (
    <div className="w-full max-w-[960px] mx-auto flex flex-col min-h-screen ">
      {/* Sticky header */}
      <header
        data-chrome
        className="sticky top-0 z-50 bg-background border-b border-dotted border-line px-4 py-4"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5">
          <Link href="/" className=" shrink-0">
            {proposal.meta.from}
          </Link>
          <ProposalNav slug={slug} basePath="/proposal" />
        </div>
      </header>

      {/* Title block */}
      <div data-chrome className="px-4 pt-4 pb-5">
        <p className="text-body text-muted">{proposal.client.project}</p>
        <h1 className="text-body">{proposal.intro.heading}</h1>
      </div>

      {/* Metadata strip */}
      <div
        data-chrome
        className="border-t border-dotted border-line grid grid-cols-2 md:grid-cols-4"
      >
        <MetaCell label="Ref" value={proposal.meta.ref} />
        <MetaCell label="Date" value={proposal.meta.date} border />
        <MetaCell label="Client" value={proposal.client.name} border />
        <MetaCell label="Contact" value={proposal.client.contact} border />
      </div>

      {/* Content */}
      <main className="flex-1 px-4 py-8 border-t border-dotted border-line">
        {children}
      </main>

      {/* Footer */}
      <footer
        data-chrome
        className="px-4 py-3 border-t border-dotted border-line"
      >
        <div className="flex justify-between gap-6">
          <a
            href={`mailto:${proposal.meta.email}`}
            className="text-small text-muted hover:text-ink transition-colors"
          >
            {proposal.meta.email}
          </a>
          <Link
            href={`/proposal/${slug}/print`}
            className="text-small text-muted hover:text-ink transition-colors shrink-0"
          >
            Imprimer
          </Link>
        </div>
      </footer>
    </div>
  )
}

function MetaCell({ label, value, border }) {
  return (
    <div
      className={[
        "px-4 py-2.5 flex gap-2",
        border ? "border-l border-dotted border-line" : "",
      ].join(" ")}
    >
      <span className="text-small text-muted shrink-0 w-14">{label}</span>
      <span className="text-small">{value}</span>
    </div>
  )
}
