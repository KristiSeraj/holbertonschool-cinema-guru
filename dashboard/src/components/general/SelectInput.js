import React from 'react';
import './general.css';

const SelectInput = ({ label, options, className, value, setValue, Multiple }) => {
    const handleSelect = (event) => {
        setValue(event.target.value);
    }
    return (
        <>
            {label && <label>{label}</label>}
            <select className={className} onChange={handleSelect} multiple={Multiple}>
                {options.map((option, index) => <option key={index} value={value}>{option}</option>)}
            </select>
        </>
    )
}


export default SelectInput;