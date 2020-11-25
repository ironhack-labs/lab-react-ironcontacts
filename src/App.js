import React, {useState} from 'react';
import './App.css';
import Contacts from './contacts.json';
import styled from 'styled-components';
// import showContacts from './components/showContacts'

let arrContacts = [...Contacts]
let lengthContacts = arrContacts.length

function App() {
    let [ show, setShow ] = useState(Contacts.slice(0,5))
  //   const randomContact = () => {
  //    let randomContactPos = Math.floor(Math.random()*(lengthContacts-5)+5)
  //    arrContacts.push(arrContacts[randomContactPos])
  //    setShow(show=arrContacts)
  //  }

   const ContactStyled = styled.article`
  width: 500px;
  height: auto;
  img {
    width: 100px;
    height: auto;
  }
`;
  
 const showContacts = ({ name, pictureUrl, popularity}) => {
  return (
   <ContactStyled>
    <img src={pictureUrl} alt="picture" />
    <h2>{name}</h2>
    <b>{popularity}</b>
    </ContactStyled>
      );
}


  return (
    <div className="App">
     
      {/* <button onClick={randomContact}>Add Random Contact</button> */}
      {showContacts}
      {show.map(contact=> <showContacts 
         key={contact.id}
           {...contact}
          />
        )}
    </div>
  );
}

export default App;
