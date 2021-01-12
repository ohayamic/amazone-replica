import React, { useState } from 'react'
import {auth} from '../firebase'
import {useStateValue} from './StateProvider'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import './Payment.css'

const Payment = () => {
    // Initialize the store to get all its power
    const [state, dispatch] = useStateValue()
    const [open, setOpen] = useState(false)
    const [address, setAddress] = useState({
        street: "",
        poBox: "",
        state: "",
        country:"",
    })

    // Get the total price in the basket
    let getsum = 0
    getsum = state.basket.reduce((old, newVal) =>{
    return old + newVal.price;}, 0);

    // setup stripe constants 
    const stripe = useStripe();
    const elements = useElements();

    // handle change
    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setAddress({
            ...address,
            [e.target.name]:value
        })

    }

    // submit form to stripe
    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    // submit Address form to database
    const handleForm = (e) => {
        e.preventDefault()
        
        //send to database with user login id
        console.log(state)
        //empty fields and close form
       // add information to state
        dispatch({
            type: "ADD_ADDRESS",
            item: {
                street: address.street,
                poBox: address.poBox,
                state: address.state,
                country:address.country,
            }
        })
        setOpen(!true)
    }
    
    // click to open form
    const openAddress = () => {
      setOpen(!open)
      console.log(open)
    }  

    const deleteFromBasket = (id) => {
        dispatch({
            type: 'DELETE_FROM_BASKET',
            item: { id: id }
        },
        )
    }
    
return (
    
    <div className="payment__header" >

        <div className="payment__address">
            {!open && state.userAddress.street?.length ?
                <div className="payment__delivery">
                    <h3>Delivery Address</h3>
                    <div>
                        <p>{state.userAddress.street}</p>
                        <p>{state.userAddress.poBox}</p>
                        <p>{state.userAddress.state}</p>
                        <p>{state.userAddress.country}</p>
                    </div>
                </div> :
                <div className="payment__address__header">
                    <div style={{display:"flex"}}>
                        <h3>Customer Address</h3>
                        <button className="checkout" onClick={openAddress}>Enter Address</button>
                    </div>
                    <form onSubmit={handleForm} className={open?"payment__form__show":"payment__form"} >
                        <label>Address</label>
                        <input type="text" name='street' value={address.street} placeholder="Enter Address" onChange={handleChange}/>
                        <label>P.O.Box</label>
                        <input type="text" name='poBox' value={address.poBox} placeholder="P.O.BOX" onChange={handleChange}/>
                        <label>State</label>
                        <input type="text" name='state' value={address.state} placeholder="State" onChange={handleChange}/>
                        <label>Country</label>
                        <input type="text" name='country' value={address.country} placeholder="Country" onChange={handleChange}/>
                        <button type="submit">Submit Address</button>
                    </form>
                </div>
            }
            
        </div>
        <div className="payment__wrapper">
        {state.basket.map((item) => {
            return (
                
                <article style={{ marginBottom: "5px" }} key={item.id}>
                    <div className="checkout-content" >
                        <div className="checkout-content-img">
                            <img src={item.image} alt="content-img" />
                        </div>
                    
                        <div className="checkout-content-boby">
                            <p>{item.title.length >= 70 ? `${item.title.slice(0, 70)} ...` : item.title}</p>
                            <small>{`$${item.price}`}</small>
                            <div style={{ display: "flex", marginBottom: "10px" }}>
                                {Array(item.rating).fill().map((_, i) => {
                                    return (
                                        <div key={i}>
                                            <small>🌟</small>
                                        </div>)}
                                )}
                            </div>
                            <button className="checkout-delete" onClick={() => deleteFromBasket(item.id)}> Delete Item</button>
                        </div>
                    
                    </div>
                </ article>)
                })}
            </div>
        <div className="payment__stripe">
            <div>
                <h3>Payment Method</h3>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <CardElement name="card" onChange={HashChangeEvent} />
                    <h3 className="">Pay ${getsum}</h3>
                </form>
            </div>
            
        </div>
    </div>
)
}

export default Payment
