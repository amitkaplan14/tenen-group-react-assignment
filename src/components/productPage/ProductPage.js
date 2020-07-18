import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Get} from '../../utils/httpRequests';

// components
import Form from "../product-form/form/index";
import {useDispatch, useSelector} from "react-redux";
import {getProductFormData} from "../../redux/actions/productFormActions";

const ProductPage = () => {
    const dispatch = useDispatch();
    const {productId} = useParams();
    const productForm = useSelector(state => state.ProductForm);

    useEffect(() => {
        dispatch(getProductFormData(productId))
    }, [productId]);

    const formContent = productForm.product ?
        <Form />
        : null;

    return (
        <div className="product-page">
            <h1>Product Page</h1>
            {formContent}
        </div>
    )
}

export default ProductPage;
