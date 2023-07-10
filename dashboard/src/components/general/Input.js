import React from 'react';
import './general.css';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
    const handleInput = (event) => {
        setValue(event.target.value);
    }
    return (
        <>
            <label>{icon}{label}</label>
            <input type={type}
                    value={value}
                    className={className}
                    {...inputAttributes}
                    onChange={handleInput}
            ></input>
        </>
    )
}


export default Input;