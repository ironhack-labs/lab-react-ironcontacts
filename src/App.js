import './App.css';
import contacts from "./contacts.json";
import React from 'react';


const displayedContacts = contacts.filter((contact, index)=>{
  if(index <5){
    return contact;
  }
});

const restContacts = contacts.map(contact => contact);

restContacts.splice(0,5);


const DisplayContacts = () =>{
      
    const renderContacts = displayedContacts.map( contact => {
     return (
       <tr key = {contact.id}>
        <td> 
          <img src ={contact.pictureUrl}/> 
          </td>
        <td> {contact.name} </td>
        <td> {contact.popularity}  </td>
      </tr>
    )
    })

    return renderContacts;

}
  

const AddRandom = (numContacts, setContatcs) => {   

  setContatcs(numContacts+1);
  
  if(restContacts.length){
    let randomPos = Math.floor(Math.random()*restContacts.length);
    displayedContacts.push(restContacts[randomPos]);
    restContacts.splice(randomPos,1);   
    
  }   

}  

const sortbyName = (sortedName, setSortName) => {   

  if(!sortedName){

    displayedContacts.sort((a, b) => (a.name > b.name)? -1 : 0);
     
   
  }else{
    
    displayedContacts.sort((a, b) =>(a.name < b.name) ? -1 : 0);
     
  }
  
  
  console.log(displayedContacts)

  setSortName(!sortedName);   

}   

const sortByPop = (sortedPop, setSortPop) => {   
  

  if(!sortedPop){
    displayedContacts.sort((a, b) => a.popularity-b.popularity);
  }else{
    displayedContacts.sort((a, b) => b.popularity-a.popularity);
  }

  setSortPop(!sortedPop);   

}   
  
  
function App() {

  const [numContacts, setContatcs] = React.useState(displayedContacts.length);

  const [sortedName, setSortName] = React.useState(false);

  const [sortedPop, setSortPop] = React.useState(false);

  return (
    <div className='App'>
      <h1> IronContacts </h1>
      <button onClick = {() => AddRandom(numContacts, setContatcs)}>  Random Contacts </button>
      <button onClick = {() => sortbyName(sortedName, setSortName)}> Sort by Name </button>
      <button onClick = {() => sortByPop(sortedPop, setSortPop)}> Sort by Popularity </button>
        <table>
            <thead>
              <tr> 
                <th> Pircture </th>
                <th> Name </th>
                <th> Popularity </th>
              </tr>
            </thead>
            <tbody>
              {/* <Table headers = { ['Picture', 'Name', 'Popularity']} data = {} /> */}
              
              <DisplayContacts/>
              
            </tbody>
        </table>

    </div>
  );
}

export default App;
