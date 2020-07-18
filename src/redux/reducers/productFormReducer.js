import {
    GET_PRODUCT_FORM_DATA,
    GET_PRODUCT_FORM_DATA_FAILED,
    GET_PRODUCT_FORM_DATA_SUCCESS
} from "../actions/actionTypes";


const initialState = {
    loading: false,
    error: null,
    product: null,
    steps: null,
    formFields: null
};


export default function ProductFormReducer(state = initialState, action){

    switch (action.type) {
        case GET_PRODUCT_FORM_DATA: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_PRODUCT_FORM_DATA_SUCCESS: {
            let formData = {...action.payload};
            let steps = formData.Steps;
            delete formData.Steps;

            let formFields = formData.Fields;
            delete formData.Fields;



            return {
                ...state,
                loading: false,
                product: formData,
                steps: steps,
                formFields: formFields
            }
        }
        case GET_PRODUCT_FORM_DATA_FAILED: {
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}