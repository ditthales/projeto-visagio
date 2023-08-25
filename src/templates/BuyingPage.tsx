import ProductRow from '../organisms/ProductRow'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import CartButton from '../components/atoms/CartButton'

interface BuyingPageProps {
  onOpen: () => void;
  onAddToCart: (type: string, index: number) => void;
}

const BuyingPage: React.FC<BuyingPageProps> = ({ onOpen, onAddToCart }) => {

  const handleAddToCart = (type: string, index: number) => {
    onAddToCart(type, index);
  }

  return (
    <>
        <div className='flex flex-col'>
          <Header onOpen={onOpen}/>
          <ProductRow type='hair' onAddToCart={handleAddToCart}/>
          <ProductRow type='face' onAddToCart={handleAddToCart}/>
          <ProductRow type='body' onAddToCart={handleAddToCart}/>
          <Footer/>
          <div className='fixed bottom-0 right-0 p-10'>
            <CartButton onAction={onOpen}/>
          </div>
        </div>
    </>
  )
}

export default BuyingPage
