import ProductCart from "../molecules/ProductCart"
import CloseCartButton from "../atoms/CloseCartButton"
import PrimaryButton from "../atoms/PrimaryButton";
import { PRIMARY_BUTTON, SECONDARY_BUTTON } from "../../constants/constants";
import SecondaryButton from "../atoms/SecondaryButton";

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
    onDelete: (index: number) => void;
    onFinalize: () => void;
    onDeleteAll: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ isOpen, onClose, productList, onQtdChange, total, onDelete, onFinalize, onDeleteAll }) => {
    
    const handleQtdChange = (index: number, newQtd: number) => {
        onQtdChange(index, newQtd);
    }

    const handleDelete = (index: number) => {
        onDelete(index);
    }

    const handleFinalize = () => {
        onFinalize();
    }

    const handleDeleteAll = () => {
        onDeleteAll();
    }

    return (
      <>
        <div className={`fixed z-50 right-0 top-0 bottom-0 transition-transform ${
                    isOpen ? ' translate-x-0' : 'translate-x-full'
                } duration-500`}>
            <div className="flex flex-row">
                <div className="flex flex-col p-4">
                    <CloseCartButton onClose={onClose}/>
                    <div className="flex-grow"></div>
                </div>
                <div className='flex flex-col justify-start items-start h-screen bg-white shadow-lg'>
                    <div className="flex flex-row justify-center items-center text-center w-full px-6 pt-6 pb-4">
                        <p className=" text-3xl">Carrinho</p>
                    </div>
                    <div className="overflow-y-scroll max-h-[100vh]">
                        <img src="./carrinho-vazio.png" className={` w-60 ${productList.length == 0 ? "" : "hidden"}`}/>
                        {productList.map((product, index) => (
                            <ProductCart
                            key={index}
                            type={product.type}
                            index={product.index}
                            qtd={product.qtd}
                            onQtdChange={(newQtd: number) => handleQtdChange(index, newQtd)}
                            onDelete={() => handleDelete(index)}
                            />
                        ))}
                    </div>
                    <div className=" flex flex-col flex-grow justify-between items-center w-full px-6 py-4">
                        <p className=" text-xl pb-3">Total: R$ {(total.toFixed(2)).replace(".",",")}</p>
                        <div className="flex-grow"></div>
                        <PrimaryButton label="Finalizar compra" classes={`${total == 0 ? `${PRIMARY_BUTTON["GRAY"]} cursor-not-allowed disabled` : PRIMARY_BUTTON["GREEN"]}`} onAction={handleFinalize}/>
                        <div className="pt-2"><SecondaryButton label={"Esvaziar carrinho"} classes={`${SECONDARY_BUTTON["RED"]} w-40`} onAction={handleDeleteAll}/></div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default CartPage