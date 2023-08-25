import Banner from "../components/atoms/Banner"
import MenuBar from "../components/molecules/MenuBar"

interface HeaderProps {
    onOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpen }) => {
    return (
        <div className=" h-fit">
            <div className='relative'>
              <div className='z-0 top-0 left-0 right-0'><Banner/></div>
            </div>
          </div>
    )
}

export default Header