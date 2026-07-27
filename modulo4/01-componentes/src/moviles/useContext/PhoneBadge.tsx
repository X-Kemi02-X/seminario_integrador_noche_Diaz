import { useStore } from '../context/StoreContext'

interface PhoneBadgeProps {
  name: string
  price: number
  category: 'smartphone' | 'accesorio' | 'wearable'
  inStock: boolean
}

const categoryColors: Record<string, string> = {
  smartphone: '#0070f3',
  accesorio: '#22c55e',
  wearable: '#f59e0b',
}

export default function PhoneBadge({ name, price, category, inStock }: PhoneBadgeProps) {
  const { dispatch } = useStore()

  return (
    <div style={{
      padding: 12,
      border: '1px solid #eee',
      borderRadius: 8,
      marginBottom: 8,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: 350,
    }}>
      <div>
        <span style={{
          display: 'inline-block',
          padding: '2px 8px',
          borderRadius: 4,
          background: categoryColors[category] || '#999',
          color: '#fff',
          fontSize: 11,
          marginBottom: 4,
        }}>
          {category}
        </span>
        <p style={{ margin: 0, fontWeight: 600 }}>{name}</p>
        <p style={{ margin: 0, fontSize: 14 }}>${price}</p>
        <p style={{ margin: 0, fontSize: 12, color: inStock ? '#22c55e' : '#ef4444' }}>
          {inStock ? 'Disponible' : 'Agotado'}
        </p>
      </div>
      <button
        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { id: Date.now(), name, price, quantity: 1 } })}
        style={{
          padding: '6px 12px',
          borderRadius: 4,
          border: 'none',
          background: '#0070f3',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        + Carrito
      </button>
    </div>
  )
}
