import { useEffect, useState } from 'react'

export default function StoreTitle() {
  const [productCount, setProductCount] = useState(0)
  const [storeName] = useState('TechMobile Store')

  useEffect(() => {
    document.title = `${storeName} - ${productCount} productos`
    return () => {
      document.title = '01-componentes'
    }
  }, [productCount, storeName])

  return (
    <div>
      <h2>Document Title Dinamico</h2>
      <p>Productos en catalogo: {productCount}</p>
      <button onClick={() => setProductCount(p => p + 1)} style={btnStyle}>
        Agregar Producto
      </button>
      <button onClick={() => setProductCount(p => Math.max(0, p - 1))} style={{ ...btnStyle, marginLeft: 8 }}>
        Quitar Producto
      </button>
      <p style={{ fontSize: 12, color: '#666' }}>Revisa el titulo de la pestana</p>
    </div>
  )
}

const btnStyle = {
  padding: '6px 12px',
  borderRadius: 4,
  border: '1px solid #ddd',
  cursor: 'pointer',
}
