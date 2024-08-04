import "./globals.css"

export const metadata = {
  title: 'Social Relay',
  description: 'Social Relay',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
