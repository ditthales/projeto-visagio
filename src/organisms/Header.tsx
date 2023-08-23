import Banner from "../components/atoms/Banner"
import MenuBar from "../components/molecules/MenuBar"

const Header = () => {
    return (
        <div className=" h-fit">
            <div className='relative'>
              <div className='absolute z-10 top-0 left-0 right-0'><MenuBar/></div>
              <div className='z-0 top-0 left-0 right-0'><Banner/></div>
            </div>
          </div>
    )
}

export default Header