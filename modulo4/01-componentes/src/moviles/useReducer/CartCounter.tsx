import { useReducer } from 'react'

interface CartState {
  items: { name: string; price: number }[]
  total: number
}

type CartAction =
  | { type: 'ADD'; payload: { name: string; price: number } }
  | { type: 'REMOVE'; payload: number }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD':
      return {
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      }
    case 'REMOVE': {
      const newItems = state.items.filter((_, i) => i !== action.payload)
      const removed = state.items[action.payload]
      return {
        items: newItems,
        total: state.total - (removed?.price ?? 0),
      }
    }
    default:
      return state
  }
}

const products = [
  { name: 'Galaxy S25',  price: 1200 },
  { name: 'iPhone 16',   price: 1299 },
  { name: 'Funda Silicona', price: 25 },
  { name: 'Cargador Rapido', price: 45 },
]

export default function CartCounter() {
  const [cart, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <div style={{ marginBottom: 12 }}>
        {products.map(p => (
          <button
            key={p.name}
            onClick={() => dispatch({ type: 'ADD', payload: p })}
            style={{ marginRight: 4, marginBottom: 4, padding: '6px 12px', borderRadius: 4, border: '1px solid #ddd', cursor: 'pointer' }}
          >
            + {p.name} (${p.price})
          </button>
        ))}
      </div>
      <h3>Total: ${cart.total}</h3>
      {cart.items.map((item, i) => (
        <div key={i} style={{ padding: 4, display: 'flex', justifyContent: 'space-between', maxWidth: 300 }}>
          <span>{item.name} - ${item.price}</span>
          <button onClick={() => dispatch({ type: 'REMOVE', payload: i })} style={{ cursor: 'pointer', border: 'none', background: 'none', color: 'red' }}>
            X
          </button>
        </div>
      ))}
      {cart.items.length === 0 && <p>Carrito vacio</p>}
    </div>
  )
}
