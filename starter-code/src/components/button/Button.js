import React from 'react';
import contacts from '../../contacts.json'

const Button = ({ name, updateState, isAdd, isName, isPop, isDel, actors, actorName }) => {
  const action = () => {
    if (isAdd) {
      const randomActor = contacts.splice(Math.floor(Math.random() * contacts.length), 1);
      const newActors = actors.concat(randomActor);
      updateState(newActors);
    }

    if (isName) {
      const sortedActors = actors.sort((a, b) => {
        if (a.name > b.name) {
          return 1
        }
        return -1
      })
      updateState(sortedActors);
    }

    if (isPop) {
      const sortedActors = actors.sort((a, b) => {
        if (a.popularity < b.popularity) {
          return 1
        }
        return -1
      })
      updateState(sortedActors);
    }

    if (isDel) {
      actors.forEach((value, index) => {
        if (value.name === actorName) {
          contacts.push(actors.splice(index, 1))
        }
      })
      updateState(actors);
    }
  }
  return (
    <button className="btn btn-info mx-5 my-5" onClick={action}>{name}</button>
  );
}
export default Button;
