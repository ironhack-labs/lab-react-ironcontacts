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
    const restContacts = contactsList.filter(contact => !contacts.includes(contact));
    const contact = restContacts[Math.floor(Math.random() * restContacts.length)];
    setContacts([contact, ...contacts]);
  }

  const handleSortbyName = () => {
    contacts.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name));
    setContacts([...contacts]);
  }

  const handleSortbyPopularity = () => {
    contacts.sort((contact1, contact2) => contact2.popularity - contact1.popularity);
    setContacts([...contacts]);
  }

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  }

  return (
    <div className="App bg-gradient-to-bl from-blue-700 via-blue-800 to-gray-900 text-white overflow-x-hidden font-[Poppins]">
      <div className="w-screen flex items-center flex-col mb-10">
        <img src="../images/man_user.png" alt="User" className="w-1/6" />
        <h1 className="font-bold text-5xl w-1/5 border-8 rounded-full py-3 hover:bg-white hover:bg-opacity-10 hover:cursor-pointer">IronContacts</h1>
      </div>

      <div className="flex justify-center">
        <div className="w-1/2 flex justify-around">
          <button className="relative inline-flex items-center justify-center px-6 py-3 mb-8 overflow-hidden font-bold text-white rounded-md shadow-2xl group" onClick={handleAddRandomContact}>
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span className="relative">Add Random Contact</span>
          </button>
          <button className="relative inline-flex items-center justify-center px-6 py-3 mb-8 overflow-hidden font-bold text-white rounded-md shadow-2xl group" onClick={handleSortbyPopularity}>
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span className="relative">Sort by Popularity</span>
          </button>
          <button className="relative inline-flex items-center justify-center px-6 py-3 mb-8 overflow-hidden font-bold text-white rounded-md shadow-2xl group" onClick={handleSortbyName}>
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span className="relative">Sort by Name</span>
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
              <th scope="col" className="px-6 py-3">
                Actions
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
                <td className="px-6 py-4 font-light">
                  <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group" onClick={() => handleDeleteContact(contact.id)} >
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-xl group-hover:mb-11 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Delete</span>
                  </button>
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
