import React from 'react';
import "./Button.css"

const Button = ({onClickAction, title, className}) => {
    return (
        <button className={className} onClick={onClickAction}>{title}</button>
    );
}

export default Button;
