import React from 'react'
//import image from '../images.jpg'
import './Login.css'
const Login = () => {
    return (
        <div className="login-header">
            <div className="login-body">
                <img style={{objectFit:"contain", width:"30%", height:"40px"}} src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </div>      
            <form >
                <div>
                    <label>Name</label>
                    <input type="text" />
                </div>
                
                 <div>
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" />
                </div>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Login
