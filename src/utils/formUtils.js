import axios from 'axios';

export const SetDynamicValidations = (validations = []) => {
    let validationAttributes = {};
    validations.map((attribute) => {
        validationAttributes[attribute.Type] = attribute.Value
    });
    console.log('validations', validations);
    console.log('validationAttributes', validationAttributes);
    return validationAttributes;
};

export const validateInput = (inputId) => {
    let isValid = true;
};