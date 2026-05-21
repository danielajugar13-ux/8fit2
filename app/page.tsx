import Link from 'next/link'

export default function Home() {
  return (
    <main style={{
      minHeight:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      gap:'20px',
      background:'#ffffff'
    }}>
      <h1 style={{
        fontSize:'70px',
        fontWeight:'900',
        margin:0
      }}>
        8FIT
      </h1>

      <p style={{
        color:'#666',
        fontSize:'20px'
      }}>
        Premium Fitness Platform
      </p>

      <Link
        href="/login"
        style={{
          padding:'18px 40px',
          borderRadius:'20px',
          background:'#ff7a00',
          color:'white',
          textDecoration:'none',
          fontWeight:'bold'
        }}
      >
        Entrar
      </Link>
    </main>
  )
}
