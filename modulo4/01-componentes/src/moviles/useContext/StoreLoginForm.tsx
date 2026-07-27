import { useState } from 'react'
import { useStore } from '../context/StoreContext'

export default function StoreLoginForm() {
  const { dispatch } = useStore()
  const [name, setName] = useState('')
  const [role, setRole] = useState('cliente')

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (name.trim()) {
      dispatch({ type: 'LOGIN', payload: { name: name.trim(), role } })
    }
  }

  return (
    <div>
      <h2>Inicio de Sesion - Tienda Moviles</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 250 }}>
        <input placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
        <select value={role} onChange={e => setRole(e.target.value)} style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}>
          <option value="cliente">Cliente</option>
          <option value="admin">Admin</option>
          <option value="vendedor">Vendedor</option>
        </select>
        <button type="submit" style={{ padding: '8px 16px', borderRadius: 6, border: 'none', background: '#0070f3', color: '#fff', cursor: 'pointer' }}>
          Iniciar Sesion
        </button>
      </form>
    </div>
  )
}
