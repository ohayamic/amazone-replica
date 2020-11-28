import React from 'react'
import {useStateValue} from './StateProvider'

import "./Checkout.css"
const Checkout = () => {
    
    // Initialize the store to get all its power
    const [state, dispatch] = useStateValue()

    const getTotal = (amount, item) => {
        return item.price + amount
    }

    // Get the basket total price
    const getBasketTotal = (state) => {
    state.basket?.reduce(getTotal, 0)
    };
    //console.log(getBasketTotal)
  const deleteFromBasket = id => {
        dispatch({
            type: 'DELETE_FROM_BASKET',
            item: {
                id: id,   
            }
        })
    }



    return (

        <section className="checkout-header">
            <div className="checkout-left" >
                <img className="checkout-img" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout-logo" />
                <h3>Your Basket is ready</h3>
                {state.basket.map((item) => {
                    return (
                <article style={{marginBottom:"5px"}} key={item.id}>
                <div className="checkout-content" >
                    <div className="checkout-content-img">
                        <img src={item.image} alt="content-img" />
                    </div>
                    <div className="checkout-content-boby">
                            <p>{item.title.length>=70? `${item.title.slice(0, 70)} ...`: item.title}</p>
                            <small>{`$ ${item.price}`}</small>
                                    {Array(item.rating).fill().map((_, i) => {
                                        return (
                                            <div style={{ display: "grid", flexDirection:"row" }} key={i}>
                                                <small>🌟</small>
                                            </div>)
                                    }
                                        )
                                    }
                            <button className="checkout-delete" onClick={()=>deleteFromBasket(item.id)}> Delete Item</button>            
                                    
                    </div>
                </div>
                </ article>
                )
                })}
            </div>
            
         
            <div className="checkout-right">
                <h4>Hello from left</h4>
            </div>

        </section>
    )
}

export default Checkout
