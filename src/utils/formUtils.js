
export const SetDynamicValidations = (validations = []) => {
    let validationAttributes = {};
    validations.map((attribute) => {
        validationAttributes[attribute.Type] = attribute.Value
    });
    console.log('validations', validations);
    console.log('validationAttributes', validationAttributes);
    return validationAttributes;
};

export const getQueryString = (queryParams = []) => {
    let queryString = '';
    debugger;
    queryParams.forEach((param, index) => {
        if (index > 0) {
            queryString += '&';
        }
        queryString += `${param.Key}=${param.Value}`
    });
    queryString = '?'.concat(queryString);
    return queryString;
};