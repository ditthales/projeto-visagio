import { useState } from "react"
import ProductCart from "../components/molecules/ProductCart"

function CartPage() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <div className='flex flex-col justify-center items-center h-screen'>
            <ProductCart type='hair' index={0}/>
            <ProductCart type='hair' index={1}/>
            <ProductCart type='hair' index={2}/>
            <ProductCart type='hair' index={3}/>
        </div>
      </>
    )
  }
  
  export default CartPage