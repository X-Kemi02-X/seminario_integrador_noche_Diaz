import { useRef, useState } from 'react'

export default function PriceEditor() {
  const [price, setPrice] = useState(1200)
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function startEditing() {
    setIsEditing(true)
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  function save() {
    setIsEditing(false)
  }

  return (
    <div>
      <h2>Editor de Precio - Galaxy S25</h2>
      {isEditing ? (
        <div>
          <input
            ref={inputRef}
            type="number"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            onBlur={save}
            onKeyDown={e => e.key === 'Enter' && save()}
            style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc', width: 120 }}
          />
          <button onClick={save} style={{ marginLeft: 8, padding: '6px 12px', borderRadius: 4, border: '1px solid #ddd', cursor: 'pointer' }}>
            Guardar
          </button>
        </div>
      ) : (
        <div>
          <span style={{ fontSize: 20, fontWeight: 600 }}>${price}</span>
          <button onClick={startEditing} style={{ marginLeft: 8, padding: '6px 12px', borderRadius: 4, border: '1px solid #ddd', cursor: 'pointer' }}>
            Editar Precio
          </button>
        </div>
      )}
    </div>
  )
}
