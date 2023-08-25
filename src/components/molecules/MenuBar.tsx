import MenuButton from "../atoms/MenuButton"

interface MenuBarProps {
    onOpen: () => void;
    onAction?: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({onOpen, onAction}) => {
    return (
        <div className="flex flex-row gap-6 px-10 pt-6">
            <MenuButton label="Home" onAction={onAction}/>
            <div className="flex-grow"></div>
            <MenuButton label="Carrinho" onAction={onOpen}/>
        </div>
    )
}

export default MenuBar