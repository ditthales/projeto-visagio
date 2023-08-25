import ProductRow from '../organisms/ProductRow'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import CartButton from '../components/atoms/CartButton'

interface BuyingPageProps {
  onOpen: () => void;
}

const BuyingPage: React.FC<BuyingPageProps> = ({ onOpen }) => {

  return (
    <>
        <div className='flex flex-col'>
          <Header onOpen={onOpen}/>
          <ProductRow type='hair'/>
          <ProductRow type='face'/>
          <ProductRow type='body'/>
          <Footer/>
          <div className='fixed bottom-0 right-0 p-10'>
            <CartButton onAction={onOpen}/>
          </div>
        </div>
    </>
  )
}

export default BuyingPage
