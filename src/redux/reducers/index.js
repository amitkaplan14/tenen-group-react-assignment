import { combineReducers } from "redux";
import ProductFormReducer from './productFormReducer'
import CustomProductReducer from "./customProductReducer";


export default combineReducers({
    ProductForm: ProductFormReducer,
    CustomProduct: CustomProductReducer
});