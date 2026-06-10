import './globals.css'

export const metadata = {
  title: 'Moodo',
  description: 'Smart Fragrance for Smart Homes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
