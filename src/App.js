import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/Contact';
import { MainDiv } from './components/styles';

function App() {
  let [contactArr, setContactsArr] = useState(contacts.slice(5));
  let [contactShowed, setContactShowed] = useState(contacts.slice(0, 5));

  const HandleAddContact = () => {
    const randomIndex = ~~(Math.random() * contactArr.length);
    setContactShowed(
      (contactShowed = [...contactShowed, contactArr[randomIndex]])
    );
    setContactsArr(
      (contactArr = [...contactArr.filter((e, i) => i !== randomIndex)])
    );
  };

  const HandleSortName = () => {
    setContactShowed(
      (contactShowed = [
        ...contactShowed.sort((a, b) => a.name.localeCompare(b.name)),
      ])
    );
  };
  const HandleSortPopularity = () => {
    setContactShowed(
      (contactShowed = [
        ...contactShowed.sort((a, b) => b.popularity - a.popularity),
      ])
    );
  };

  const HandleDeleteContact = (id) => {
    setContactsArr(
      (contactArr = [
        ...contactArr,
        ...contactShowed.filter((e) => e.id === id),
      ])
    );

    setContactShowed(
      (contactShowed = [...contactShowed.filter((e) => e.id !== id)])
    );
  };

  return (
    <MainDiv>
      <h1>IronContacts</h1>
      <div>
        <div id="buttons-group">
          <button onClick={() => HandleAddContact()}>Add Random Contact</button>
          <button onClick={() => HandleSortName()}>Sort by Name</button>
          <button onClick={() => HandleSortPopularity()}>
            Sort by Popularity
          </button>
        </div>
        <h2>
          <b>Picture</b>
          <b>Name</b>
          <b>Popularity</b>
          <b>Action</b>
        </h2>
      </div>
      {contactShowed.map((e) => (
        <Contact key={e.id} {...e} HandleDeleteContact={HandleDeleteContact} />
      ))}
    </MainDiv>
  );
}

export default App;
