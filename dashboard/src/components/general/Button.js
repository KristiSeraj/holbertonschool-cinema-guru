import React from 'react';
import './general.css';

const Button = ({ text, className, onClick, icon }) => {
    return (
        <>
            <button className={className} onClick={onClick}>{icon}{text}</button>
        </>
    )

}

export default Button;