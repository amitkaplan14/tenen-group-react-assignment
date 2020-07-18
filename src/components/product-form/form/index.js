import React, {Fragment, useEffect, useState} from 'react';
import {Get} from "../../../utils/httpRequests";
import Step from "../step";
import {useDispatch, useSelector} from 'react-redux';
import Field from "../fields";
import {UpdateCustomProductField} from "../../../redux/actions/customProductActions";

const Form = () => {
    const product = useSelector(state => state.ProductForm.product);
    const steps = useSelector(state => state.ProductForm.steps);
    const customProductSelections = useSelector(state => state.CustomProduct.selections);
    const formFields = useSelector(state => state.ProductForm.formFields);

    const [fieldsToRender, setFieldsToRender] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
    }, [steps]);

    const onFieldChange = (fieldId, value) => {
        dispatch(UpdateCustomProductField({fieldId, value}))
    };

    const setChildren = (fieldId) => {
        const fieldData = formFields[fieldId];
        if (fieldData.Options && fieldData.Options.length > 0) {
            let selectionValue = customProductSelections[fieldData.Id];
            if (selectionValue) {
                let selectedOptionIndex = fieldData.Options.filter((option) => {
                    return selectionValue === option.Value.toString()
                    })[0];
                if (selectedOptionIndex !== null && selectedOptionIndex.ChildrenFields) {
                    return (
                        selectedOptionIndex.ChildrenFields.map((childId, index) =>
                            <Field key={`child_${index}`} fieldId={childId} onChange={onFieldChange} order={fieldData.Order}/>
                        )
                    )
                }
            }
        }
        return [];
    };

    const setFormFields = (fields) => {
        let fieldComponents = [];
        fields.forEach((fieldId, fieldIndex) => {
            fieldComponents.push(<Field key={`field_${fieldIndex}`} fieldId={fieldId} onChange={onFieldChange} order={formFields[fieldId].Order}/>);
            let children = setChildren(fieldId);
            if (children.length) {
                fieldComponents = fieldComponents.concat(children);
            }
        });
        return fieldComponents;
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