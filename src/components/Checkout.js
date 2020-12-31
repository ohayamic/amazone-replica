import React from 'react'
import {useStateValue} from './StateProvider'

import "./Checkout.css"
const Checkout = () => {
    
    // Initialize the store to get all its power
    const [state, dispatch] = useStateValue()
    
    

    // Get the total price in the basket
    let getsum = 0
    getsum = state.basket.reduce((old, newVal) =>{
        return old + newVal.price;
    }, 0);
    


    const deleteFromBasket = (id) => {
        dispatch({
            type: 'DELETE_FROM_BASKET',
            item: {
                id: id
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
                                <div style={{display:"flex", marginBottom:"10px"}}>
                                    {Array(item.rating).fill().map((_, i) => {
                                        return (
                                            <div  key={i}>
                                                <small>🌟</small>
                                            </div>)
                                    }
                                        )
                                    }
                                </div>   
                                    
                            <button className="checkout-delete" onClick={()=>deleteFromBasket(item.id)}> Delete Item</button>            
                                    
                    </div>     
                    
                </div>
            </ article>
                )
                })}
            </div>
            
         
            <div className="checkout-right">
                <div>
                    <p>You have {state.basket.length} {state.basket.length < 2 ? 'item': 'items'} in your Cart</p>
                    <p>The Total Sum is: {getsum}</p>
                </div>
                
            </div>

        </section>
    )
}

export default Checkout
