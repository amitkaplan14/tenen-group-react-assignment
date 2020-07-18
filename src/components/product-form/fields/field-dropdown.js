import React, {useEffect, useState} from 'react';
import {useEffectAfterInit} from "../../../utils/customHooks";

const FieldDropdown = ({fieldData, onChange}) => {
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
        <div className="field=dorpdown-wrapper">

            <label>
                <div>{fieldData.Label}</div>
                <select value={selectedValue} onChange={handleOptionChange}>
                    {options.map((option, index) =>
                        <option key={index} value={option.Value}>{option.Label}</option>
                    )}
                </select>
            </label>
        </div>
    )
};

export default FieldDropdown;