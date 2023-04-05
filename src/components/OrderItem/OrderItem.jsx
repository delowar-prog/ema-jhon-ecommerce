import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import "./OrderItem.css"
const OrderItem = ({product, deleteOrderItem}) => {
  return (
    <div className='singleOrderItem'>
        <img src={product.img}></img>
        <div className='orderItemDetails'>
            <h3>{product.name}</h3>
            <p>Price: <span className='priceStyle'>${product.price}</span></p>
            <p>Product quantity: <span className='shippingStyle'>{product.quantity}</span></p>
        </div>
        <button onClick={()=>deleteOrderItem(product.id)} className='deleteBtn'>
          <FontAwesomeIcon className='deleteIcon' icon={faTrashAlt} />
        </button>
       
    </div>
  )
}

export default OrderItem