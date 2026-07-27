import { useState } from 'react'

interface Order {
  id: number
  cliente: string
  producto: string
  estado: 'pendiente' | 'completado' | 'cancelado'
}

export default function OrderManager() {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, cliente: 'Carlos', producto: 'Galaxy S25', estado: 'pendiente' },
    { id: 2, cliente: 'Maria', producto: 'iPhone 16', estado: 'pendiente' },
  ])
  const [cliente, setCliente] = useState('')
  const [producto, setProducto] = useState('')

  function addOrder() {
    if (!cliente || !producto) return
    const newOrder: Order = {
      id: orders.length + 1,
      cliente,
      producto,
      estado: 'pendiente',
    }
    setOrders([...orders, newOrder])
    setCliente('')
    setProducto('')
  }

  function changeStatus(id: number, estado: Order['estado']) {
    setOrders(orders.map(o => o.id === id ? { ...o, estado } : o))
  }

  return (
    <div>
      <h2>Gestion de Pedidos</h2>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input placeholder="Cliente" value={cliente} onChange={e => setCliente(e.target.value)} style={inputStyle} />
        <input placeholder="Producto" value={producto} onChange={e => setProducto(e.target.value)} style={inputStyle} />
        <button onClick={addOrder} style={btnStyle}>Agregar</button>
      </div>
      {orders.map(o => (
        <div key={o.id} style={{ padding: 8, marginBottom: 4, border: '1px solid #eee', borderRadius: 4 }}>
          <strong>{o.cliente}</strong> - {o.producto} - {o.estado}
          <div style={{ marginTop: 4, display: 'flex', gap: 4 }}>
            <button onClick={() => changeStatus(o.id, 'completado')} style={smBtn}>Completar</button>
            <button onClick={() => changeStatus(o.id, 'cancelado')} style={smBtn}>Cancelar</button>
          </div>
        </div>
      ))}
    </div>
  )
}

const inputStyle = { padding: 6, borderRadius: 4, border: '1px solid #ccc' }
const btnStyle = { padding: '6px 12px', borderRadius: 4, border: 'none', background: '#0070f3', color: '#fff', cursor: 'pointer' }
const smBtn = { padding: '4px 8px', borderRadius: 4, border: '1px solid #ddd', cursor: 'pointer', fontSize: 12 }
