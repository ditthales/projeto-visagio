
const CartButton = (props:{ onAction: () => void}) => {
    return (
        <button className="w-16 h-16" onClick={props.onAction}>
            <img src="./carrinho.png"/>
        </button>
    )
}

export default CartButton