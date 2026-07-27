import { useMemo, useState } from 'react'

interface Phone {
  id: number
  marca: string
  modelo: string
  precio: number
  gama: string
}

const phones: Phone[] = [
  { id: 1, marca: 'Samsung',  modelo: 'Galaxy S25',     precio: 1200, gama: 'alta' },
  { id: 2, marca: 'Apple',    modelo: 'iPhone 16',       precio: 1299, gama: 'alta' },
  { id: 3, marca: 'Xiaomi',   modelo: 'Redmi Note 14',   precio: 350,  gama: 'baja' },
  { id: 4, marca: 'Motorola', modelo: 'Edge 50',         precio: 549,  gama: 'media' },
  { id: 5, marca: 'Samsung',  modelo: 'Galaxy A16',      precio: 299,  gama: 'baja' },
  { id: 6, marca: 'Xiaomi',   modelo: 'Mi 14',           precio: 899,  gama: 'alta' },
]

export default function PhoneFilter() {
  const [gamaFilter, setGamaFilter] = useState<string>('todas')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let result = phones
    if (gamaFilter !== 'todas') {
      result = result.filter(p => p.gama === gamaFilter)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(p =>
        p.marca.toLowerCase().includes(q) || p.modelo.toLowerCase().includes(q)
      )
    }
    return result
  }, [gamaFilter, search])

  return (
    <div>
      <h2>Filtrar Catalogo de Celulares</h2>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          placeholder="Buscar por marca o modelo..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <select value={gamaFilter} onChange={e => setGamaFilter(e.target.value)} style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}>
          <option value="todas">Todas las gamas</option>
          <option value="alta">Gama Alta</option>
          <option value="media">Gama Media</option>
          <option value="baja">Gama Baja</option>
        </select>
      </div>
      <p>{filtered.length} resultados</p>
      {filtered.map(p => (
        <div key={p.id} style={{ padding: 6, marginBottom: 4, border: '1px solid #eee', borderRadius: 4 }}>
          {p.marca} {p.modelo} - ${p.precio} <span style={{ fontSize: 12, color: '#666' }}>({p.gama})</span>
        </div>
      ))}
    </div>
  )
}
