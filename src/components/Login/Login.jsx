import React, { useContext, useState } from 'react'
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
const Login = () => {
  const [error, setError] = useState("")
  const [show, setShow]=useState(false)
  const { logIn } = useContext(AuthContext)
  
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault()
    setError('')
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    logIn(email, password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
        form.reset()
        navigate(from, { replace: true })
      })
      .catch(error => {
        setError(error.message)
      })
  }

  return (
    <div>
      <div className='login-section'>
        <p className='text-error'>{error}</p>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin} className='form'>
          <label htmlFor="email">Email:</label><br></br>
          <input type="email" id="email" name="email" required /><br /><br />

          <label htmlFor="password">Password:</label><br></br>
          <input type={show?'text':'password'} id="password" name="password" required />
          <p onClick={()=>setShow(!show)}><small>
          {
            show?<span>Hide Password</span>:<span>Show Password</span>
          }
          </small></p><br></br>
          
          <button className='sign-up-btn'>Sign In</button>
          <p style={{ textAlign: "center" }}>New to Ema-john? <span style={{ color: "chocolate" }}><Link to="/register">Create new account</Link></span></p>
        </form>
        <hr></hr>
        <button className='social-btn'><img src='Logo/google.png'></img>Login with Google</button>
        <button className='social-btn'><img src='Logo/fb.png'></img>Login with Facebook</button>
        <button className='social-btn'><img src='Logo/github.png'></img>Login with Github</button>
      </div>

    </div>
  )
}

export default Login