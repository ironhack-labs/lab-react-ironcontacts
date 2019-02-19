import React, { Component } from 'react';
import contacts from '../../contacts.json';

  const Button = ({ name, updateState, actors, isAdd, isName, isPop, isDelete, actorName }) => {
    const action = () => {
      if (isAdd) {
        const randomActors = contacts[Math.floor(Math.random() * (contacts.length - 1))];
        updateState(actors.concat(randomActors));
      }

      if (isName) {
        const sortNames = actors.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          return -1;
        })
        updateState(sortNames)
      }

      if (isPop) {
        const sortPop = actors.sort((a, b) => {
          if (a.popularity > b.popularity) {
            return 1;
          }
          return -1;
        })
        updateState(sortPop)
      }

      if (isDelete) {
        actors.forEach((element, idx) => {
          if (element.name === actorName) {
            actors.splice(idx, 1);
          }
        });
        updateState(actors);
      }
    }
    return (
      <button onClick={action}>{name}</button>
    )
  }

export default Button;
