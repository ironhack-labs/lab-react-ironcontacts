import React from 'react';
import Button from './Button.js';

const Table = ({ actors, updateState }) => {
    const listActors = actors.map(actor => {
        return (
            <tr>
                <td><img src={actor.pictureUrl} width="100px"/></td>
                <td>{actor.name}</td>
                <td>{actor.popularity}</td>
                <td>
                    <Button actorName={actor.name} actors={actors} updateState={updateState} isDel name="Delete" />
                </td>
            </tr>
        )
    })

    return listActors;
  }
  
  export default Table;
