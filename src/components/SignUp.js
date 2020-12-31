import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {auth, db} from '../firebase'
//import image from '../images.jpg'
import './Login.css'
const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        username: '',
        password: '',
        rpassword: '',
    })

    const handleChange = (e) => {
        e.preventDefault()
        const value = e.target.value
        setUserInfo({...userInfo, [e.target.name]: value })
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(userInfo, userInfo.username)
    }
    return ( 
        <div className="login-header">
            <div className="login-body">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
            </div>      
            <h1>Register</h1>
            <form onSubmit={submitForm}>
                <div>
                    <label>E-mail</label>
                    <input type="text" placeholder="E-mail" name="email" value={userInfo.email} onChange={handleChange }/>
                </div>
                
                 <div>
                    <label>User name</label>
                    <input type="text"  placeholder="User name" name ="username" value={userInfo.username} onChange={handleChange }/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Password" name ="password" value={userInfo.password} onChange={handleChange }/>
                </div>
                <div>
                    <label>Repeat password</label>
                    <input type="password"  placeholder="Repeat password"name ="rpassword" value={userInfo.rpassword} onChange={handleChange }/>
                </div>
                <button type="submit">Sign in</button>
                <p>Have account! Login with details here</p>
                <Link to="/login">Login</Link>
            </form>
        </div>
    )
}

export default Login
