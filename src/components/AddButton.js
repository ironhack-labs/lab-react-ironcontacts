import React from 'react';

function AddButton(props) {
    return (
        <div>
            <button onClick={props.handleClick} name="add-random-btn" id="add-random-btn">Add random contact</button>
        </div>
    )
}

export default AddButton;
