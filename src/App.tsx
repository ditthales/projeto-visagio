import { useState } from 'react'
import CartPage from './organisms/CartPage'
import BuyingPage from './templates/BuyingPage'
import { HAIR_PRODUCTS, FACE_PRODUCTS, BODY_PRODUCTS } from './constants/constants';

const App = () => {

  const [productList, setProductList] = useState<{
    type: string;
    index: number;
    qtd: number;
  }[]>([
    {
      type: "hair",
      index: 0,
      qtd: 7
    },
    {
      type: "hair",
      index: 1,
      qtd: 2
    },
    {
      type: "hair",
      index: 2,
      qtd: 1
    }
  ]);

  const[overlay, setOverlay] = useState(false);
  const[total, setTotal] = useState(0);

  const handleOverlay = () => {
    setOverlay(!overlay);
  };

  const sumTotal = () => {
    let total = 0;
    productList.forEach((product) => {
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
    sumTotal();
  }

  return (
    <>
    <div>
      <BuyingPage onOpen={handleOverlay}/>
      <CartPage isOpen={overlay} onClose={handleOverlay} onQtdChange={handleQtdChange} productList={productList} total={total}/>
    </div>
    </>
  )
}

export default App
