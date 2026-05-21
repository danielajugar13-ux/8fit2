import Link from 'next/link'

export default function Home() {
  return (
    <main style={{
      minHeight:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      gap:'20px'
    }}>
      <h1 style={{
        fontSize:'90px',
        margin:0
      }}>
        8FIT
      </h1>

      <p style={{
        color:'#666',
        fontSize:'22px'
      }}>
        Plataforma Premium Fitness
      </p>

      <Link href="/login" style={{
        background:'#ff7a00',
        color:'white',
        padding:'18px 40px',
        borderRadius:'18px',
        textDecoration:'none',
        fontWeight:'bold'
      }}>
        Entrar
      </Link>
    </main>
  )
}
