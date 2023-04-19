import React, { useState } from 'react'
import Cart from '../Cart/Cart'
import { useLoaderData } from 'react-router-dom'
import OrderItem from '../OrderItem/OrderItem'
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb'
const Orders = () => {
  const saveCart=useLoaderData();
  const [cart, setCart]=useState(saveCart)
  const deleteOrderItem=(id)=>{
    const remainingOrderItem=cart.filter(item=>item.id!=id)
    setCart(remainingOrderItem)
    removeFromDb(id)
  }
    
  return (
    <div className='shop-section'>
        <div className='orders-products'>
            {
              cart.map(product=><OrderItem key={product.id} product={product} deleteOrderItem={deleteOrderItem}></OrderItem>)
            }
        </div>
        <div className='cart-section'>
        <Cart cart={cart}></Cart>
        </div>
    </div>
  )
}

export default Orders