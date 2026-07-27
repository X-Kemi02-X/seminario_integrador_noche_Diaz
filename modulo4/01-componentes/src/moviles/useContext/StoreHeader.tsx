import { useStore } from '../context/StoreContext'

export default function StoreHeader() {
  const { state, dispatch } = useStore()

  return (
    <div style={{
      padding: '12px 16px',
      background: state.theme === 'dark' ? '#1a1a1a' : '#0070f3',
      color: '#fff',
      borderRadius: 8,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div>
        <strong>TechMobile Store</strong>
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <span>Carrito: {state.cart.length} items</span>
        {state.user ? (
          <>
            <span>{state.user.name} ({state.user.role})</span>
            <button onClick={() => dispatch({ type: 'LOGOUT' })} style={{
              padding: '4px 8px',
              borderRadius: 4,
              border: '1px solid rgba(255,255,255,0.5)',
              background: 'transparent',
              color: '#fff',
              cursor: 'pointer',
            }}>
              Cerrar Sesion
            </button>
          </>
        ) : (
          <span>Invitado</span>
        )}
      </div>
    </div>
  )
}
