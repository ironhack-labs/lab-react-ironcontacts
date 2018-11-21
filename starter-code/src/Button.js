import React from 'react';

const Button = ({handleClick, sortByName, sortByPopularity}) => (
    <div className="button-container">
        <button className="button-large green" onClick={()=>handleClick()}>Add random contact</button>
        <button className="button-large blue" onClick={()=>sortByName()}>Sort by name</button>
        <button className="button-large blue" onClick={()=>sortByPopularity()}>Sort by popularity</button>
    </div>

)


export default Button;