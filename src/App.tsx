import { useState } from 'react'
import CartPage from './organisms/CartPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CartPage/>
    </>
  )
}

export default App
