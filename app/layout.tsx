export const metadata = {
  title: '8FIT',
  description: 'Premium Fitness Platform'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial', background: '#fff' }}>
        {children}
      </body>
    </html>
  )
}
