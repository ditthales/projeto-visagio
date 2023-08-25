import Banner from "../atoms/Banner"

interface HeaderProps {
    // props
}

const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <div className=" h-fit">
            <div className='relative'>
              <div className='z-0 top-0 left-0 right-0'><Banner/></div>
            </div>
          </div>
    )
}

export default Header