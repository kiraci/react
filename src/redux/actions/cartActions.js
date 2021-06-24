import * as actionTypes from './actionTypes'

export function addToCart(item){
    return {
        type: actionTypes.ADD_TO_CART,
        payload: item
    }
}

export function removeFromCart(item){
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: item
    }
}