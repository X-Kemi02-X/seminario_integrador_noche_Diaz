import { useEffect, useState } from 'react'

interface Phone {
  id: number
  marca: string
  modelo: string
  precio: number
}

const mockPhones: Phone[] = [
  { id: 1, marca: 'Samsung',  modelo: 'Galaxy S25',     precio: 1200 },
  { id: 2, marca: 'Apple',    modelo: 'iPhone 16',       precio: 1299 },
  { id: 3, marca: 'Xiaomi',   modelo: 'Redmi Note 14',   precio: 699  },
  { id: 4, marca: 'Motorola', modelo: 'Edge 50',         precio: 549  },
]

export default function PhoneList() {
  const [phones, setPhones] = useState<Phone[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhones(mockPhones)
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <p>Cargando catalogo de celulares...</p>
  }

  return (
    <div>
      <h2>Catalogo de Celulares</h2>
      {phones.map(p => (
        <div key={p.id} style={{ padding: 8, marginBottom: 4, border: '1px solid #eee', borderRadius: 4 }}>
          <strong>{p.marca} {p.modelo}</strong> - ${p.precio}
        </div>
      ))}
    </div>
  )
}
