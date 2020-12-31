import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {auth, db} from '../firebase'
//import image from '../images.jpg'
import './Login.css'
const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        e.preventDefault()
        const value = e.target.value
        setUserInfo({...userInfo, [e.target.name]: value })
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(userInfo)
    }
    return ( 
        <div className="login-header">
            <div className="login-body">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
            </div>      
            <h1>Sign-in</h1>
            <form onSubmit={submitForm}>
                <div>
                    <label>E-mail</label>
                    <input type="text" placeholder="E-mail" name="email" value={userInfo.email} onChange={handleChange }/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Password" name ="password" value={userInfo.password} onChange={handleChange }/>
                </div>
                
                <button type="submit">Sign in</button>
                <p>No account! Register with details here</p>
                <Link to="/signup">Sign Up</Link>
            </form>
        </div>
    )
}

export default Login
