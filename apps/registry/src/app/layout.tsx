import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "UI Kits Registry",
  description: "Component registry for UI kits",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}