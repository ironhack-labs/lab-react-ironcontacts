import React from 'react';
import contacts from './contacts.json';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state =  {celebs : this.filterUniques(contacts)};
  }

  filterUniques(celebs){
    let names = [];
    let resultMap = [];
    celebs.map((celeb, idx, arr)=>{
        if(names.indexOf(celeb.name) === -1){
          celeb.popularity = this.round(celeb.popularity, 2);
          resultMap.push(celeb);
          names.push(celeb.name)
        }
    })
    return resultMap;
  }

  round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  render() {
    const mappedCelebs =
      this.state.celebs.slice(0,5).map(celeb => {
        return (
          <React.Fragment key={celeb._id}>
            <Contact {...celeb} />
          </React.Fragment>
        )
      })



    return (
      <React.Fragment>
        <div className="ContactHead">
          <p>IronContacts</p>
          <div className="HeadButtons">
            <div id="leftButton"><button>Add Random Contact</button></div>
            <div id="centerButton"><button>Sort By Name</button></div>
            <div id="rightButton"><button>Sort By Popularity</button></div>
          </div>
          <div className="HeadDetail">
            <div id="leftHead"><p>Picture</p></div>
            <div id="centerHead"><p>Name</p></div>
            <div id="rightHead"><p>Popularity</p></div>
            <div id="actionHead"><p>Action</p></div>
          </div>
        </div>

        {mappedCelebs}
      </React.Fragment>
    );
  }
}

export default App;
