import { notFound } from "next/navigation"
import { getProposal } from "@/lib/proposals"
import TabPricing from "@/components/TabPricing"

export default async function Page({ params }) {
  const { slug } = await params
  const proposal = getProposal(slug)
  if (!proposal) notFound()
  return <TabPricing proposal={proposal} />
}
