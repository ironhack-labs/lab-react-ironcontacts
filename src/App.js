import React from "react";
import "./App.css";
import Button from "./components/Button";
import Table from "./components/Table";

import contacts from "./contacts.json";

function App() {
  const [contactsArr, setContactsArr] = React.useState(contacts.slice(0, 5));
  const [sortNameDirection, setSortNameDirection] = React.useState("asc");
  const [sortPopularityDirection, setSortPopularityDirection] = React.useState(
    "asc"
  );
  const [arrayToSearchOn, setSearchOnArray] = React.useState(contactsArr);
  const [backgroundColor, setBackgroundColor] = React.useState("white");

  function addRandomContact() {
    const contactsNotDisplayed = contacts.filter(
      (contact) => !contactsArr.map((el) => el.id).includes(contact.id)
    );
    if (contactsNotDisplayed.length === 0) {
      return;
    }
    // console.log(contactsNotDisplayed);
    const randomContact = [
      contactsNotDisplayed[
        Math.floor(Math.random() * contactsNotDisplayed.length)
      ],
    ];

    // console.log(randomContact);
    const newArr = contactsArr.concat(randomContact);
    // const newArr = [...contactsArr, randomContact] would also work! NP random contact should no longer be in an array then
    setContactsArr(newArr);
    setSearchOnArray(newArr);
  }

  function sortName() {
    if (sortNameDirection === "asc") {
      const newArr = [...contactsArr].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setSortNameDirection("desc");
      setContactsArr(newArr);
      setSearchOnArray(newArr);
    } else if (sortNameDirection === "desc") {
      const newArr = [...contactsArr].sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
      setSortNameDirection("asc");
      setContactsArr(newArr);
      setSearchOnArray(newArr);
    }
  }

  function sortPopularity() {
    if (sortPopularityDirection === "asc") {
      const newArr = [...contactsArr].sort((a, b) => {
        return a.popularity - b.popularity;
      });
      setSortPopularityDirection("desc");
      setContactsArr(newArr);
      setSearchOnArray(newArr);
    } else if (sortPopularityDirection === "desc") {
      const newArr = [...contactsArr].sort((a, b) => {
        return b.popularity - a.popularity;
      });
      setSortPopularityDirection("asc");
      setContactsArr(newArr);
      setSearchOnArray(newArr);
    }
  }

  function deleteContact(id) {
    const newArr = contactsArr.filter((contact) => contact.id !== id);
    setContactsArr(newArr);
    setSearchOnArray(newArr);
  }

  function searchByName(event) {
    let searchTerm = event.target.value;
    console.log("event:", event.target.value);
    const newArr = arrayToSearchOn.filter((contact) =>
      contact.name.includes(searchTerm)
    );
    setContactsArr(newArr);
  }

  return (
    <div className="App" style={{ backgroundColor }}>
      <BackgroundChanger
        setBackgroundColor={setBackgroundColor}
      ></BackgroundChanger>
      <h1>IronContacts</h1>
      <Button onClick={addRandomContact}>Add Random Contact</Button>
      {/* Here with "onClick={addRandomContact}" we are adding a function DEFINITION (NOT CALLING IT!). But "onClick={addRandomContact()}" is envoking or calling the function */}
      <input
        name="name"
        placeholder="Search contact name"
        onChange={searchByName}
      ></input>
      <Table
        deleteContact={deleteContact}
        sortName={sortName}
        sortPopularity={sortPopularity}
        contactsArr={contactsArr}
      />
    </div>
  );
}

function BackgroundChanger(props) {
  const [backgroundInput, setBackgroundInput] = React.useState("");

  function handleInputChange(event) {
    setBackgroundInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //this prevents a form from doing its default behaviour
    // pass it to the form tag, it prevents the page from refreshing.
    props.setBackgroundColor(backgroundInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <span>Which color do you want the background to be? </span>
      <input
        type="text"
        placeholder="Write your color!"
        value={backgroundInput}
        // onChange={(event) => handleInputChange(event)}  SAME AS ABOVE
        onChange={handleInputChange}
      ></input>
      <button>Change</button>
    </form>
  );
}

// Understanding the notation in contact component
const log = console.log;
// here we are pointing the definition .
const hello = () => console.log("hello");
// we are assigning a function definition to a function. Actually we do not call the function when we do this.
const jello = console.log("Hello jello");
// But the above DOES call it.
hello();

export default App;
