import React from "react";

export default function BasketItem({item, product}){
   
    return(<div key={Math.random()}> {product.title} x {item.amount} : ${item.amount*product.price} </div>);
}