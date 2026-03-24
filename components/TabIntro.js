export default function TabIntro({ proposal }) {
  return (
    <div className="space-y-8">
      {/* Intro */}
      <p className="text-body text-muted">{proposal.intro.body}</p>

      {/* Approach */}
      <section className="pt-4">
        <p className="text-small text-muted mb-2">Déroulé d&apos;une feature</p>

        <div className="border-t border-dotted border-line">
          {proposal.approach.map((item, i) => (
            <div
              key={i}
              className="border-b border-dotted border-line last:border-0"
            >
              {/* Desktop */}
              <div className="hidden sm:grid grid-cols-[140px_1fr]">
                <div className="py-2.5 pr-6 border-r border-dotted border-line">
                  <span className="text-small text-muted">{item.step.replace(/^\d+\s*/, "")}</span>
                </div>
                <div className="py-2.5 pl-6 flex justify-between gap-6">
                  <p className="text-body">{item.description}</p>
                  <p className="text-small text-muted shrink-0 pt-px">
                    {item.duration}
                  </p>
                </div>
              </div>

              {/* Mobile */}
              <div className="sm:hidden py-2.5 flex flex-col gap-1">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-small text-muted">{item.step.replace(/^\d+\s*/, "")}</span>
                  <span className="text-small text-muted shrink-0">
                    {item.duration}
                  </span>
                </div>
                <p className="text-body">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
