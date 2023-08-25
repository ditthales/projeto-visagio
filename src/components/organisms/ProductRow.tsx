import ProductCard from "../molecules/ProductCard"
import { HAIR_PRODUCTS, BODY_PRODUCTS, FACE_PRODUCTS } from "../../constants/constants"


const ProductRow = (props:{type:string, onAddToCart: (type: string, index: number) => void}) => {

    const handleAddToCart = (type:string, index:number) => {
        props.onAddToCart(type, index);
    }

    if (props.type == "hair") {
        return (
            <div className="flex flex-col justify-center items-center w-full bg-green-200 pt-10 gap-3">
                <h2 className=" text-center text-3xl text-black">Produtos para cabelo</h2>
                <div className=" w-10 h-1 rounded-full bg-green-500"></div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10">
                    {HAIR_PRODUCTS.map((product, index) => (
                        <ProductCard type={props.type}
                        key={index}
                        index={index}
                        img={product.img}
                        label={product.label}
                        price={product.price}
                        background={product.background}
                        onAction={handleAddToCart} />
                    ))}
                </div>
            </div>
        )
    } else if (props.type == "body") {
        return (
            <div className="flex flex-col justify-center items-center w-full bg-blue-200 pt-10 gap-3">
                <h2 className=" text-center text-3xl text-black">Produtos para o corpo</h2>
                <div className=" w-10 h-1 rounded-full bg-blue-500"></div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10">
                    {BODY_PRODUCTS.map((product, index) => (
                        <ProductCard type={props.type}
                        key={index}
                        index={index}
                        img={product.img}
                        label={product.label}
                        price={product.price}
                        background={product.background}
                        onAction={handleAddToCart} />
                    ))}
                </div>
            </div>
        )
    } else if (props.type == "face") {
        return (
            <div className="flex flex-col justify-center items-center w-full bg-red-200 pt-10 gap-3">
                <h2 className=" text-center text-3xl text-black">Produtos para o rosto</h2>
                <div className=" w-10 h-1 rounded-full bg-red-500"></div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10">
                    {FACE_PRODUCTS.map((product, index) => (
                        <ProductCard type={props.type}
                        key={index}
                        index={index}
                        img={product.img}
                        label={product.label}
                        price={product.price}
                        background={product.background}
                        onAction={handleAddToCart} />
                    ))}
                </div>
            </div>
        )
    }
}

export default ProductRow