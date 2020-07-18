import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useEffectAfterInit} from "../../../utils/customHooks";
import {FieldWrapper, HideInput, InputBox, RadioGridLabel, RadioGridWrapper} from "./style";

const FieldRadioGrid = ({fieldData, onChange}) => {
    const customProductSelections = useSelector(state => state.CustomProduct.selections);
    const [selectedValue, setSelectedValue] = useState(customProductSelections[fieldData.Id]);
    const [options, setOptions] = useState([]);
    const [selectedLabel, setSelectedLabel] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        setOptions(fieldData.Options)
    }, [fieldData]);

    useEffectAfterInit(() => {
        onChange(fieldData.Id, selectedValue);
    }, [selectedValue]);

    const handleOptionChange = (e) => {
        setSelectedValue(e.target.value);
        let label = options.filter((option) => option.Value.toString() === e.target.value)[0].Label;
        setSelectedLabel(label);
    };

    const openOptions = () => {
        setIsExpanded(!isExpanded);
    };



    const optionsGrid = isExpanded ?
        (<RadioGridWrapper>
            {options.map((option, index) =>
                <RadioGridLabel key={index} role="radio">
                    <img src={option.Image} />
                    <HideInput type="radio" value={option.Value} checked={option.Value.toString() === selectedValue} onChange={handleOptionChange} />
                    {option.Label}
                </RadioGridLabel>
            )}
        </RadioGridWrapper>) : null;
    return (
        <FieldWrapper className="field-radio-image-wrapper">
            <div className="radio-group" role="radiogroup">
                <div>{fieldData.Label}</div>
                <InputBox onClick={openOptions}>{selectedLabel}</InputBox>
                {optionsGrid}
            </div>
        </FieldWrapper>
    )
};

export default FieldRadioGrid;