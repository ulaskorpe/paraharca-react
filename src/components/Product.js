import React from "react";


export default function Product({product,basket,setBasket,total,money}){

    const basketItem = basket.find(item =>item.id === product.id) ;
    
    const addBasket = ()=>{
        const checkBasket = basket.find(item =>item.id === product.id) ;
        if(checkBasket){
                checkBasket.amount+=1;
                setBasket([...basket.filter(item=>item.id !== product.id),checkBasket])
        }else{
            setBasket([...basket,{id:product.id,amount:1}]);
        }
       
      
    }   

    const removeBasket = ()=>{
        const currentBasket = basket.find(item =>item.id === product.id) ;
        if(currentBasket){
        const basketWithoutCurrentProduct =  basket.filter(item=>item.id !== product.id);
       
        if( parseInt(currentBasket.amount)-1=== 0){
           
            setBasket([...basketWithoutCurrentProduct])
        }else{

            currentBasket.amount-=1;
             setBasket([...basketWithoutCurrentProduct ,currentBasket]);
        }
        }
    }
    return(<div className="product">
        <h5>{product.title}</h5>
        <div className="price">${product.price}</div>
        <div className="actions">
            <button disabled={!basketItem} onClick={removeBasket}>Remove</button>
            <button disabled={total+product.price > money } onClick={addBasket}>Add</button></div>
       <div className="amount">{ basketItem && basketItem.amount || 0 } in basket</div>
    </div>)
}
