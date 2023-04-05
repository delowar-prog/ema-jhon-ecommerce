import React from 'react'
import Logo from '../../images/Logo.svg'
import './Header.css'
import { NavLink  } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header-section'>
            <img src={Logo} alt="logo"/>
            <div className='header-nav'>
                <NavLink  to='/' className={({isActive})=>(isActive? 'active' : '')}>Shop</NavLink>
                <NavLink  to='/orders' className={({isActive})=>(isActive? 'active' : '')}>Orders</NavLink>
                <NavLink  to='/inventory'>Inventory</NavLink>
                <NavLink  to='/login'>Login</NavLink>
            </div>
    </div>
  )
}

export default Header