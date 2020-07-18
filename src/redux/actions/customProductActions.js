import {
    UPDATE_PRODUCT_FORM_DATA
} from './actionTypes';

export const UpdateCustomProductField = (payload) => {
    return {
        type: UPDATE_PRODUCT_FORM_DATA,
        payload: payload
    }
};