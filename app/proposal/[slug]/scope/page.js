import { notFound } from "next/navigation"
import { getProposal } from "@/lib/proposals"
import TabScope from "@/components/TabScope"

export default async function Page({ params }) {
  const { slug } = await params
  const proposal = getProposal(slug)
  if (!proposal) notFound()
  return <TabScope proposal={proposal} />
}
