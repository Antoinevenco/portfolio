// Keeps /cv and /cv/fr out of search engines.
export const metadata = {
  robots: { index: false, follow: false },
}

export default function CVLayout({ children }) {
  return children
}
