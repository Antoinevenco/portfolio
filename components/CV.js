import Link from "next/link"
import { cv } from "@/lib/cv"
import PrintButton from "@/components/PrintButton"

// ATS-friendly A4 CV: strictly single-column flow (no side-by-side text blocks,
// no tables), section headings above their content, standard section names,
// plain-text contact details, keywords as inline comma lists.
// Secondary text uses a colour (.cv-muted), never `opacity`: Chrome writes
// opacity layers at the end of the PDF text stream, breaking reading order.

const dates = (p) => p.replace("–", " – ")

// Keep hyphenated keywords (e-commerce, full-stack…) on one line, so a line
// break never turns them into "ecommerce" for ATS parsers.
const keepHyphens = (text) =>
  text.split(/(\S+-\S+)/).map((part, i) =>
    i % 2 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    )
  )

const Section = ({ title, children }) => (
  <section className="cv-section">
    <h2 className="cv-heading">{title}</h2>
    {children}
  </section>
)

// Title line (what — where · when) followed by a full-width description
const Entry = ({ title, org, period, children, href }) => (
  <div className="cv-entry">
    <h3>
      {title}
      {org && (
        <>
          {" — "}
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {org}
            </a>
          ) : (
            org
          )}
        </>
      )}
      <span className="cv-muted"> · {dates(period)}</span>
    </h3>
    {children && <p>{keepHyphens(children)}</p>}
  </div>
)

export default function CV({ lang = "en" }) {
  const t = cv[lang]
  const l = t.labels
  const otherLang = lang === "en" ? "/cv/fr" : "/cv"
  const linkedinLabel = t.contact.linkedin.replace(/^https:\/\/www\./, "")
  const colon = lang === "fr" ? " : " : ": "

  return (
    <div className="cv-wrapper">
      {/* Screen-only controls */}
      <div className="no-print cv-controls flex justify-between items-center gap-4">
        <Link href="/" className="hover:opacity-30">
          ← {t.name}
        </Link>
        <div className="flex gap-4">
          <Link href={otherLang} className="hover:opacity-30">
            {l.switchLang}
          </Link>
          <PrintButton label={l.print} />
        </div>
      </div>

      <article lang={t.lang} className="cv-sheet flex flex-col justify-between">
        {/* Header — in the body, not in a print header/footer */}
        <header className="cv-section">
          <h1 className="cv-name">{t.name}</h1>
          <p>{t.role}</p>
          <p className="cv-muted">{t.contact.location}</p>
          <p className="cv-muted">
            <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
          </p>
          <p className="cv-muted">
            <a href={t.contact.linkedin} target="_blank" rel="noopener noreferrer">
              {linkedinLabel}
            </a>
          </p>
        </header>

        <Section title={l.about}>
          <p>{t.about}</p>
        </Section>

        <Section title={l.skills}>
          {[
            [l.designSkills, t.designSkills],
            [l.devSkills, t.devSkills],
            [l.technologies, t.technologies],
            [l.softSkills, t.softSkills],
            [l.languages, t.languages],
          ].map(([label, items]) => (
            <p key={label}>
              <span className="cv-muted">
                {label}
                {colon}
              </span>
              {items.join(", ")}
            </p>
          ))}
        </Section>

        <Section title={l.experiences}>
          {t.experiences.map((e) => (
            <Entry key={e.title} title={e.role} org={e.title} period={e.period}>
              {e.details}
            </Entry>
          ))}
        </Section>

        <Section title={l.education}>
          {t.education.map((e) => (
            <Entry key={e.title} title={e.degree} org={e.title} period={e.period}>
              {e.details}
            </Entry>
          ))}
        </Section>

        <Section title={l.other}>
          <p>
            <span className="cv-muted">
              {l.certifications}
              {colon}
            </span>
            {t.certifications.join(", ")}
          </p>
          <p>
            <span className="cv-muted">
              {l.hobbies}
              {colon}
            </span>
            {t.hobbies.join(", ")}
          </p>
          <p>
            <span className="cv-muted">
              {l.recommendation}
              {colon}
            </span>
            &quot;{t.recommendation.quote}&quot;{" "}
            <span className="cv-muted">— {keepHyphens(t.recommendation.author)}</span>
          </p>
        </Section>
      </article>
    </div>
  )
}
