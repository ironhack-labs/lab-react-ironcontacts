import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  // state before return
  const [contactsState, setContactsState] = useState(contacts.slice(0, 5));
  console.log(contactsState);

  

  const handleAddRandom = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomPerson = contacts[randomIndex];
    console.log("added a random celebrity", randomPerson);
    setContactsState([randomPerson, ...contactsState]);
  };

  const handleSortByName = () => {
    const sortedContacts = [...contactsState].sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    );
    setContactsState(sortedContacts);
  };

  const handleSortByPopularity = () => {
    const sortedContacts = [...contactsState].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContactsState(sortedContacts);
  };

  const handleRemoveContact = (id) => {
    const filteredContacts = contactsState.filter((contact) => contact.id !== id);
    setContactsState(filteredContacts);
  };

  return (
    <div className="App">
      <h1 className="mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-gray-900">LAB | React IronContacts</h1>

      <button onClick={handleAddRandom} className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-white bg-gray-100 rounded-full bg-gradient-to-tl from-red-700 via-violet-500 to-violet-600  hover:bg-gray-700" role="alert">
        <span className="text-sm font-medium px-4 py-1.5">Add Random Contact</span> 
        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path></svg>
      </button>

      <button onClick={handleSortByName} className=" ml-10 inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-white bg-gray-100 rounded-full bg-gradient-to-tl from-red-700 via-violet-500 to-violet-600  hover:bg-gray-700" role="alert">
        <span className="text-sm font-medium px-4 py-1.5">Sort by Name</span> 
        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path></svg>
      </button>

      <button onClick={handleSortByPopularity} className=" ml-10 inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-white bg-gray-100 rounded-full bg-gradient-to-tl from-red-700 via-violet-500 to-violet-600  hover:bg-gray-700" role="alert">
        <span className="text-sm font-medium px-4 py-1.5">Sort by Popularity</span> 
        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path></svg>
      </button>

      <table className="">
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {contactsState.map((oneContact) => {
            return (
              <tr key={oneContact.id}>
                <td className="px-10">
                  <img src ={oneContact.pictureUrl} alt={oneContact.name} className="h-40"/>
                </td>
                {/* at this point, arnold showing up scared me */}
                <td className="px-10">
                  <p>{oneContact.name}</p>
                </td>
                <td className="px-10">
                  <p>{oneContact.popularity}</p>
                </td>
                <td className="px-10">
                  <div key={oneContact.id} className="card">
                   <p>Won an Oscar: {oneContact.wonOscar ? "🏆" : " "}</p>
                  </div>
                </td>
                <td className="px-10">
                  <div key={oneContact.id} className="card">
                   <p>Won an Emmy: {oneContact.wonEmmy ? "🌟" : " "}</p>
                  </div>
                </td>
                <td className="px-10">
                  <button onClick={() => handleRemoveContact(oneContact.id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
