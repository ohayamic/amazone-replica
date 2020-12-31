//import { Switch } from "react-router-dom"

export const initialState = {
    basket :[]
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, 
                basket : [...state.basket, action.item]
            }
        case 'DELETE_FROM_BASKET':
            let getId = state.basket.findIndex(item => item.id === action.id);
            
            let newBasket = [...state.basket]
            if (getId) {
                newBasket.splice(getId, 1)
            } else {
                console.log(`Can not remove item anymore. Basket is empty ${getId}`)

            }
            
            return {
                ...state, 
                basket : newBasket
            }
        default:
            return state
    }
}

export default reducer
