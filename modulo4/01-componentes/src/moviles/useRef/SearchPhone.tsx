import { useRef } from 'react'

export default function SearchPhone() {
  const inputRef = useRef<HTMLInputElement>(null)

  function focusSearch() {
    inputRef.current?.focus()
  }

  return (
    <div>
      <h2>Busqueda Rapida de Celulares</h2>
      <input
        ref={inputRef}
        placeholder="Buscar por marca o modelo..."
        style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc', width: 250 }}
      />
      <button onClick={focusSearch} style={{ marginLeft: 8, padding: '6px 12px', borderRadius: 4, border: '1px solid #ddd', cursor: 'pointer' }}>
        Enfocar Busqueda
      </button>
    </div>
  )
}
