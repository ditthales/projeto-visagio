import SecondaryButton from "../atoms/SecondaryButton"
import { SECONDARY_BUTTON } from "../../constants/constants"
import { HAIR_PRODUCTS, FACE_PRODUCTS, BODY_PRODUCTS } from "../../constants/constants"

const ProductCart = (props:{type:string, index:number}) => {
    let product = FACE_PRODUCTS[0]
    if (props.type == "hair") {
        product = HAIR_PRODUCTS[props.index]
    } else if (props.type == "face") {
        product = FACE_PRODUCTS[props.index]
    } else if (props.type == "body") {
        product = BODY_PRODUCTS[props.index]
    }
    return (
        <div className="flex flex-col w-fit">
            <div className="flex flex-row px-4 pt-6 justify-center items-center pb-4">
                <div className="flex w-20 items-start"><img src={product.img} className=" rounded-full h-11 w-11"/></div>
                <div className="flex-grow"></div>
                <div className="flex w-32 items-start"><p className="text-md">{product.label}</p></div>
                <div className="flex-grow"></div>
                <div className="flex w-24 items-start"><p className="text-md">R$ {product.price}</p></div>
                <div className="flex-grow"></div>
                <div className="flex w-30 items-start"><SecondaryButton label="Remover" classes={`font-semibold ${SECONDARY_BUTTON["RED"]}`}/></div>
            </div>
            <div className=" w-full h-px rounded-full bg-black"></div>
        </div>

    )
}

export default ProductCart