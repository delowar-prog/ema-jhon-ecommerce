import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import './Shop.css'
const Shop = () => {
  const [products, setProducts]=useState([])
  const [cart, setCart]=useState([])
  useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  }, [])

  const handleAddToCart=(product)=>{
    const newCart=[...cart, product]
    setCart(newCart)
  }

  return (
    <div className='shop-section'>
        <div className='all-products'>
        {
          products.map(product=><Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
        }
        </div>
        <div className='cart-section'>
            <h3>Order Summery</h3>
            <p>Total Product : {cart.length}</p>
        </div>
    </div>
  )
}

export default Shop