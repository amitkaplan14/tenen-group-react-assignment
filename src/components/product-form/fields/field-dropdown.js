import React, {useEffect, useState} from 'react';
import {useEffectAfterInit} from "../../../utils/customHooks";
import {useSelector} from "react-redux";

const FieldDropdown = ({fieldData, onChange}) => {
    const [options, setOptions] = useState([]);
    const customProductSelections = useSelector(state => state.CustomProduct.selections);
    const [selectedValue, setSelectedValue] = useState();

    useEffect(() => {
        setSelectedValue(customProductSelections[fieldData.Id]);
    }, customProductSelections);

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