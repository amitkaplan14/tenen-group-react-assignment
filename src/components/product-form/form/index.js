import React, {Fragment, useEffect, useState} from 'react';
import {Get} from "../../../utils/httpRequests";
import Step from "../step";
import {useDispatch, useSelector} from 'react-redux';
import Field from "../fields";
import {UpdateCustomProductField} from "../../../redux/actions/customProductActions";
import {Title} from "../../../assets/style"
import ImagesSlider from "../../images-slider/images-slider";
import {FormButton, FormInner, FormWrapper} from "./style";
import $ from "jquery"

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

    const submit = () => {
        $('form').checkValidity()
    };

    return (
        <FormWrapper>
            <ImagesSlider items={product.Images} />
            <FormInner onSubmit={submit}>
                {steps.map((step, stepIndex) =>
                    <div key={stepIndex} className="step">
                        <Step data={step} stepIndex={stepIndex} onFieldChange={onFieldChange}/>
                    </div>
                )}
                <FormButton type="submit">Submit</FormButton>
            </FormInner>
        </FormWrapper>

    )
};

export default Form;