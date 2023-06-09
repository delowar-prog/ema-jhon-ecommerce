import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const {img, name, price, ratings, seller}=props.product
  const handleAddToCart=props.handleAddToCart;
  return (
    <div className='product'>
     <img src={img} alt="product-photo"></img>
      <div className='product-details'>
          <h2 className='product-name'>{name}</h2>
          <h4>Price: {price}</h4>
          <p>Manufacturer : {seller}</p>
          <p>Rating : {ratings}</p>
      </div> 
      <button className='addToCartBtn' onClick={()=>handleAddToCart(props.product)}>Add to cart <FontAwesomeIcon className='cartIcon' icon={faShoppingCart} /></button>
    </div>
  )
}

export default Product