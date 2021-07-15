import './App.css';
import React from "react";
import contacts from "./contacts.json";


//Making this a class component so we can have a state
//Gettign the first 5 contacts with .

//Think of the movies, do a .map and list every single contacts

class App extends React.Component {
  state = {
    contacts: contacts.splice(0, 5),
    // name: "",
    // pictureUrl: "",
    // popularity: "",
    // id: "",
  };

  getRandomCeleb = () => {
  const randomCeleb = [Math.floor(Math.random()*contacts.length)];
  const choosenCeleb = contacts[randomCeleb];
  this.setState((previousState) => {
      return {
        contacts: previousState.contacts.concat(choosenCeleb),
      };
    });
  };

  //Same technique as above
  // 📍 We say this.setState((previousState) which is always like this with react.js b/c we want to get the last updated state...
  //...and add to that. Necessary for this use case, because we are dealign with a list we can add and delete from 
  sortCelebsAlpha = () => {
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.sort((a, b) => (a.name > b.name) ? 1 : -1)
      };
    });
  }

  sortCelebsNum = () => {
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.sort((max, min) => (min.popularity > max.popularity) ? 1 : -1)
      };
    });
  }
  
  deleteCeleb = (id) => {
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.filter(contact => contact.id !== id),
      };
    });
  }

  render() {
    const { contacts } = this.state;
    return(
        <div>
            <h2>Ironcontacts</h2>
            <h4>Image, name, popularity</h4>
            <button onClick={this.getRandomCeleb}>Add Celeb</button>
            <button onClick={this.sortCelebsAlpha}>Sort Celebs by name</button>
            <button onClick={this.sortCelebsNum}>Sort Celebs by popularity</button>
            <ul>
                {contacts.map((contact, index) => {
                    return (
                      <div>
                        <ul className="celeb-row">
                          <img className="celeb-img" key={index} src={contact.pictureUrl} alt="placeholder" />
                          
                          <ul className="celeb-name" key={index}>{contact.name}</ul>
                          
                          <li className="celeb-name" key={index}>{contact.popularity}</li>

                          <button onClick={() => this.deleteCeleb(contact.id)}>Remove celeb</button>
                      </ul>
                    </div>
                    );
                })}
            </ul>
        </div>
    )};
};

export default App;
