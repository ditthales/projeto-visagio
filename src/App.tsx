import { useState } from 'react'
import CartPage from './organisms/CartPage'
import BuyingPage from './templates/BuyingPage'

const App = () => {
  const [count, setCount] = useState(0);
  const[overlay, setOverlay] = useState(true);

  const handleOverlay = () => {
    setOverlay(!overlay);
  };

  return (
    <>
      <CartPage isOpen={overlay} onClose={handleOverlay}/>
    </>
  )
}

export default App
