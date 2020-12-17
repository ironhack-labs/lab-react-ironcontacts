import React from 'react';

function DeleteButton (props) {
    return (
        <div>
            <button onClick={props.handleClick} name="delete-btn" id="delete-btn">Delete contact</button>
        </div>
    )
}

export default DeleteButton;