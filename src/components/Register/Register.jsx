import React, { useContext, useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'


const Register = () => {
    const {registerUser}=useContext(AuthContext)
    const [error, setError]=useState("")

    const handleRegister=(event)=>{
        event.preventDefault()
        setError("")
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        const confirm=form.confirm.value
        console.log(email, password)
        //validation
        if(password!=confirm){
            const msg="Password & confirm password not match"
            setError(msg)
            return 
        }else if(password.length<6){
            const msg="Password must be at least 6 charechters"
            setError(msg)
            return 
        }
        registerUser(email,password)
        .then(result=>{
            const loggedUser=result.user
            console.log(loggedUser)
            form.reset("")
        })
        .catch(error=>{
            setError(error.message)
        })
    }


  return (
    <div>
        <div className='registretion-section'>
            <h1>Sign Up</h1>
            <form onSubmit={handleRegister} className='form'> 
                    <label htmlFor="email">Email:</label><br></br>
                    <input type="email" id="email" name="email" required /><br/><br/>
                
                    <label htmlFor="password">Password:</label><br></br>
                    <input type="password" id="password" name="password" required /><br/><br/>

                    <label htmlFor="confirm">Confirm Password:</label><br></br>
                    <input type="password" id="confirm" name="confirm" required /><br/><br/>

                    <button className='sign-up-btn'>Sign Up</button>
                    <p style={{textAlign:"center"}}>Already have an account? <span style={{color:"chocolate"}}><Link to="/login">Sign In</Link></span></p>
            </form>
            <p className='text-error'>{error}</p>
        </div>
    </div>
  )
}

export default Register