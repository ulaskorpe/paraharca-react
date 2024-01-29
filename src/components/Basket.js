import React from "react";
import BasketItem from "./BasketItem";

export default function Basket({basket ,products,total,resetBasket})
{     

    return(
        
        <div>
        {basket.map(item=>(
           <BasketItem item={item}  product={products.find(p=>p.id==item.id)} key={Math.random()}/>
        ))}
        <div> Total : ${total}</div>
        <div><button onClick={resetBasket}>Reset Basket</button></div>
        </div>
    )
}