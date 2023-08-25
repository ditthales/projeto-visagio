import { useState } from 'react'
import CartPage from './components/organisms/CartPage'
import BuyingPage from './components/templates/BuyingPage'
import { HAIR_PRODUCTS, FACE_PRODUCTS, BODY_PRODUCTS } from './constants/constants';

const App = () => {

  const [productList, setProductList] = useState<{
    type: string;
    index: number;
    qtd: number;
  }[]>([]);

  const[overlay, setOverlay] = useState(false);
  const[total, setTotal] = useState(0);

  const handleOverlay = () => {
    setOverlay(!overlay);
  };

  const sumTotal = (array: {
    type: string;
    index: number;
    qtd: number;
  }[] ) => {
    let total = 0;
    console.log(array)
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
    console.log(total)
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
        if (item.type === type && item.index === index) {
          item.qtd += 1;
        }
      })
    } else {
    updatedList.push({
      type: type,
      index: index,
      qtd: 1
    });
  }
    setProductList(updatedList);
    sumTotal(updatedList);
  }

  const handleProductFinalize = () => {

  }

  const handleProductDeleteAll = () => {
    setProductList([]);
    sumTotal([]);
  }

  return (
    <>
    <div>
      <BuyingPage onOpen={handleOverlay} onAddToCart={handleProductAdd}/>
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
