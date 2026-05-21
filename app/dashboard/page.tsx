'use client'

import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()

  const logout = () => {
    localStorage.removeItem('user')
    router.push('/login')
  }

  return (
    <main style={{
      padding:'40px'
    }}>
      <div style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <h1>Panel Cliente</h1>

        <button onClick={logout} style={{
          background:'red',
          color:'white',
          border:'none',
          padding:'12px 20px',
          borderRadius:'12px'
        }}>
          Cerrar sesión
        </button>
      </div>

      <div style={{
        marginTop:'40px',
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',
        gap:'20px'
      }}>
        <div style={{
          background:'white',
          padding:'25px',
          borderRadius:'20px'
        }}>
          <h2>Bienvenida al módulo</h2>

          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allowFullScreen
          />
        </div>

        <div style={{
          background:'white',
          padding:'25px',
          borderRadius:'20px'
        }}>
          <h2>Ejercicios</h2>

          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/ml6cT4AZdqI"
            allowFullScreen
          />
        </div>

        <div style={{
          background:'white',
          padding:'25px',
          borderRadius:'20px'
        }}>
          <h2>Ejemplo entrenamiento</h2>

          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/eXTiiz99p9o"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  )
}
