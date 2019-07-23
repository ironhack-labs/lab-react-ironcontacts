import React from 'react';

function MainButton(props) {
    return(
        <div className="col s3">
            <button className="btn" onClick={props.onClick}>{props.text}</button>
        </div>
    )
}

export default MainButton;