import React, {useEffect, useState} from 'react';
import {useEffectAfterInit} from "../../../utils/customHooks";
import {useSelector} from "react-redux";
import {FieldWrapper, StyledInput} from "./style";
import {SetDynamicValidations} from "../../../utils/formUtils";

const FieldSimpleText = ({fieldData, onChange}) => {
    const [selectedValue, setSelectedValue] = useState();
    const customProductSelections = useSelector(state => state.CustomProduct.selections);

    useEffect(() => {
        setSelectedValue(customProductSelections[fieldData.Id]);
    }, [customProductSelections]);

    useEffectAfterInit(() => {
        onChange(fieldData.Id, selectedValue);
    }, [selectedValue]);

    const handleOptionChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const validations = SetDynamicValidations(fieldData.Validations);

    return (
        <FieldWrapper className="field=dorpdown-wrapper">

            <label>
                <div>
                    <span>{fieldData.Label}:</span>
                    <span>({fieldData.SubLabel})</span>
                </div>
                <StyledInput {...validations} type="text" placeholder={fieldData.Placeholder} defaultValue={selectedValue} onBlur={handleOptionChange}/>
            </label>
        </FieldWrapper>
    )
};

export default FieldSimpleText;