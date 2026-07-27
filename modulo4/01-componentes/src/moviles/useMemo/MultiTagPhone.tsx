import { useMemo, useState } from 'react'

interface Phone {
  id: number
  marca: string
  modelo: string
  precio: number
  sistema: string
  almacenamiento: number
}

const phones: Phone[] = [
  { id: 1, marca: 'Samsung',  modelo: 'Galaxy S25',     precio: 1200, sistema: 'Android', almacenamiento: 256 },
  { id: 2, marca: 'Apple',    modelo: 'iPhone 16',       precio: 1299, sistema: 'iOS',     almacenamiento: 128 },
  { id: 3, marca: 'Xiaomi',   modelo: 'Redmi Note 14',   precio: 350,  sistema: 'Android', almacenamiento: 128 },
  { id: 4, marca: 'Motorola', modelo: 'Edge 50',         precio: 549,  sistema: 'Android', almacenamiento: 256 },
  { id: 5, marca: 'Apple',    modelo: 'iPhone 15',       precio: 999,  sistema: 'iOS',     almacenamiento: 128 },
  { id: 6, marca: 'Samsung',  modelo: 'Galaxy A16',      precio: 299,  sistema: 'Android', almacenamiento: 64 },
]

export default function MultiTagPhone() {
  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set())
  const [selectedOS, setSelectedOS] = useState<Set<string>>(new Set())
  const [minStorage, setMinStorage] = useState(0)

  const brands = useMemo(() => Array.from(new Set(phones.map(p => p.marca))), [])
  const osList = useMemo(() => Array.from(new Set(phones.map(p => p.sistema))), [])

  function toggleBrand(b: string) {
    setSelectedBrands(prev => {
      const next = new Set(prev)
      if (next.has(b)) next.delete(b); else next.add(b)
      return next
    })
  }

  function toggleOS(os: string) {
    setSelectedOS(prev => {
      const next = new Set(prev)
      if (next.has(os)) next.delete(os); else next.add(os)
      return next
    })
  }

  const filtered = useMemo(() => {
    return phones.filter(p => {
      if (selectedBrands.size > 0 && !selectedBrands.has(p.marca)) return false
      if (selectedOS.size > 0 && !selectedOS.has(p.sistema)) return false
      if (p.almacenamiento < minStorage) return false
      return true
    })
  }, [selectedBrands, selectedOS, minStorage])

  return (
    <div>
      <h2>Filtro Multiple - Celulares</h2>
      <div style={{ marginBottom: 12 }}>
        <p><strong>Marca:</strong></p>
        {brands.map(b => (
          <label key={b} style={{ marginRight: 12, cursor: 'pointer' }}>
            <input type="checkbox" checked={selectedBrands.has(b)} onChange={() => toggleBrand(b)} />
            {b}
          </label>
        ))}
      </div>
      <div style={{ marginBottom: 12 }}>
        <p><strong>Sistema Operativo:</strong></p>
        {osList.map(os => (
          <label key={os} style={{ marginRight: 12, cursor: 'pointer' }}>
            <input type="checkbox" checked={selectedOS.has(os)} onChange={() => toggleOS(os)} />
            {os}
          </label>
        ))}
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>Almacenamiento minimo: {minStorage}GB</label>
        <input type="range" min={0} max={512} step={64} value={minStorage} onChange={e => setMinStorage(Number(e.target.value))} style={{ display: 'block' }} />
      </div>
      <p>{filtered.length} resultados</p>
      {filtered.map(p => (
        <div key={p.id} style={{ padding: 6, marginBottom: 4, border: '1px solid #eee', borderRadius: 4 }}>
          {p.marca} {p.modelo} - ${p.precio} ({p.sistema}, {p.almacenamiento}GB)
        </div>
      ))}
    </div>
  )
}
