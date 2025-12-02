import localFont from "next/font/local";
import "./globals.css";

const monaSans = localFont({
  src: "../public/fonts/MonaSansVF[wght,opsz].woff",
  variable: "--font-mona-sans",
  display: "swap",
  weight: "200 900",
})

export const metadata = {
  title: "Antoine Venco",
  description: "Graphic Designer & Developer based in Marseille, France",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
