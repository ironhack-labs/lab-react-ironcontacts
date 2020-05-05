import React, { Component } from 'react'
import './style.css'

const IdCard = (props) => (
  <div className="IdCard">
    <img src={props.pictureUrl} alt="" />

    <p>{props.name}</p>
    <p> {props.popularity}</p>
  </div>
)

export default IdCard
