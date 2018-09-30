import React from 'react';

const Buttons = (props) => {
    return (
        <div>
            <button onClick={props.newCard}>New random user</button>
            {/* Preguntar a Thor por el hackeo */}
            <button onClick={() => {props.sortName('name')}}>Sort by name</button>
            <button onClick={() => {props.sortPopularity('popularity')}}>Most popular</button>
        </div>
    )
}

export default Buttons;