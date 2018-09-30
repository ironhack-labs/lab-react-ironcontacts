import React from 'react';

const Contacts = (props) => {
    return (
        <div>
            <img src={props.pictureUrl} />
            <span>{props.name}</span>
            <span>{props.popularity}</span>
            {/* Props.id ya que react no usar la key --IMPORTANTE */}
            <button onClick={() => {props.deleteUsr(props.id)}}>DELETE</button>
        </div>
    )
}

export default Contacts;