import { useState } from "react"
import ProductCart from "../components/molecules/ProductCart"
import CartButton from "../components/atoms/CartButton"
import CloseCartButton from "../components/atoms/CloseCartButton"

interface CartPageProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ isOpen, onClose }) => {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <div className={`fixed z-50 right-0 top-0 bottom-0 ${isOpen ? "" : "hidden"}`}>
            <div className='flex flex-col justify-center items-center h-screen'>
                <ProductCart type='hair' index={0} qtd={1}/>
                <ProductCart type='hair' index={1} qtd={1}/>
                <ProductCart type='hair' index={2} qtd={1}/>
                <ProductCart type='hair' index={3} qtd={1}/>
                <CloseCartButton onClose={onClose}/>
            </div>
        </div>
      </>
    )
  }
  
  export default CartPage