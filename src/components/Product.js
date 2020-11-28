import React from 'react'
import {useStateValue} from './StateProvider'
import './Product.css'


const Product = ({ id, title, image, price, rating }) => {
    //initialize to use for dispatching
    const [state, dispatch] = useStateValue()
    //console.log(state.basket)


    const addToBasket = () => {
    // send item to data layer i.e the basket in 
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating:rating
                
            }
        })
        
}
return (<section className="product-header" key={id}>
            <article className="product-info">
                <p>{title.length >=100?`${title.slice(0, 100)} ...` :title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
        <div className="product-rating">
            {Array(rating).fill().map((_ , i) =>
                <p key={i}>🌟</p>
            )}
        </div>
            </article>
    <img src={image} alt="my" className="product-image" />
    <button onClick={addToBasket}>add to basket</button>
        </section>
            )
      
}

export default Product
