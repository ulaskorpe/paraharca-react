 
import './App.css';
import { useState,useEffect } from 'react';
import Header from './components/Header';
import products from './products.json';
import Product from './components/Product';
import Basket from './components/Basket';
function App() {
 
  const [money,setMoney]=useState(1040);
  const [basket,setBasket]=useState([]);
  const resetBasket = ()=>{
      setBasket([]);
  }
  const [total,setTotal]=useState(0);
  useEffect(()=>{
     setTotal( basket.reduce((acc,item)=>{
        return acc+(item.amount * (products.find(product=>product.id === item.id)).price);
      },0))

      //setTotal(t);
    //console.log(basket);
  },[basket])
   
  return (
    <div className="App">
      <Header money={money} total={total}   />
       {products.map((product)=>{
        return  <Product key={product.id} money={money} total={total} product={product} basket={basket} setBasket={setBasket} />;
       })}
      {total > 0 && (
       <Basket basket={basket} products={products} resetBasket={resetBasket} total={total}/>
       )}
    </div>
  );
}

export default App;
