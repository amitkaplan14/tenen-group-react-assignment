import React, {Fragment, useEffect, useState} from 'react';
import Field from "../fields";
import {useSelector} from "react-redux";

const Step = ({data, stepIndex, onFieldChange})  => {
    const formFields = useSelector(state => state.ProductForm.formFields);
    const [fields, setFields] = useState([]);

    useEffect(() => {
        setAllStepFields(data.Fields);
    }, [data]);

    /**
     * creates an array with all fields that exists in the step (parents and children).
     * sets fields from state.
     * @param stepFields - step's fields
     */
    const setAllStepFields = (stepFields) => {
        let allFields = [];
        stepFields.forEach((fieldId) => {
            let fieldData = formFields[fieldId];
            fieldData.Show = true;
            allFields.push(fieldData);
            let children = getChildren(fieldData.Options, fieldId);
            allFields = allFields.concat(children);
        });
        allFields.sort((a, b) => a.Order - b.Order);
        setFields(allFields);
    };

    /**
     * Get all field's children
     * @param parentOptions - parent's field's options if has any.
     * @param fieldId - id
     * @returns {Array}
     */
    const getChildren = (parentOptions, fieldId) => {
        let children = [];
        if (parentOptions) {
            parentOptions.forEach((option) => {
                if (option.ChildrenFields) {
                    option.ChildrenFields.forEach((child) => {
                        let childData = formFields[child];
                        childData.parent = fieldId;
                        childData.parent = fieldId;
                        children.push(childData);
                    });
                }
            });
        }
        return children;
    };

    return (
        <div>
            <h2>Step {stepIndex + 1}: {data.Name}</h2>
            <Fragment>
                {fields.map((field, index) =>
                    <Field key={index} fieldId={field.Id} onChange={onFieldChange} parent={field.parent}/>
                )}
            </Fragment>

        </div>
    )
};

export default Step;