import CV from "@/components/CV"

export const metadata = {
  title: "Antoine Venco — CV",
  description: "Curriculum vitae of Antoine Venco, Graphic Designer & Developer based in Marseille, France",
  alternates: { languages: { fr: "/cv/fr" } },
}

export default function Page() {
  return <CV lang="en" />
}
