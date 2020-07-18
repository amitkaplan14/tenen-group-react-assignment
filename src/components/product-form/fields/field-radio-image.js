import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useEffectAfterInit} from "../../../utils/customHooks";
import {HideInput, RadioImageImg, RadioImageLabel} from "./style";

const FieldRadioImage = ({fieldData, onChange}) => {
    const customProductSelections = useSelector(state => state.CustomProduct.selections);
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState(customProductSelections[fieldData.Id]);

    useEffect(() => {
        setOptions(fieldData.Options)
    }, [fieldData]);

    useEffectAfterInit(() => {
        onChange(fieldData.Id, selectedValue);
    }, [selectedValue]);

    const handleOptionChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <div className="field-radio-image-wrapper">
            <div className="radio-group" role="radiogroup">
                {fieldData.Label ? <div>{fieldData.Label}</div> : null}
                {options.map((option, index) =>
                    <div key={index} className="radio" role="radio">
                        <RadioImageLabel>
                            <RadioImageImg selected={option.Value.toString() === selectedValue} src={option.Image} />
                            <HideInput type="radio" value={option.Value} checked={option.Value.toString() === selectedValue} onChange={handleOptionChange} />
                            {option.Label}
                        </RadioImageLabel>
                    </div>
                )}
            </div>
        </div>
    )
};

export default FieldRadioImage;