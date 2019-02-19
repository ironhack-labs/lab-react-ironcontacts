import React, { Component } from 'react';
import contacts from '../../../src/contacts.json';

const Button = ({actors, actorName, name, isAdd, isName, isPop, isDel, updateState}) => {
  const action = () => {
    if (isAdd) {
      const randomActor = contacts.splice(Math.floor(Math.random() * contacts.length), 1);
      const newActors = actors.push(randomActor);
      updateState(newActors);
    } else if (isName) {
      const sortedActors = actors.sort((a, b) => {
        if (a.name[0] > b.name[0]) {
          return 1;
        } return -1;
      });
      updateState(sortedActors);
    } else if (isPop) {
      const sortedActors = actors.sort((a, b) => {
        if (a.popularity < b.popularity) {
          return 1;
        } return -1;
      });
      updateState(sortedActors);
    } else if (isDel) {
      actors.forEach((item, index) => {
        if (item.name === actorName) {
          contacts.push(actors.splice(index, 1));
        }
      });
      updateState(actors);
    }
  } 
  return (
    <button onClick={action}> {name} </button>
  )
}

export default Button;
