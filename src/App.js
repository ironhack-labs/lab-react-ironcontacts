import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
 
class App extends Component {

  state = {
    contacts: contacts.slice(0,5)
  }

  addRandomContact () {
    console.log(`tada`)
    
    const randomContact = this.state.contacts;

    let randomNumber = Math.floor(Math.random() * contacts.length)
    randomContact.push(contacts[randomNumber])

    this.setState (
        {contacts:randomContact}
      );
  }

  sortByName () {
    console.log(`name!`)
    const sortByName = this.state.contacts;

    sortByName.sort( (a,b) => {
      if (a.name < b.name) {return -1}
      if (a.name < b.name) {return -1}
      return 0
    })

    this.setState (
      {contacts:sortByName}
    );
  }

  sortByPopularity () {
    console.log(`popularity!`)
    const sortByPopularity = this.state.contacts;

    sortByPopularity.sort( (a,b) => {
      if (a.popularity > b.popularity) {return -1}
      if (a.popularity < b.popularity) {return -1}
      // return 0
    })

    this.setState (
      {contacts:sortByPopularity}
    );
  }
  
  render() {
    // const { contacts } = this.state.contacts;

    const shortList = 
      this.state.contacts.map(contact =>
        (<tbody key = {contact.id} > 
         
          <tr>
            <td class="headshot">
              <img src={contact.pictureUrl} alt="actor"/>
            </td>
            <td>
              {contact.name} 
            </td>
            <td>
             {contact.popularity}
            </td>
            <td>
              <button>TBD</button>
            </td>
          </tr>
         
          </tbody>
        )
      )

    return (
      <div class='App'>

        <h1>IronContacts</h1>
        <p class="buttons">
          <button onClick = { () => this.addRandomContact() } >
            Add a Random Contact
          </button>
          <div class="buttonsSort">
            Sort By: 
            <button onClick = { () => this.sortByName() } >
              Name
            </button>
  
            <button onClick = { () => this.sortByPopularity() } >
              Popularity
            </button>
          </div>


        </p>
          <table>

              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Action</th>
                </tr>
              </thead>

                {shortList}

            </table>
    
      </div>
    )
  }
}

export default App;


//first created the shortList, but picture didn't display
//so then I used the list and key format from the lecture and got everything to display, but not as a table
//I then applied the same logic as the list to the table, which worked great
//Turns out, there was a typo with the pictureURL which is why it didn't display
//now the issue is that the table is ignoring the center align

//failed code
  // roundedPopularity (pop) => {
  //   Math.floor(pop)
  // }

  // popular = roundedPopularity {contact.popularity}


// {  
//   contacts.map(contact => {
//       return (
//         <Card 
//           key = {contact.id} 
//           name ={contact.name} 
//           pictureUrl = {contact.pictureUrl} 
//           popularity = {contact.popularity} 
//           clickToDelete= { () => this.deleteCard(contact.id)}
//         />
//       )
//     })
// }

          
// {/* <tbody>
//   <tr>
//     <th class="headshot">{actorPicture}</th>
//     <th>{actorName}</th>
//     <th>{actorPopularity}</th>
//     <th>None</th>
//   </tr>
// </tbody>
// */}

    // const actorPicture = 
    //   this.state.contacts.map(contact =>
    //     (<li key = {contact.id} >
    //       <img src={contact.pictureUrl} alt="actor"
    //       />
    //       </li> )
    //   )

    // const actorName = 
    // this.state.contacts.map(contact =>
    //   (<li key = {contact.id} > 
    //     {contact.name}
    //     </li> )
    // )

    // const actorPopularity = 
    // this.state.contacts.map(contact =>
    //   (<li key = {contact.id} > 
    //     {contact.popularity}
    //     </li> )
    // )
