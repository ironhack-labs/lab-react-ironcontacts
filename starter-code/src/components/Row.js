import React, { Component } from 'react';

export const Row = (props) => {
    return (
        <tr>
            <td> <img src={props.picture} width="10%" height="10%" ></img></td>
            <td>{props.name}</td>
            <td> {props.popularity}</td>

        </tr>
    )
};

export default Row