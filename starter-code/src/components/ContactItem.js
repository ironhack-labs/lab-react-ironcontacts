import React, { Component } from 'react';

const FilmItem = (props) => {

  return (
      <tr>
        <td><img src={props.pictureUrl} className="rounded mx-auto" alt={props.name} style={{height: 60}}></img></td>
        <td className="align-middle">{props.name}</td>
        <td className="align-middle">{props.popularity.toFixed(2)}</td>
        <td className="align-middle"><button className="btn btn-danger" onClick={props.onClickDelete}>-</button></td>
      </tr>
  )
}

export default FilmItem
