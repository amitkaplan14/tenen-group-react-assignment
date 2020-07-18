import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useEffectAfterInit} from "../../../utils/customHooks";
import {HideInput, RadioImageImg, RadioImageLabel} from "./style";
import {SetDynamicValidations} from "../../../utils/formUtils";

const FieldRadioImage = ({fieldData, onChange, withNavigation, onNavigate}) => {
    const customProductSelections = useSelector(state => state.CustomProduct.selections);
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState();

    useEffect(() => {
        setOptions(fieldData.Options);
        setDefault();
    }, [fieldData]);

    useEffectAfterInit(() => {
        onChange(fieldData.Id, selectedValue);
    }, [selectedValue]);

    const setDefault = () => {
        if (customProductSelections[fieldData.Id]) {
            setSelectedValue(customProductSelections[fieldData.Id]);
        }
        options.forEach((option) => {
            if (options.IsDefault) {
                setSelectedValue(option.Value);
            }
        });
    };

    const handleOptionChange = (e, option) => {
        setSelectedValue(e.target.value);
        // withNavigation && onNavigate(option.Url);
    };

    const validations = SetDynamicValidations(fieldData.Validations);

    return (
        <div className="field-radio-image-wrapper">
            <div className="radio-group" role="radiogroup">
                {fieldData.Label ? <div>{fieldData.Label}</div> : null}
                {options.map((option, index) =>
                    <div key={index} className="radio" role="radio">
                        <RadioImageLabel>
                            <RadioImageImg selected={option.Value.toString() === selectedValue} src={option.Image} />
                            <HideInput {...validations} type="radio" name={fieldData.Id} value={option.Value} checked={option.Value.toString() === selectedValue} onChange={(event) => handleOptionChange(event, option)} />
                            {option.Label}
                        </RadioImageLabel>
                    </div>
                )}
            </div>
        </div>
    )
};

export default FieldRadioImage;