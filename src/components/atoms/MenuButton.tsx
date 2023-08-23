


const MenuButton = (props: {label: string}) => {
    return (
        <button className=" text-black font-semibold py-2 underline hover:no-underline">
            {props.label}
        </button>
    )
}

export default MenuButton