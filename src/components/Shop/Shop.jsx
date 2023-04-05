import React, { useEffect, useState } from 'react'
import { addToDb, getShoppingCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
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
// getLocalstorage data & check with products by id metch
useEffect(()=>{
  const storedCart=getShoppingCart();
  const saveCart=[];
  //step-1 get id
  for(const id in storedCart){
    //step-2 get product by id
    const addedProduct=products.find(product=>product.id===id)
    //step-3 get quantity
    if(addedProduct){
      addedProduct.quantity=storedCart[id];
      //push to saveCart empty array
      saveCart.push(addedProduct); 
    }  
  }
  setCart(saveCart)
}, [products])

  const handleAddToCart=(product)=>{
    //check is exist this product in card
    const exist=products.find(pd=>pd.id===product.id);
    let newCart=[]; 
    if(!exist){
      product.quantity=1;
      newCart=[...cart, product]
    }else{
      exist.quantity=exist.quantity+1;
      const remaining=cart.filter(pd=>pd.id!=product.id)
      newCart=[...remaining,exist]
    }
    
    setCart(newCart)
    addToDb(product.id); //store product by id using this method
  }

  return (
    <div className='shop-section'>
        <div className='all-products'>
        {
          products.map(product=><Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
        }
        </div>
        <div className='cart-section'>
           <Cart cart={cart}></Cart>
        </div>
    </div>
  )
}

export default Shop