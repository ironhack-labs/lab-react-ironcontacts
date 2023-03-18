import React, { useEffect, useState } from 'react'
import './App.css';
import contactsList from "./contacts.json";

function App() {

  function wonOscar(contact) {
    if (contact.wonOscar) {
      return "🏆";
    } else {
      return "❌";
    }
  };

  function wonEmmy(contact) {
    if (contact.wonEmmy) {
      return "🏆";
    } else {
      return "❌";
    }
  };

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsList.slice(0, 5))
  }, [])

  const handleAddRandomContact = () => {
    const restContacts = contactsList.filter(contact => !contacts.includes(contact))
    const contact = restContacts[Math.floor(Math.random() * restContacts.length)]
    setContacts([contact, ...contacts]);
  }

  const handleSortbyName = () => {
    contacts.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name))
    setContacts([...contacts]);
  }

  return (
    <div className="App bg-gradient-to-bl from-blue-700 via-blue-800 to-gray-900 text-white overflow-x-hidden font-[Poppins]">
      <div className="w-screen flex items-center flex-col mb-10">
        <img src="../images/man_user.png" alt="User" className="w-1/6" />
        <h1 className="font-bold text-5xl w-1/5 border-8 rounded-full py-3 hover:bg-white hover:bg-opacity-10 hover:cursor-pointer">IronContacts</h1>
      </div>

      <div className="flex justify-center">
        <div className="w-1/2 flex justify-around">
          <button class="relative inline-flex items-center justify-center px-6 py-3 mb-8 overflow-hidden font-bold text-white rounded-md shadow-2xl group" onClick={handleAddRandomContact}>
            <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
            <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span class="relative">Add Random Contact</span>
          </button>
          <button class="relative inline-flex items-center justify-center px-6 py-3 mb-8 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
            <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
            <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span class="relative">Sort by Popularity</span>
          </button>
          <button class="relative inline-flex items-center justify-center px-6 py-3 mb-8 overflow-hidden font-bold text-white rounded-md shadow-2xl group" onClick={handleSortbyName}>
            <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
            <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span class="relative">Sort by Name</span>
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <table className="w-2/4 text-sm text-gray-500 text-center">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Picture
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Popularity
              </th>
              <th scope="col" className="px-6 py-3">
                Won Oscar
              </th>
              <th scope="col" className="px-6 py-3">
                Won Emmy
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) =>
              <tr key={contact.id} className="bg-gray-800 hover:bg-gray-600">
                <th scope="row" className="flex items-center justify-center px-6 py-4 text-gray-900 whitespace-nowrap">
                  <img className="w-20 h-30 rounded-lg" src={contact.pictureUrl} alt={`${contact.name}`} />
                </th>
                <td className="px-6 py-4 font-medium text-white text-xl">
                  {contact.name}
                </td>
                <td className="px-6 py-4 font-medium text-base">
                  {contact.popularity.toFixed(2)}
                </td>
                <td className="px-6 py-4 font-medium text-3xl">
                  {wonOscar(contact)}
                </td>
                <td className="px-6 py-4 font-medium text-3xl">
                  {wonEmmy(contact)}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
