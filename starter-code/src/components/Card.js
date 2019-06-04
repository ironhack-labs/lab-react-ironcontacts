import React from 'react';
import contacts from '../contacts.json'

const Card = (props) => {
  return (
    <li className="actorLi">
      <ul className="innerUl">
        <li><img src={props.actorImg}></img></li>
        <li><p>{props.actorName}</p></li>
        <li><p>{props.actorPopularity}</p></li>
        <li><button onClick={props.removeActor}>Delete me!</button></li>
      </ul>
    </li>
  )
}

export default Card