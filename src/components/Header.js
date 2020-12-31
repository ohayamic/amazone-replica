import React from 'react'
import { Link } from 'react-router-dom'
import {useStateValue} from './StateProvider'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import './Header.css'
const Header = () => {

      //initialize to use for dispatching
    const [state] = useStateValue()
    //console.log(state.basket)

    return (
        <header >
            <section className="header-logo">
                <span><FontAwesomeIcon icon={faBars} /></span>
                <Link to="/" ><img className="header-img" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazone-logo" /></Link>
            </section>
            <section className="header-search">
                <input type="text" placeholder="Search" />
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </section>
            <section className="header-children">
                <Link to="/login" className="login">
                    <div>
                        <p>Hello, Sign in</p>
                        <span>Account & List</span>
                    </div>
                </Link>
                
                <div>
                    <p>Returns</p>
                    <span> & Orders</span>
                </div>
                <Link to="/checkout" className="link">
                    <div className="header-cart" ><FontAwesomeIcon icon={faShoppingCart}/><span>{state.basket.length}</span></div>
                </Link>
            </section>
        </header>
    )
}

export default Header
