
const CartButton = (props:{ onAction: () => void}) => {
    return (
        <button className="w-10 h-10" onClick={props.onAction}>
            <img src="./carrinho.png"/>
        </button>
    )
}

export default CartButton