import MenuButton from "../atoms/MenuButton"

const MenuBar = () => {
    return (
        <div className="flex flex-row gap-6 px-10 pt-6">
            <MenuButton label="Home"/>
            <div className="flex-grow"></div>
            <MenuButton label="Carrinho"/>
        </div>
    )
}

export default MenuBar