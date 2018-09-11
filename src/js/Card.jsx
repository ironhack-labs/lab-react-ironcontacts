import React, { Component } from 'react'

const Card = props => {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h3>{props.heading}</h3>
            <p>{props.caption}</p>
            </div>
    )
}

export default Card
