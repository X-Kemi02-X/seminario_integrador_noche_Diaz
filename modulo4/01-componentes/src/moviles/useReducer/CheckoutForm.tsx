import { useReducer } from 'react'

interface CheckoutState {
  nombre: string
  email: string
  direccion: string
  tarjeta: string
  errors: Partial<Record<keyof CheckoutState, string>>
  submitted: boolean
}

type CheckoutAction =
  | { type: 'SET_FIELD'; field: keyof CheckoutState; value: string }
  | { type: 'SUBMIT' }
  | { type: 'RESET' }

function validate(state: CheckoutState): Partial<Record<keyof CheckoutState, string>> {
  const errors: Partial<Record<keyof CheckoutState, string>> = {}
  if (!state.nombre.trim()) errors.nombre = 'Nombre requerido'
  if (!state.email.includes('@')) errors.email = 'Email invalido'
  if (!state.direccion.trim()) errors.direccion = 'Direccion requerida'
  if (state.tarjeta.length < 4) errors.tarjeta = 'Tarjeta invalida'
  return errors
}

function checkoutReducer(state: CheckoutState, action: CheckoutAction): CheckoutState {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value }
    case 'SUBMIT': {
      const errors = validate(state)
      if (Object.keys(errors).length > 0) return { ...state, errors }
      return { ...state, errors: {}, submitted: true }
    }
    case 'RESET':
      return { nombre: '', email: '', direccion: '', tarjeta: '', errors: {}, submitted: false }
    default:
      return state
  }
}

export default function CheckoutForm() {
  const [state, dispatch] = useReducer(checkoutReducer, {
    nombre: '', email: '', direccion: '', tarjeta: '', errors: {}, submitted: false,
  })

  if (state.submitted) {
    return (
      <div>
        <h2>Compra Confirmada</h2>
        <p>Gracias {state.nombre}, tu pedido sera enviado a {state.direccion}</p>
        <button onClick={() => dispatch({ type: 'RESET' })} style={btnStyle}>Nueva Compra</button>
      </div>
    )
  }

  const fields: { key: keyof CheckoutState; label: string; placeholder: string }[] = [
    { key: 'nombre',    label: 'Nombre',    placeholder: 'Tu nombre' },
    { key: 'email',     label: 'Email',     placeholder: 'tu@email.com' },
    { key: 'direccion', label: 'Direccion', placeholder: 'Calle y numero' },
    { key: 'tarjeta',   label: 'Tarjeta',   placeholder: '**** **** **** 1234' },
  ]

  return (
    <div>
      <h2>Checkout - Compra de Celular</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 300 }}>
        {fields.map(f => (
          <div key={f.key}>
            <label>{f.label}</label>
            <input
              placeholder={f.placeholder}
              value={state[f.key] as string}
              onChange={e => dispatch({ type: 'SET_FIELD', field: f.key, value: e.target.value })}
              style={inputStyle}
            />
            {state.errors[f.key] && <p style={{ color: 'red', fontSize: 12, margin: 0 }}>{state.errors[f.key]}</p>}
          </div>
        ))}
        <button onClick={() => dispatch({ type: 'SUBMIT' })} style={btnStyle}>
          Confirmar Compra
        </button>
      </div>
    </div>
  )
}

const inputStyle = { padding: 8, borderRadius: 4, border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' as const }
const btnStyle = { padding: '8px 16px', borderRadius: 6, border: 'none', background: '#0070f3', color: '#fff', cursor: 'pointer' }
