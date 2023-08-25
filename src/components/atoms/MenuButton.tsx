

const MenuButton = (props: {label: string, onAction?: () => void}) => {
    return (
        <button className=" text-black font-semibold py-2 underline hover:no-underline" onClick={props.onAction}>
            {props.label}
        </button>
    )
}

export default MenuButton