import React, {Fragment, useEffect, useState} from 'react';
import {Get} from "../../../utils/httpRequests";
import Step from "../step";
import {useDispatch, useSelector} from 'react-redux';
import Field from "../fields";
import {UpdateCustomProductField} from "../../../redux/actions/customProductActions";

const Form = () => {
    const product = useSelector(state => state.ProductForm.product);
    const steps = useSelector(state => state.ProductForm.steps);
    const dispatch = useDispatch();

    useEffect(() => {
    }, [steps]);

    /**
     * callback from any field change.
     * updates selection in store.
     * @param fieldId
     * @param value
     */
    const onFieldChange = (fieldId, value) => {
        dispatch(UpdateCustomProductField({fieldId, value}))
    };

    return (
        <div className="form">
            <h1>{product.Name}</h1>
            {steps.map((step, stepIndex) =>
                <div key={stepIndex} className="step">
                    <Step data={step} stepIndex={stepIndex} onFieldChange={onFieldChange}/>
                </div>
            )}


        </div>
    )
};

export default Form;