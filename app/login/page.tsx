'use client'

import { useState } from 'react'

const users = [
  { username:'Tony', password:'iloveyoubaby', role:'trainer' },
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
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const login = () => {
    const user = users.find(
      (u) =>
        u.username === username &&
        u.password === password
    )

    if (!user) {
      setMessage('Usuario incorrecto')
      return
    }

    setMessage(`Bienvenido ${user.username}`)
  }

  return (
    <main style={{
      minHeight:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      background:'#f5f5f5'
    }}>
      <div style={{
        width:'100%',
        maxWidth:'450px',
        background:'white',
        padding:'40px',
        borderRadius:'30px',
        boxShadow:'0 10px 30px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          textAlign:'center',
          fontSize:'50px',
          marginBottom:'10px'
        }}>
          8FIT
        </h1>

        <p style={{
          textAlign:'center',
          color:'#777',
          marginBottom:'40px'
        }}>
          Login Premium
        </p>

        <div style={{
          display:'flex',
          flexDirection:'column',
          gap:'15px'
        }}>
          <input
            placeholder="Usuario"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            style={{
              padding:'16px',
              borderRadius:'15px',
              border:'1px solid #ddd'
            }}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            style={{
              padding:'16px',
              borderRadius:'15px',
              border:'1px solid #ddd'
            }}
          />

          <button
            onClick={login}
            style={{
              padding:'18px',
              borderRadius:'15px',
              background:'#ff7a00',
              color:'white',
              border:'none',
              fontWeight:'bold',
              cursor:'pointer'
            }}
          >
            Iniciar sesión
          </button>

          <p style={{
            textAlign:'center',
            color:'#ff7a00',
            fontWeight:'bold'
          }}>
            {message}
          </p>
        </div>
      </div>
    </main>
  )
}
