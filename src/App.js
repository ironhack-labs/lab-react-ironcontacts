
import React from "react";
import './App.css';
import contacts from "./contacts.json";

const firstFiveContacts = contacts.slice(0,5);



class App extends React.Component{





  state = {
    firstFiveContacts
  }

  render(){
    console.log(firstFiveContacts)
    return(
      
      <table>
      

      <h2>IronContacts</h2>
        
      <tr>
        <th>picture</th>
        <th>name</th>
        <th>popularity</th>
      </tr>
      
        {this.state.firstFiveContacts.map((contact)=>{
          return (
            
            <tr key={contact.id}>
              

              <img style={{width: "50px", height: "70px"}} src={contact.pictureUrl} alt="" />
              

              <th>{contact.name}</th>
              <th>{contact.popularity}</th>
            </tr>
            
          
          )
          
        })}
      
      
    </table>
  )}

  
}

export default App;
