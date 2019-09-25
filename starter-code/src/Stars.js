import React, { Component } from 'react';

const Stars = (props) => {

    const Stars = props.data.map(el => {
    return (
    <tr>
    <td> <img height = "100px" src = {el.pictureUrl}/> </td>
    <td>{el.name}</td>
    <td>{el.popularity}</td>
    </tr>
    )

    })
}
