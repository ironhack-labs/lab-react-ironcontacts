import React from "react";
import "../App.css";
import Title from '../components/Title';

const HeaderContainer = (props) => {
  const { random, sortByName, sortByPopularity } = props;
  return (
    <header>
      <Title>IronContacts</Title>
      <div className='buttons'>
        <button onClick={() => random()} className="random">Random</button>
        <button onClick={() => sortByName()} className="name">Sort by Name</button>
        <button onClick={() => sortByPopularity()} className="popularity">Sort by Popularity</button>
      </div>
    </header>
  )
}

export default HeaderContainer;