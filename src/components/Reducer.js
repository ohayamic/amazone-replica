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
            return {
                ...state, 
                basket : [...state.basket, action.item]
            }
        default:
            return state
    }
}

export default reducer
