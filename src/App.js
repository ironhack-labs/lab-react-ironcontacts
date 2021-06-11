// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

const fullProducerArray = [...contacts]; //  spread operator to create a copy of the entire array
console.log("Total Array", fullProducerArray);

const firstFiveItems = fullProducerArray.slice(0, 5); // create a slice to copy in a new array only the first 5 elements
console.log(firstFiveItems);

function App() {
  return (
    <div>
      <p>{firstFiveItems.name}</p>
      <img src={firstFiveItems.pictureUrl} alt="" />
      <p>{firstFiveItems.name}</p>
      <p>{firstFiveItems.popularity}</p>
    </div>
  );
}

export default App;

// {
/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a> */
// }
