import React from 'react';
import './person.css'

export default function newPerson(props){
    console.log(props, '??????')

    return(
        <tr>
            <th><img src={props.thePerson.pictureUrl} alt={props.thePerson.alt}/></th>
            <th>{props.thePerson.name}</th>
            <th>{props.thePerson.popularity}</th>
            <th><button onClick={props.deletePerson}> Delete</button></th>
        </tr>
    )
}