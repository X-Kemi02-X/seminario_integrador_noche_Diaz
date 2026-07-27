import { useState } from 'react'

interface PhoneFormData {
  marca: string
  modelo: string
  precio: string
  stock: string
}

export default function PhoneForm() {
  const [form, setForm] = useState<PhoneFormData>({
    marca: '',
    modelo: '',
    precio: '',
    stock: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.marca && form.modelo && form.precio && form.stock) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div>
        <h2>Celular Registrado</h2>
        <p>{form.marca} {form.modelo} - ${form.precio} (stock: {form.stock})</p>
        <button onClick={() => { setSubmitted(false); setForm({ marca: '', modelo: '', precio: '', stock: '' }) }}>
          Nuevo Registro
        </button>
      </div>
    )
  }

  return (
    <div>
      <h2>Registrar Nuevo Celular</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 300 }}>
        <input name="marca" placeholder="Marca" value={form.marca} onChange={handleChange} style={inputStyle} />
        <input name="modelo" placeholder="Modelo" value={form.modelo} onChange={handleChange} style={inputStyle} />
        <input name="precio" placeholder="Precio" value={form.precio} onChange={handleChange} style={inputStyle} />
        <input name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} style={inputStyle} />
        <button type="submit" style={btnStyle}>Guardar</button>
      </form>
    </div>
  )
}

const inputStyle = {
  padding: 8,
  borderRadius: 4,
  border: '1px solid #ccc',
}

const btnStyle = {
  padding: '8px 16px',
  borderRadius: 6,
  border: 'none',
  background: '#0070f3',
  color: '#fff',
  cursor: 'pointer',
}
