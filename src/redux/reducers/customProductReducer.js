import {
    UPDATE_CUSTOM_PRODUCT
} from "../actions/actionTypes";

const initialState = {
    selections: {}
};

export default function CustomProductReducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_CUSTOM_PRODUCT: {
            return {
                ...state,
                selections: Object.assign({}, state.selections, {[action.payload.key]: action.payload.value})
            }
        }
        default: {
            return state;
        }
    }
}