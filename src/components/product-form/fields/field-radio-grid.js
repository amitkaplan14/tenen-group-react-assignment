import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useEffectAfterInit} from "../../../utils/customHooks";

const FieldRadioGrid = ({fieldData, onChange}) => {
    const customProductSelections = useSelector(state => state.CustomProduct.selections);
    const [selectedValue, setSelectedValue] = useState(customProductSelections[fieldData.Id]);
    const [options, setOptions] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        setOptions(fieldData.Options)
    }, [fieldData]);

    useEffectAfterInit(() => {
        onChange(fieldData.Id, selectedValue);
    }, [selectedValue]);

    const handleOptionChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const openOptions = () => {
        setIsExpanded(!isExpanded);
    };



    const optionsGrid = isExpanded ?
        (<div>
            {options.map((option, index) =>
                <div key={index} className="radio-grid-item" role="radio">
                    <label>
                        <img src={option.Image} />
                        <input type="radio" value={option.Value} checked={option.Value.toString() === selectedValue} onChange={handleOptionChange} />
                        {option.Label}
                    </label>
                </div>
            )}
        </div>) : null;
    return (
        <div className="field-radio-image-wrapper">
            <div className="radio-group" role="radiogroup">
                <div onClick={openOptions}>{fieldData.Label}</div>
                {optionsGrid}
            </div>
        </div>
    )
};

export default FieldRadioGrid;