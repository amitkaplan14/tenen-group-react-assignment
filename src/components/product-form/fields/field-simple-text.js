import React, {useEffect, useState} from 'react';
import {useEffectAfterInit} from "../../../utils/customHooks";
import {useSelector} from "react-redux";

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

    return (
        <div className="field=dorpdown-wrapper">

            <label>
                <div>
                    <span>{fieldData.Label}:</span>
                    <span>({fieldData.SubLabel})</span>
                </div>
                <input type="text" placeholder={fieldData.Placeholder} defaultValue={selectedValue} onBlur={handleOptionChange}/>
            </label>
        </div>
    )
};

export default FieldSimpleText;