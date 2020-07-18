import React, {useEffect, useState} from 'react'
import {CONSTANTS} from '../../../CONSTANTS'
import {useSelector} from "react-redux";
import FieldRadioImage from "./field-radio-image";
import FieldDropdown from "./field-dropdown";
import FieldSimpleText from "./field-simple-text";

const Field = ({fieldId, onChange, parent}) => {
    const formFields = useSelector(state => state.ProductForm.formFields);
    const customProductSelections = useSelector(state => state.CustomProduct.selections);

    const [fieldData, setFieldData] = useState(null);
    const [showField, setShowField] = useState(null);

    useEffect(() => {
        setFieldData(formFields[fieldId]);
        setShowField(formFields[fieldId].show);
    }, [fieldId, formFields]);

    /**
     * checking and changing the Show flag every time parent's value is changing.
     */
    useEffect(() => {
        if (parent && fieldData) {
            setShowField(customProductSelections[parent] === fieldData.showCondition.toString());
        }
    }, [parent, customProductSelections[parent]]);

    /**
     * returns the relevant field component by the field's type type.
     * @returns {*}
     */
    const setField = () => {
        let field;
        switch(fieldData?.Type) {
            case CONSTANTS.FIELD_TYPES.RADIO_IMAGE: {
                field = <FieldRadioImage fieldData={fieldData} onChange={onChange}/>;
                break;
            }
            case CONSTANTS.FIELD_TYPES.DROPDOWN: {
                field = <FieldDropdown fieldData={fieldData} onChange={onChange}/>;
                break;
            }
            case CONSTANTS.FIELD_TYPES.SIMPLE_TEXT: {
                field = <FieldSimpleText fieldData={fieldData} onChange={onChange}/>;
                break;
            }
            default: {
                field = null;
            }
        }
        return field;
    };

    return (
        <div className="main-field-wrapper">
            {showField && setField()}
        </div>
    )
};

export default Field;