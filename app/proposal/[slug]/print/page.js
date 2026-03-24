import { notFound } from "next/navigation"
import { getProposal } from "@/lib/proposals"
import PrintClient from "./PrintClient"

export default async function Page({ params }) {
  const { slug } = await params
  const proposal = getProposal(slug)
  if (!proposal) notFound()
  return <PrintClient proposal={proposal} slug={slug} basePath="/proposal" />
}
