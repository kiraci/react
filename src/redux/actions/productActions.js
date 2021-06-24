import * as actionTypes from './actionTypes'

export function getProductsSuccess(products){
    return {type: actionTypes.GET_PRODUCTS_SUCCESS, payload:products}
}

export function getProducts(categoryId) {
    return (dispatch) => {
        let url = "http://localhost:3000/Products";

        if(categoryId){
            url += "?categoryId=" + categoryId;
        }

        return fetch(url).then(res => res.json()).then(data => dispatch(getProductsSuccess(data)))
    }
}