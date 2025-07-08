import axios from "axios";
import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductsTypes";


export const fetchRequst=()=>{
    return {
        type: FETCH_REQUEST
    }
}
export const fetchSuccess=(products)=>{
    return {
        type: FETCH_SUCCESS,
        payload: products,
    }
}
export const fetchError=(error)=>{
    return {
        type: FETCH_ERROR,
        payload: error
    }
}

export const fetchProducts = () => {
    return async(dispatch) => {
        dispatch(fetchRequst());
        try {
            await axios
                .get("https://fakestoreapi.com/products")
                .then( res => {
                    const products = res.data
                    console.log("Products :: ", products);
                    dispatch(fetchSuccess(products));
                })
        } catch (error) {
            console.log("Failed while fetching :: ",error.message);
            dispatch(fetchError(error.message));
        }
    }
}