import "./App.css";
import contactsAll from "./contacts.json";
import { useState } from "react";
import bin from "./assets/bin.svg";
import arrowRandom from "./assets/arrowRandom.svg";
import arrowUp from "./assets/arrowUp.svg";
import arrowDown from "./assets/arrowDown.svg";

function App() {
  const contacts5 = contactsAll.slice(0, 5);
  const [contacts, setContacts] = useState(contacts5);
  const [sortOrderName, setSortOrderName] = useState("asc");
  const [sortOrderPopularity, setSortOrderPopularity] = useState("random");

  function addRandomContact() {
    //Get remaining contacts
    const remainingContacts = contactsAll.filter(
      (contact) => !contacts.find((c) => c.id === contact.id)
    );
    // Randomly pick one
    const randomlyPicked =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    // Update setContacts([...contacts, randomlyPicked])
    setContacts((prevContacts) => [...prevContacts, randomlyPicked]);
    setSortOrderName("random")
    setSortOrderPopularity("random");
  }

  function sortByNames() {
    //Get the contacts shown at the moment
    const currentContacts = [...contacts];

    //Sort the contacts by names alphabetically
    if (sortOrderName === "shuffle") {
      const contactsSortedByName = currentContacts.sort(() => Math.random() - 0.5);
      setSortOrderName("asc");
      setSortOrderPopularity("random")
      setContacts(contactsSortedByName)
      
    } else if (sortOrderName === "asc" || sortOrderName === "random") {
      const contactsSortedByName = currentContacts.sort((a, b) => a.name.localeCompare(b.name));
      setSortOrderName("desc");
      setSortOrderPopularity("random")
      setContacts(contactsSortedByName)

    } else if (sortOrderName === "desc") {
      const contactsSortedByName = currentContacts.sort((a, b) => b.name.localeCompare(a.name));
      setSortOrderName("shuffle");
      setSortOrderPopularity("random")
      setContacts(contactsSortedByName)
    }
  }

  function sortByPopularity() {
    //Get the contacts shown at the moment
    //Sort the contacts by popularity by its numerical value
    if (sortOrderPopularity === "shuffle") {
      const contactsSortedByPopularity = contacts.sort(() => Math.floor() - 0.5)
      setSortOrderPopularity("asc")
      setSortOrderName("random")
      //Set new State by setContacts() => conditionally render the filter button/ dropwdown
      setContacts(contactsSortedByPopularity)

    } else if (sortOrderPopularity === "asc" || sortOrderPopularity === "random") {
      const contactsSortedByPopularity = contacts.sort((a,b) => (a.popularity-b.popularity))
      setSortOrderPopularity("desc")
      setSortOrderName("random")
      //Set new State by setContacts() => conditionally render the filter button/ dropwdown
      setContacts(contactsSortedByPopularity)

    } else if (sortOrderPopularity === "desc") {
      const contactsSortedByPopularity = contacts.sort((a,b) => b.popularity- a.popularity)
      setSortOrderPopularity("shuffle")
      setSortOrderName("random")
      //Set new State by setContacts() => conditionally render the filter button/ dropwdown
      setContacts(contactsSortedByPopularity)
    }
  }

  function deleteCelebrety(contactIdToDelete) {
    //Get the contacts shown at the moment
    //Remove contact which delete button is pressed by filtering it out via its id
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactIdToDelete
    );
    //Set new state by setContacts() with new variable contacts
    setContacts(updatedContacts);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button id="btn-addrandom" onClick={() => addRandomContact()}>
        {" "}
        Add random contact{" "}
      </button>
      <table>
        <thead>
          <tr>
            <th className="PictureCol">Picture</th>
            <th className="NameCol-header">
              Name
              <button className="btn-sort-name" onClick={() => sortByNames()}>
                {sortOrderName === "asc" && <img src={arrowRandom} alt="Ascending" />}
                {sortOrderName === "desc" && <img src={arrowDown} alt="Descending" />}
                {sortOrderName === "shuffle" && <img src={arrowUp} alt="Shuffle" />}
                {sortOrderName === "random" && <img src={arrowRandom} alt="Shuffle" />}
              </button>
            </th>
            <th className="PopularityCol-header">
              Popularity 
              <button className="btn-sort-popularity" onClick={() => sortByPopularity()}>
              {sortOrderPopularity === "asc" && <img src={arrowRandom} alt="Ascending" />}
                {sortOrderPopularity === "desc" && <img src={arrowDown} alt="Descending" />}
                {sortOrderPopularity === "shuffle" && <img src={arrowUp} alt="Shuffle" />}
                {sortOrderPopularity === "random" && <img src={arrowRandom} alt="Shuffle" />}
                </button>
              </th>
            <th className="AwardCol">Oscar</th>
            <th className="AwardCol">Emmy</th>
            <th className="ActionCol">Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td className="PictureCol">
                  {" "}
                  <img
                    src={contact.pictureUrl}
                    alt={`Image of ${contact.name}`}
                  />
                </td>
                <td className="NameCol-body"> {contact.name}</td>
                <td className="PopularityCol-body">
                  {" "}
                  {contact.popularity.toFixed(2)}
                </td>
                <td className="AwardCol"> {contact.wonOscar ? "🏆" : ""}</td>
                <td className="AwardCol"> {contact.wonEmmy ? "🌟" : ""}</td>
                <td className="AwardCol">
                  {" "}
                  <button
                    id="btn-delete-list"
                    onClick={() => deleteCelebrety(contact.id)}
                  >
                    {" "}
                    <img src={bin} />{" "}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
