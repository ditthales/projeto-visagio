
const CartButton = ({ onClose }) => {
    return (
        <button className="w-10 h-10" onClick={onClose}>
            <img src="./carrinho.png"/>
        </button>
    )
}

export default CartButton