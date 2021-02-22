import React from 'react'
import './App.css';
import contacts from "./contacts.json";

let firstFive = contacts.filter((contact ,index)=>index<5);
let allOthers = contacts.filter((contact, index)=> index>=5)


class RandomContact extends React.Component {
  state = {
    firstFive,
    allOthers
  }

///////////////ADD CONTACT/////////////
 addRandomContact = (randomContact) => {
    const firstFiveCopy = [...this.state.firstFive];
    firstFiveCopy.push(randomContact);

    this.setState({
      firstFive: firstFiveCopy
    });
  };

  ///////////////DELETE CONTACT/////////////
deleteContact = (i) => {
  const firstFiveCopy = [...this.state.firstFive];
  firstFiveCopy.splice(i,1);

  this.setState({
    firstFive: firstFiveCopy
  });
};

  ///////////////SORT BY NAME/////////////
  sortByName = () => {
    const firstFiveCopy = [...this.state.firstFive];
    firstFiveCopy.sort((a,b)=> a.name.localeCompare(b.name));

    this.setState({
      firstFive: firstFiveCopy
    });
  };



/////////////// SORT BY POPULARITY/////////////
sortByPopularity = () => {
  const firstFiveCopy = [...this.state.firstFive];
  firstFiveCopy.sort((a,b)=>b.popularity-a.popularity);
 

  this.setState({
    firstFive: firstFiveCopy
  });
};




render(){
  const { firstFive } = this.state;

  const row = firstFive.map((contact, index) => {
return(

      <tr key={contact.id}>

        <td>
         <img src={contact.pictureUrl} width="50vw"/>
        </td>

        <td>
         {contact.name}
        </td>

        <td>
         {contact.popularity.toFixed(2)}
        </td>

        <td>
        <button className='gradient-button gradient-button-2' onClick={() => this.deleteContact(index)}>Delete</button>
        </td>

       </tr>
      );
  });

  return (
   <>

<div className='deleteButton'>
      <button onClick={() => this.addRandomContact(this.state.allOthers[Math.floor(Math.random()*this.state.allOthers.length)])}>
        Add random contact
      </button>
      <button onClick={() => this.sortByName()}>
        Sort by name
      </button>
      <button  onClick={() => this.sortByPopularity()}>
      Sort by popularity
      </button>
</div>

   <table>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
    </thead>
    <tbody>
        {row}
    </tbody>
    </table>
   </>
  );
}

}




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <h1>IronContacts</h1>

         <RandomContact/>
      
        <div>
        

        </div>
      </div>
        
      </header>
    </div>
  );
}

export default App;
