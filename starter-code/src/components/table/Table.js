import React from 'react';
import Button from '../../components/button/Button';

const Table = ({ actors, updateState }) => { 
  const listActors = actors.map((actor) => {
    return (   
      <tr>
        <td><img width='100' src={actor.pictureUrl} alt =""/></td>
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