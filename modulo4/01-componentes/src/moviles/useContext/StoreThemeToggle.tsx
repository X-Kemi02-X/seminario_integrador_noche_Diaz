import { useStore } from '../context/StoreContext'

export default function StoreThemeToggle() {
  const { state, dispatch } = useStore()

  return (
    <div>
      <h2>Tema de la Tienda</h2>
      <p>Tema actual: <strong>{state.theme}</strong></p>
      <button
        onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
        style={{
          padding: '8px 16px',
          borderRadius: 6,
          border: '1px solid #ddd',
          cursor: 'pointer',
          background: state.theme === 'dark' ? '#333' : '#f5f5f5',
          color: state.theme === 'dark' ? '#fff' : '#000',
        }}
      >
        Cambiar a {state.theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </div>
  )
}
