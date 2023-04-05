import React from 'react'
import Cart from '../Cart/Cart'
import { useLoaderData } from 'react-router-dom'
import OrderItem from '../OrderItem/OrderItem'
import './Orders.css'
const Orders = () => {
  const deleteOrderItem=(id)=>{
    console.log('deleted', id)
  }
    const cart=useLoaderData()
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