import { HAIR_PRODUCTS, FACE_PRODUCTS, BODY_PRODUCTS, SECONDARY_BUTTON } from "../../constants/constants"
import SecondaryButton from "../atoms/SecondaryButton";

const ProductCart = (props:{type:string, index:number, qtd:number, onQtdChange: (newQtd: number) => void, onDelete: (index:number) => void}) => {
    let product = FACE_PRODUCTS[0]

    const handleQtdChange = (newQtd: number) => {
        props.onQtdChange(newQtd);
    }

    const handleDelete = () => {
        props.onDelete(props.index);
    }

    if (props.type == "hair") {
        product = HAIR_PRODUCTS[props.index]
    } else if (props.type == "face") {
        product = FACE_PRODUCTS[props.index]
    } else if (props.type == "body") {
        product = BODY_PRODUCTS[props.index]
    }
    return (
        <div className="">
        <div className="flex flex-col w-full">
            <div className="flex flex-row px-4 pt-6 justify-between items-center pb-4">
                <div className="flex items-center pl-5"><img src={product.img} className=" rounded-full h-11 w-11"/></div>
                <div className="flex-grow"></div>
                <div className="flex items-center text-center justify-center w-32"><p className="text-sm">{product.label}</p></div>
                <div className="flex-grow"></div>
            </div>
            <div className="flex flex-row px-4 justify-center items-center pb-4">
            <div className="flex flex-row items-center">
                    <button className="w-6 h-6 rounded-full bg-gray-200 text-gray-500" onClick={() => {
            props.qtd > 0 ? handleQtdChange(props.qtd - 1) : handleQtdChange(0);
          }}>-</button>
                    <p className="lg:text-sm text-xs px-3 w-10 text-center">{props.qtd}</p>
                    <button className="w-6 h-6 rounded-full bg-gray-200 text-gray-500" onClick={() => {
            props.qtd < 30 ? handleQtdChange(props.qtd + 1) : handleQtdChange(30);
          }}>+</button>
                </div>
                <div className="flex-grow"></div>
                <div className="flex items-center text-center justify-center w-32"><p className="text-sm">R$ {((parseFloat(product.price.replace(",",".")) * props.qtd).toFixed(2)).replace(".",",")}</p></div>
            </div>
            <div className="w-full justify-center items-center text-center pb-2"><SecondaryButton label={"Remover"} classes={`${SECONDARY_BUTTON["RED"]}`} onAction={handleDelete}/></div>
            <div className=" w-full h-px rounded-full bg-black"></div>
        </div>
        </div>

    )
}

export default ProductCart
