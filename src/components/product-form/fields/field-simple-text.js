import React, {useEffect, useState} from 'react';
import {useEffectAfterInit} from "../../../utils/customHooks";

const FieldSimpleText = ({fieldData, onChange}) => {
    const [selectedValue, setSelectedValue] = useState();

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
                <input type="text" placeholder={fieldData.Placeholder} onBlur={handleOptionChange}/>
            </label>
        </div>
    )
};

export default FieldSimpleText;