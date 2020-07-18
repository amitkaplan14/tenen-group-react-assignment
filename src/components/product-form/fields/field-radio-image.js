import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useEffectAfterInit} from "../../../utils/customHooks";

const FieldRadioImage = ({fieldData, onChange}) => {
    const dispatch = useDispatch();
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState();

    useEffect(() => {
        console.log('fieldData', fieldData);
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
                        <label>
                            <img src={option.Image} />
                            <input type="radio" value={option.Value} checked={option.Value.toString() === selectedValue} onChange={handleOptionChange} />
                            {option.Label}
                        </label>
                    </div>
                )}
            </div>
        </div>
    )
};

export default FieldRadioImage;