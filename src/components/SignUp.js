import React, { useState } from 'react'
import {Link, withRouter} from 'react-router-dom'
import { auth, db } from '../firebase'
import firebase from 'firebase'
//import image from '../images.jpg'
//auth.onAuthStateChanged(user => {}) use to track user status
import './Login.css'
const Login = ({history}) => {
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
        if (userInfo.password === userInfo.rpassword) {
            auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
                auth.createUserWithEmailAndPassword(userInfo.email, userInfo.password).then(cred => {
            if (cred.user.email === userInfo.email) {
                history.push('/checkout')
            }
                return db.collection('userInfo').doc(cred.user.uid).set({
                    email: userInfo.email,
                    password: userInfo.password,
                    username: userInfo.username
                })
            }).then(() => {
                console.log("data added to collection")

            })
            })

        } else {
            console.log("information entered is not correct")
        }
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
                    <input type="text" placeholder="User name" name="username" value={userInfo.username} onChange={handleChange} />
                    <p style={userInfo.username.length < 5?{color:"red"}:{color:"blue"} }></p>
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

export default withRouter(Login)
