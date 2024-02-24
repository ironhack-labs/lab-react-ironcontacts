import "./App.css";
import { useState } from "react"
import contactsData from "./contacts.json";

function App() {
  const [unselectedContacts, setUnselectedContacts] = useState([...contactsData]);
  const [filteredList, setFilteredList] = useState([]);
  // const [contacts, setContacts] = useState([contactsData[0], contactsData[1], contactsData[2], contactsData[3], contactsData[4]]);

  const getRandomContact = () => {
    let randomNum = Math.floor(Math.random() * unselectedContacts.length)
    console.log({randomNum, unselectedContacts});
    const result = unselectedContacts[randomNum];

    // const updatedContacts = unselectedContacts.splice(randomNum, 1)
    const updatedContacts = unselectedContacts.filter((contact, i) => i !== randomNum);

    setFilteredList(prevState => [...prevState, result]);
    console.log({updatedContacts, result, filteredList});
    
    // setTimeout(() => {
        setUnselectedContacts(updatedContacts);
      // }, 0);
  }

  const addFiveRandom = () => {
    // let result = [];
    // let updatedContacts = ;
    // let removeIds = [];
    
    // for(let i = 0; i < 5; i++) {
    //   let randomNum = Math.floor(Math.random() * unselectedContacts.length)
    //   let selection = unselectedContacts[randomNum];
      
    //   console.log({selection, id: selection.id})
    //   result.push(selection)
    //   removeIds.push(selection.id);
    // }

    // updatedContacts = unselectedContacts.filter(contact => !removeIds.includes(contact.id));
    

    setFilteredList(prevState => [...prevState, ...unselectedContacts.splice(0, 5)]);
    
    // setTimeout(() => {
        setUnselectedContacts(unselectedContacts.slice(4));
      // }, 1);

  }

  // const addRandomContacts = ()=> {
  //   const randContact =  getRandomContact()
  //   let doesExist = false;

  //   // contacts.forEach((cont) =>{
  //   //   if(randContact.id === cont.id){
  //   //     doesExist = true;
  //   //   }
  //   // })

  //   filteredList.filter((contact) => )

  //   if(!doesExist){
  //     setContacts ((prevState) => [...prevState, randContact])
  //   }
  // }

  const sortByPopularity = ()=> {
    const sortedArray = [...filteredList].sort((a,b) => b.popularity - a.popularity);
    setFilteredList(sortedArray);
  }

  const sortByName = ()=> {
    const sortedArrayBy = [...filteredList].sort((a,b) =>{
      if(a.name > b.name){
        return 1;
      }
      else if (a.name < b.name){
        return -1;
      }
    });

    setFilteredList(sortedArrayBy);
  }

  const deleteContact = (contact) => {
    const updatedArray = filteredList.filter ((con) => con.id !== contact.id);

    setFilteredList(updatedArray);
    setUnselectedContacts((prevState) => [...prevState, contact]);
  }

  // After Completion Optimization

  // const [filteredList, setFilteredList] = useState(contactsData);

  const displayContent = () => {
    // if(filteredList.length === 0) {
    //   addFiveRandom();
    // }
    console.log({filteredList})
    return filteredList.map((contact) => {
      return(
          <tr className="contact" key={contact.id}>
            <td><img src={contact?.pictureUrl || ''}/></td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td className="award-td">{contact.wonOscar ? "🏆" : " "}</td>
            <td className="award-td">{contact.wonEmmy ? "🌟" : " "}</td>
            <td><button className="button" onClick={() => deleteContact(contact)}>Delete</button></td>
          </tr>
      )
    })
  }

  // =============================

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button className="button" onClick={getRandomContact}>Add Random Contact</button>
      <button className="button" onClick={sortByName}>Sort by Name</button>
      <button className="button" onClick={sortByPopularity}>Sort by Popularity</button>


      <table className="contacts">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        
        <tbody>
          {/* {contacts.map((contact) => {
            return(
                <tr className="contact" key={contact.id}>
                  <td><img src={contact.pictureUrl}/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td className="award-td">{contact.wonOscar ? "🏆" : " "}</td>
                  <td className="award-td">{contact.wonEmmy ? "🌟" : " "}</td>
                  <td><button className="button" onClick={() => deleteContact(contact.id)}>Delete</button></td>
                </tr>
            )
          })} */}
          {filteredList.length > 0 ? displayContent() : addFiveRandom()}
        </tbody>

      </table>
    </div>
  );
}

export default App;
