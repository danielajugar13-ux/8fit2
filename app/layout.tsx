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
    <html lang="es">
      <body style={{
        margin:0,
        fontFamily:'Arial',
        background:'#f4f4f4'
      }}>
        {children}
      </body>
    </html>
  )
}
