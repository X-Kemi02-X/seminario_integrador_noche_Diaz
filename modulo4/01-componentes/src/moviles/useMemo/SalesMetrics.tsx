import { useMemo, useState } from 'react'

interface Sale {
  producto: string
  cantidad: number
  precio: number
  mes: string
}

const sales: Sale[] = [
  { producto: 'Galaxy S25',  cantidad: 5,  precio: 1200, mes: 'Enero' },
  { producto: 'iPhone 16',   cantidad: 3,  precio: 1299, mes: 'Enero' },
  { producto: 'Galaxy S25',  cantidad: 7,  precio: 1200, mes: 'Febrero' },
  { producto: 'Xiaomi 14',   cantidad: 4,  precio: 699,  mes: 'Febrero' },
  { producto: 'iPhone 16',   cantidad: 6,  precio: 1299, mes: 'Marzo' },
  { producto: 'Galaxy S25',  cantidad: 4,  precio: 1200, mes: 'Marzo' },
  { producto: 'Motorola Edge', cantidad: 2, precio: 549, mes: 'Marzo' },
]

export default function SalesMetrics() {
  const [selectedMonth, setSelectedMonth] = useState('Todos')

  const months = useMemo(() => {
    const m = new Set(sales.map(s => s.mes))
    return ['Todos', ...Array.from(m)]
  }, [])

  const metrics = useMemo(() => {
    let filtered = sales
    if (selectedMonth !== 'Todos') {
      filtered = sales.filter(s => s.mes === selectedMonth)
    }

    const totalRevenue = filtered.reduce((acc, s) => acc + s.cantidad * s.precio, 0)
    const totalUnits = filtered.reduce((acc, s) => acc + s.cantidad, 0)

    const byProduct: Record<string, { units: number; revenue: number }> = {}
    for (const s of filtered) {
      if (!byProduct[s.producto]) byProduct[s.producto] = { units: 0, revenue: 0 }
      byProduct[s.producto].units += s.cantidad
      byProduct[s.producto].revenue += s.cantidad * s.precio
    }

    const topProduct = Object.entries(byProduct).sort((a, b) => b[1].revenue - a[1].revenue)[0]

    return { totalRevenue, totalUnits, topProduct: topProduct?.[0] ?? 'N/A', byProduct }
  }, [selectedMonth])

  return (
    <div>
      <h2>Metricas de Ventas</h2>
      <select value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)} style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc', marginBottom: 12 }}>
        {months.map(m => <option key={m} value={m}>{m}</option>)}
      </select>
      <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
        <div style={{ padding: 12, border: '1px solid #eee', borderRadius: 8, flex: 1 }}>
          <p style={{ margin: 0, fontSize: 12, color: '#666' }}>Ingresos</p>
          <p style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>${metrics.totalRevenue}</p>
        </div>
        <div style={{ padding: 12, border: '1px solid #eee', borderRadius: 8, flex: 1 }}>
          <p style={{ margin: 0, fontSize: 12, color: '#666' }}>Unidades</p>
          <p style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>{metrics.totalUnits}</p>
        </div>
        <div style={{ padding: 12, border: '1px solid #eee', borderRadius: 8, flex: 1 }}>
          <p style={{ margin: 0, fontSize: 12, color: '#666' }}>Top Producto</p>
          <p style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{metrics.topProduct}</p>
        </div>
      </div>
      <h3>Ventas por Producto</h3>
      {Object.entries(metrics.byProduct).map(([producto, data]) => (
        <div key={producto} style={{ padding: 6, marginBottom: 4, border: '1px solid #eee', borderRadius: 4 }}>
          {producto}: {data.units} unidades - ${data.revenue}
        </div>
      ))}
    </div>
  )
}
