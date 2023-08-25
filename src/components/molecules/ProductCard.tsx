import { PRIMARY_BUTTON } from "../../constants/constants"
import PrimaryButton from "../atoms/PrimaryButton"


const ProductCard = (props:{type:string, key:number, index:number, img:string, label:string, price:string, background:string, onAction: (type:string, index:number) => void}) => {
    
    const handleAction = () => {
        props.onAction(props.type, props.index);
    }
    
    return (
        <>
            <div className=" relative py-8 rounded-3xl shadow-xl flex flex-col justify-center items-center w-fit bg-cover bg-center" style={{backgroundImage: `url(${props.background})` }}>
                <div>
                    <img src={props.img} alt={props.label} className=" rounded-full" />
                </div>
                <div className=" flex flex-row p-4 justify-center items-center w-80"> 
                    <h3 className=" font-bold text-xl w-80 whitespace-normal break-words text-center">{props.label}</h3>
                </div>
                <div className="flex flex-row justify-center items-center w-80 px-6 pt-6">
                    <p className="">R$ {props.price}</p>
                    <div className="flex-grow"></div>
                    <PrimaryButton label="+ carrinho" classes={`${PRIMARY_BUTTON["GREEN"]}`} onAction={handleAction}/>
                </div>
            </div>
        </>
    )
}

export default ProductCard

