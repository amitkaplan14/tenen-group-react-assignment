import React, {Fragment, useEffect, useState} from 'react';
import {Get} from "../../../utils/httpRequests";
import Step from "../step";
import {useDispatch, useSelector} from 'react-redux';
import Field from "../fields";
import {UpdateCustomProductField} from "../../../redux/actions/customProductActions";
import {Title} from "../../../assets/style"
import ImagesSlider from "../../images-slider/images-slider";
import {FormInner, FormWrapper} from "./style";

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
        <FormWrapper>
            <ImagesSlider items={product.Images} />
            <FormInner>
                {steps.map((step, stepIndex) =>
                    <div key={stepIndex} className="step">
                        <Step data={step} stepIndex={stepIndex} onFieldChange={onFieldChange}/>
                    </div>
                )}
            </FormInner>
        </FormWrapper>

    )
};

export default Form;