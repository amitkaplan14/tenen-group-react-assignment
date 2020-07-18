import {
    GET_PRODUCT_FORM_DATA,
    GET_PRODUCT_FORM_DATA_FAILED,
    GET_PRODUCT_FORM_DATA_SUCCESS,
    TEST,
    UPDATE_PRODUCT_FORM_DATA
} from './actionTypes';
import {Get} from '../../utils/httpRequests';
import {applyMiddleware as dispatch} from "redux";

export const  testAction  = (payload) => {

    return {
        type: TEST,
        payload: payload
    }
};

export const getProductFormData = (productId) => {
    return function(dispatch) {
        dispatch({
            type: GET_PRODUCT_FORM_DATA,
            payload: productId
        });

        Get('/productForm.json')
            .then((response) => {
                setTimeout(() => {
                    dispatch({
                        type: GET_PRODUCT_FORM_DATA_SUCCESS,
                        payload: response.data
                    })
                }, 500)
            })
            .catch((error) => {
                dispatch({
                    type: GET_PRODUCT_FORM_DATA_FAILED,
                    payload: error
                })
            })
    }
};

export const getProductFormDataSuccess = (response) => {
    return {
        type: GET_PRODUCT_FORM_DATA_SUCCESS,
        payload: response
    }
};