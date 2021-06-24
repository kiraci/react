import * as actionTypes from './actionTypes'

export function changeCategory(category) {
    return {
        type: actionTypes.CHANGE_CATEGORY,
        payload: category
    }
}

export function getCategoriesSucces(categories){
    return {type: actionTypes.GET_CATEGORIES_SUCCESS, payload:categories}
}

export function getCategories() {
    return (dispatch) => {
        let url = "http://localhost:3000/categories";
        return fetch(url).then(res => res.json()).then(data => dispatch(getCategoriesSucces(data)))
    }
}
/*
export function changeCategorySuccess(){
    return {
        type: ,
        payload:
    }
}
*/