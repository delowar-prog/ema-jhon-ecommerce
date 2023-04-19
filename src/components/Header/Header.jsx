import React, { useContext } from 'react'
import Logo from '../../images/Logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogout=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error.message)
    })
  }
  return (
    <div className='header-section'>
      <img src={Logo} alt="logo" />
      <div>
        <ul className='header-nav'>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? "active" : ""
            }>Shop</NavLink>
          </li>
          <li>
            <NavLink to='/orders' className={({ isActive }) => isActive ? "active" : ""
            }>Orders</NavLink>
          </li>
          <li>
            <NavLink to='/checkout'>Checkout</NavLink>
          </li>
          <li>
            <NavLink to='/inventory'>Inventory</NavLink>
          </li>
          {
            user ? <span style={{marginLeft:"10px"}}>{user.email}
            <button onClick={handleLogout} style={{marginLeft:"10px"}}>
              Logout
            </button>
            </span> : <span>
              <li>
                <NavLink to='/register'>Register</NavLink>
              </li>
              <li>
                <NavLink to='/login'>Login</NavLink>
              </li>
            </span>
          }

          
        </ul>

      </div>
    </div>
  )
}

export default Header