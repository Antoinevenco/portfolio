"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const TABS = [
  { label: "Contexte", path: "" },
  { label: "Périmètre", path: "/scope" },
  { label: "Tarification", path: "/pricing" },
  { label: "Modalités", path: "/terms" },
]

export default function ProposalNav({ slug, basePath = "" }) {
  const pathname = usePathname()

  return (
    <nav className="flex items-baseline gap-0 flex-wrap">
      {TABS.map((tab, i) => {
        const href = `${basePath}/${slug}${tab.path}`
        const isActive = pathname === href
        return (
          <span key={href} className="flex items-baseline">
            <Link
              href={href}
              className={[
                "px-1 transition-colors",
                isActive ? "bg-ink text-white" : "hover:bg-surface",
              ].join(" ")}
            >
              {tab.label}
            </Link>
            {i < TABS.length - 1 && (
              <span className="text-small text-muted">,&nbsp;</span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
