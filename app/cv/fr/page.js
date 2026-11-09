import CV from "@/components/CV"

export const metadata = {
  title: "Antoine Venco — CV",
  description: "CV d'Antoine Venco, graphiste et développeur basé à Marseille",
  alternates: { languages: { en: "/cv" } },
}

export default function Page() {
  return <CV lang="fr" />
}
