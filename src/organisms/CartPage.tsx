import { useState } from "react"
import ProductCart from "../components/molecules/ProductCart"
import CloseCartButton from "../components/atoms/CloseCartButton"
import PrimaryButton from "../components/atoms/PrimaryButton";
import { PRIMARY_BUTTON } from "../constants/constants";

interface CartPageProps {
    isOpen: boolean;
    onClose: () => void;
    productList: {
        type: string;
        index: number;
        qtd: number;
      }[];
    onQtdChange: (index: number, newQtd: number) => void;
    total: number;
}

const CartPage: React.FC<CartPageProps> = ({ isOpen, onClose, productList, onQtdChange, total }) => {
    
    const handleQtdChange = (index: number, newQtd: number) => {
        onQtdChange(index, newQtd);
    }

    return (
      <>
        <div className={` bg-white fixed z-50 right-0 top-0 bottom-0 ${isOpen ? "" : "hidden"}`}>
            <div className='flex flex-col justify-start items-start h-screen'>
                <div className="flex flex-row justify-between items-center w-full px-6 pt-6 pb-4">
                    <CloseCartButton onClose={onClose}/>
                    <p className=" text-3xl">Carrinho</p>

                </div>
                <div className="overflow-y-scroll max-h-[100vh]">
                    {productList.map((product, index) => (
                        <ProductCart
                        key={index}
                        type={product.type}
                        index={product.index}
                        qtd={product.qtd}
                        onQtdChange={(newQtd: number) => handleQtdChange(index, newQtd)}
                        />
                    ))}
                </div>
                <div className=" flex flex-row justify-between items-center w-full px-6 py-4">
                    <p className=" text-xl">Total: R$ {(total.toFixed(2)).replace(".",",")}</p>
                    <PrimaryButton label="Finalizar compra" classes={`${PRIMARY_BUTTON["GREEN"]}`}/>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default CartPage