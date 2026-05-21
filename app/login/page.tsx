'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const users = [
  { username:'Tony', password:'iloveyoubaby', role:'admin' },
  { username:'gustavo', password:'8FitGA', role:'client' },
  { username:'daniel', password:'8FitDD', role:'client' },
  { username:'diego', password:'8FitDO', role:'client' },
  { username:'carlos', password:'8FitCG', role:'client' },
  { username:'michelle', password:'8FitMA', role:'client' },
  { username:'javier', password:'8FitJL', role:'client' },
  { username:'anibal', password:'8FitAM', role:'client' },
  { username:'gerardo', password:'8FitGP', role:'client' },
  { username:'sergio', password:'8FitSE', role:'client' },
  { username:'alexandre', password:'8FitAO', role:'client' },
  { username:'jean', password:'8FitJG', role:'client' },
  { username:'jose', password:'8FitJV', role:'client' },
  { username:'roberto', password:'8FitRA', role:'client' }
]

export default function LoginPage() {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const login = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    )

    if (!user) {
      setError('Usuario incorrecto')
      return
    }

    localStorage.setItem('user', JSON.stringify(user))

    if (user.role === 'admin') {
      router.push('/admin')
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <main style={{
      minHeight:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <div style={{
        background:'white',
        padding:'50px',
        borderRadius:'30px',
        width:'100%',
        maxWidth:'500px'
      }}>
        <h1 style={{
          textAlign:'center',
          fontSize:'70px'
        }}>
          8FIT
        </h1>

        <p style={{
          textAlign:'center',
          color:'#666',
          marginBottom:'40px'
        }}>
          Login Premium
        </p>

        <div style={{
          display:'flex',
          flexDirection:'column',
          gap:'18px'
        }}>
          <input
            placeholder="Usuario"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            style={{
              padding:'18px',
              borderRadius:'16px',
              border:'1px solid #ccc'
            }}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            style={{
              padding:'18px',
              borderRadius:'16px',
              border:'1px solid #ccc'
            }}
          />

          <button
            onClick={login}
            style={{
              padding:'18px',
              borderRadius:'18px',
              border:'none',
              background:'#ff7a00',
              color:'white',
              fontWeight:'bold',
              cursor:'pointer'
            }}
          >
            Iniciar sesión
          </button>

          <p style={{
            textAlign:'center',
            color:'red'
          }}>
            {error}
          </p>
        </div>
      </div>
    </main>
  )
}
