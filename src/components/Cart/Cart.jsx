import React from 'react'
import './Cart.css'
const Cart = ({cart}) => {
    let total=0;
    let shipping=0;
    let quantity=0;
    for(const product of cart){
        total=total+product.price*product.quantity;
        shipping=shipping+product.shipping;
        quantity=quantity+product.quantity;
    }
    const tax=total*.07
    const groundTotal=total+shipping+tax;
  return (
    <div>
        <h3>Order Summery</h3>
        <p>Selected Product : {quantity}</p>
        <p>Total Price : ${total}</p>
        <p>Shipping Price : ${shipping}</p>
        <p>Tax : ${tax.toFixed(2)}</p>
        <h5>Ground Total :${groundTotal.toFixed(2)} </h5>
    </div>
  )
}

export default Cart