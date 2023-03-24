import '../globals.css'

export const metadata = {
  title: 'Post Page',
  description: 'This is post page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
