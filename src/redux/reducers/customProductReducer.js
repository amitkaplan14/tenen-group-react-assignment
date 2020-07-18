import {
    UPDATE_PRODUCT_FORM_DATA
} from "../actions/actionTypes";

const initialState = {
    selections: {}
};

export default function CustomProductReducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_PRODUCT_FORM_DATA: {
            return {
                ...state,
                selections: Object.assign({}, state.selections, {[action.payload.fieldId]: action.payload.value})
            }
        }
        default: {
            return state;
        }
    }
}