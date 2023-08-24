import { HAIR_PRODUCTS, FACE_PRODUCTS, BODY_PRODUCTS } from "../../constants/constants"
import { useState } from "react"

const ProductCart = (props:{type:string, index:number, qtd:number}) => {
    let product = FACE_PRODUCTS[0]

    const [qtd, setQtd] = useState(props.qtd)

    if (props.type == "hair") {
        product = HAIR_PRODUCTS[props.index]
    } else if (props.type == "face") {
        product = FACE_PRODUCTS[props.index]
    } else if (props.type == "body") {
        product = BODY_PRODUCTS[props.index]
    }
    return (
        <div className="container mx-auto">
        <div className="flex flex-col w-full">
            <div className="flex flex-row px-4 pt-6 justify-center items-center pb-4">
                <div className="flex w-20 items-start"><img src={product.img} className=" rounded-full h-11 w-11"/></div>
                <div className="flex-grow"></div>
                <div className="flex w-32 items-start pr-4"><p className="text-sm">{product.label}</p></div>
                <div className="flex-grow"></div>
                <div className="flex flex-row w-32 items-center">
                    <button className="w-6 h-6 rounded-full bg-gray-200 text-gray-500" onClick={() => {qtd > 0 ? setQtd(qtd - 1) : setQtd(0)}}>-</button>
                    <p className="text-sm px-3 w-10 text-center">{qtd}</p>
                    <button className="w-6 h-6 rounded-full bg-gray-200 text-gray-500" onClick={() => {qtd < 30 ? setQtd(qtd + 1) : setQtd(30)}}>+</button>
                </div>
                <div className="flex-grow"></div>
                <div className="flex w-24 items-start"><p className="text-sm">R$ {((parseFloat(product.price.replace(",",".")) * qtd).toFixed(2)).replace(".",",")}</p></div>
            </div>
            <div className=" w-full h-px rounded-full bg-black"></div>
        </div>
        </div>

    )
}

export default ProductCart
