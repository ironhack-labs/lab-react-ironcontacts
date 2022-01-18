import { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  const initialArr = contacts.slice(0, 5);
  const [contactList, setContactList] = useState(initialArr);

  const actorsToInclude = [0, 1, 2, 3, 4];

  const addRandomActor = () => {
    let randomNum = 0;
    while (actorsToInclude.includes(randomNum)) {
      randomNum = Math.floor(Math.random() * 45);
    }
    actorsToInclude.push(randomNum);
    console.log('randomActorArr', randomNum);
    setContactList((contactList) => [...contactList, contacts[randomNum]]);
  };

  const sortByName = () => {
    const newList = [...contactList];
    newList.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setContactList(newList);
  };

  const sortByPopularity = () => {
    const newList = [...contactList];
    newList.sort((a, b) => {
      if (a.popularity < b.popularity) return -1;
      if (a.popularity > b.popularity) return 1;
      return 0;
    });
    setContactList(newList);
  };

  // const sortByPopularity = () => {
  //   setContactList((contactList) =>
  //     contactList.sort((a, b) => {
  //       if (a.popularity < b.popularity) return -1;
  //       if (a.popularity > b.popularity) return 1;
  //       return 0;
  //     })
  //   );
  // };

  const removeActor = (id) => {
    setContactList((contactList) => contactList.filter((el) => el.id !== id));
  };

  const createNewElement = (el) => {
    return (
      <tr key={el.id}>
        <td>
          <img src={el.pictureUrl} alt={el.name} className="profilePic" />
        </td>
        <td>{el.name}</td>
        <td>{el.popularity}</td>
        <td>
          <button onClick={() => removeActor(el.id)}>Delete</button>
        </td>
      </tr>
    );
  };

  const contactListArr = contactList.map((el, i) => {
    return createNewElement(el);
  });

  return (
    <>
      <h1>IronContacts</h1>
      <button onClick={addRandomActor}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
        </thead>
        <tbody>{contactListArr}</tbody>
      </table>
    </>
  );
}

export default App;
