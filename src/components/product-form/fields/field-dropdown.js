import React, {useEffect, useState} from 'react';
import {useEffectAfterInit} from "../../../utils/customHooks";
import {useSelector} from "react-redux";
import {FieldSelectWrapper, FieldWrapper} from "./style";
import {SetDynamicValidations} from "../../../utils/formUtils";

const FieldDropdown = ({fieldData, onChange}) => {
    const [options, setOptions] = useState([]);
    const customProductSelections = useSelector(state => state.CustomProduct.selections);
    const [selectedValue, setSelectedValue] = useState();

    useEffect(() => {
        setSelectedValue(customProductSelections[fieldData.Id]);
    }, [customProductSelections]);

    useEffect(() => {
        setOptions(fieldData.Options)
    }, [fieldData]);

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
                <div>{fieldData.Label}</div>
                <FieldSelectWrapper value={selectedValue} onChange={handleOptionChange} {...validations}>
                    {options.map((option, index) =>
                        <option key={index} value={option.Value}>{option.Label}</option>
                    )}
                </FieldSelectWrapper>
            </label>
        </FieldWrapper>
    )
};

export default FieldDropdown;