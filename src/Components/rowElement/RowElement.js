import React from 'react';
import Button from "../button/Button"

const Row = ({ id, pictureUrl, name, popularity, onClickAction }) => {
    return (
        <tr>
            <td><img src={pictureUrl} alt={name} /></td>
            <td><p>{name}</p></td>
            <td><p>{popularity.toFixed(2)}</p></td>
            <td><Button onClickAction={onClickAction} title="Delete" className={`btn`} /></td>
        </tr>
    );
}

export default Row;
