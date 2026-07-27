import { useMemo, useState } from 'react'

interface Phone {
  id: number
  modelo: string
  precio: number
}

const phones: Phone[] = [
  { id: 1, modelo: 'Galaxy S25',     precio: 1200 },
  { id: 2, modelo: 'iPhone 16',       precio: 1299 },
  { id: 3, modelo: 'Redmi Note 14',   precio: 350 },
  { id: 4, modelo: 'Edge 50',         precio: 549 },
  { id: 5, modelo: 'Galaxy A16',      precio: 299 },
  { id: 6, modelo: 'Mi 14',           precio: 899 },
]

export default function PriceRange() {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(2000)

  const filtered = useMemo(() => {
    return phones.filter(p => p.precio >= min && p.precio <= max)
  }, [min, max])

  return (
    <div>
      <h2>Filtrar por Rango de Precio</h2>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <div>
          <label>Min: ${min}</label>
          <input type="range" min={0} max={2000} step={50} value={min} onChange={e => setMin(Number(e.target.value))} style={{ display: 'block' }} />
        </div>
        <div>
          <label>Max: ${max}</label>
          <input type="range" min={0} max={2000} step={50} value={max} onChange={e => setMax(Number(e.target.value))} style={{ display: 'block' }} />
        </div>
      </div>
      <p>{filtered.length} celulares en el rango</p>
      {filtered.map(p => (
        <div key={p.id} style={{ padding: 6, marginBottom: 4, border: '1px solid #eee', borderRadius: 4 }}>
          {p.modelo} - ${p.precio}
        </div>
      ))}
    </div>
  )
}
