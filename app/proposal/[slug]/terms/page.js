import { notFound } from "next/navigation"
import { getProposal } from "@/lib/proposals"
import TabTerms from "@/components/TabTerms"

export default async function Page({ params }) {
  const { slug } = await params
  const proposal = getProposal(slug)
  if (!proposal) notFound()
  return <TabTerms proposal={proposal} />
}
