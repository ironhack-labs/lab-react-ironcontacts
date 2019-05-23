import React from 'react';
import './flexContainer.css';

const FlexContainer = (props) => {
    return (
        <div className="flex-container">
            {props.children}
        </div>
    )
};

export default FlexContainer;