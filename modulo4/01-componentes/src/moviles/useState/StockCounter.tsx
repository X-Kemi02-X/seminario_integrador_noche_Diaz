import { useState } from 'react'

export default function StockCounter() {
  const [stock, setStock] = useState(50)

  function sell() {
    if (stock > 0) setStock(s => s - 1)
  }

  function restock() {
    setStock(s => s + 10)
  }

  return (
    <div>
      <h2>Control de Stock - Galaxy S25</h2>
      <p style={{ fontSize: 24, fontWeight: 600 }}>{stock} unidades</p>
      <button onClick={sell} disabled={stock === 0} style={btn}>
        Vender 1
      </button>
      <button onClick={restock} style={{ ...btn, marginLeft: 8 }}>
        Reabastecer +10
      </button>
      {stock === 0 && <p style={{ color: 'red' }}>Producto agotado</p>}
    </div>
  )
}

const btn = {
  padding: '8px 16px',
  borderRadius: 6,
  border: '1px solid #ddd',
  background: '#f5f5f5',
  cursor: 'pointer',
}
