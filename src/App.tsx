import { useState } from 'react'
import ProductRow from './organisms/ProductRow'
import Header from './organisms/Header'
import Footer from './organisms/Footer'
import CartButton from './components/atoms/CartButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='flex flex-col'>
          <Header/>
          <ProductRow type='hair'/>
          <ProductRow type='face'/>
          <ProductRow type='body'/>
          <Footer/>
          <div className='fixed bottom-0 right-0 p-10'>
            <CartButton/>
          </div>
        </div>
    </>
  )
}

export default App
