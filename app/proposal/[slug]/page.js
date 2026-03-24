import { notFound } from "next/navigation"
import { getProposal } from "@/lib/proposals"
import TabIntro from "@/components/TabIntro"

export default async function Page({ params }) {
  const { slug } = await params
  const proposal = getProposal(slug)
  if (!proposal) notFound()
  return <TabIntro proposal={proposal} />
}
