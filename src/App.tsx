import { useState } from 'react'
import CartPage from './components/organisms/CartPage'
import BuyingPage from './components/templates/BuyingPage'
import { HAIR_PRODUCTS, FACE_PRODUCTS, BODY_PRODUCTS } from './constants/constants';
import FinalizationBanner from './components/molecules/FinalizationBanner';

const App = () => {

  const [productList, setProductList] = useState<{
    type: string;
    index: number;
    qtd: number;
  }[]>([]);

  const[overlay, setOverlay] = useState(false);
  const[finalizationOverlay, setFinalizationOverlay] = useState(false);
  const[total, setTotal] = useState(0);

  const handleOverlay = () => {
    setOverlay(!overlay);
  };

  const handleFinalizationOverlay = () => {
    setFinalizationOverlay(!finalizationOverlay);
  }  

  const handleOpenOverlay = () => {
    setOverlay(true);
  }

  const sumTotal = (array: {
    type: string;
    index: number;
    qtd: number;
  }[] ) => {
    let total = 0;
    array.forEach((product) => {
      if (product.type == "hair") {
        total += parseFloat(HAIR_PRODUCTS[product.index].price.replace(",",".")) * product.qtd;
      } else if (product.type == "face") {
        total += parseFloat(FACE_PRODUCTS[product.index].price.replace(",",".")) * product.qtd;
      } else if (product.type == "body") {
        total += parseFloat(BODY_PRODUCTS[product.index].price.replace(",",".")) * product.qtd;
      }
    })
    setTotal(total);
  }

  const handleQtdChange = (index: number, newQtd: number) => {
    const updatedList = [...productList];
    if (newQtd == 0) {
      updatedList.splice(index, 1);
    } else {
      updatedList[index].qtd = newQtd;
    }
    setProductList(updatedList);
    sumTotal(updatedList);
  }

  const handleProductDelete = (index: number) => {
    const updatedList = [...productList];
    updatedList.splice(index, 1);
    setProductList(updatedList);
    sumTotal(updatedList);
  }

  const handleProductAdd = (type: string, index: number) => {
    const updatedList = [...productList];
    const itemExists = updatedList.some(item => item.type === type && item.index === index);
    if (itemExists) {
      updatedList.forEach((item) => {
        if (item.type === type && item.index === index && item.qtd < 30) {
          item.qtd += 1;
        }
      })
    } else {
    updatedList.push({
      type: type,
      index: index,
      qtd: 1
    });
    handleOpenOverlay()
  }
    setProductList(updatedList);
    sumTotal(updatedList);
  }

  const handleProductFinalize = () => {
    handleFinalizationOverlay();
    setProductList([]);
    setTotal(0);
    handleOverlay();
    
  }

  const handleProductDeleteAll = () => {
    setProductList([]);
    sumTotal([]);
  }

  return (
    <>
    <div>
      <FinalizationBanner isOpen={finalizationOverlay} onClose={handleFinalizationOverlay}/>
      <BuyingPage onOpen={handleOpenOverlay} onAddToCart={handleProductAdd}/>
      <CartPage isOpen={overlay} 
          onClose={handleOverlay} 
          onQtdChange={handleQtdChange} 
          onDelete={handleProductDelete} 
          productList={productList} 
          total={total}
          onFinalize={handleProductFinalize}
          onDeleteAll={handleProductDeleteAll}/>
      
    </div>
    </>
  )
}

export default App
