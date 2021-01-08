import './App.css';
import React, { useEffect } from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {auth} from './firebase'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Banner from './components/Banner';
import Header from './components/Header'
import Footer from './components/Footer'
import Checkout from './components/Checkout'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import SignOut from './components/SignOut'
import Payment from './components/Payment'
import {useStateValue} from './components/StateProvider'



const App = () => { 
  const [state, dispatch] = useStateValue()
  // get stripe loader
  const stripePromise = loadStripe('pk_test_51I5s63FbnkSOhszs1P8VaQFsZCq8y9TTnCCf6s93gWDHthLuxFxR5B31VraOhiSJ9zsk1qofTkaGEpXIQogPhVJg005OnogZHW')

 useEffect(() => {
    auth.onAuthStateChanged(AuthUser => {
      
      if (AuthUser) {
        // set user if user is logged in
        dispatch({
          type: 'SET_USER',
          user : AuthUser
        })
      } else {
        // user is not logged in
        dispatch({
          type: 'SET_USER',
          user : null
        })
        console.log("user not logged in")
      }
    })

  }, [])
  return (
    <Router>
    <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signout">
            <SignOut />
          </Route>
          <Route path="/payment">
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Banner />
             <Home />
          </Route>   
        </Switch>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
