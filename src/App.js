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
      <div>
        <p> Name:{firstFiveItems[0].name}</p>
        <img
          style={{ height: "100px" }}
          src={firstFiveItems[0].pictureUrl}
          alt=""
        />
        <p>Popularity: {firstFiveItems[0].popularity}</p>
      </div>
      <div>
        <p>{firstFiveItems[1].name}</p>
        <img
          style={{ height: "100px" }}
          src={firstFiveItems[1].pictureUrl}
          alt=""
        />
        <p>Popularity: {firstFiveItems[1].popularity}</p>
      </div>
      <div>
        <p>{firstFiveItems[2].name}</p>
        <img
          style={{ height: "100px" }}
          src={firstFiveItems[2].pictureUrl}
          alt=""
        />
        <p>Popularity: {firstFiveItems[2].popularity}</p>
      </div>
      <div>
        <p>{firstFiveItems[3].name}</p>
        <img
          style={{ height: "100px" }}
          src={firstFiveItems[3].pictureUrl}
          alt=""
        />
        <p>Popularity: {firstFiveItems[3].popularity}</p>
      </div>
      <div>
        <p>{firstFiveItems[4].name}</p>
        <img
          style={{ height: "100px" }}
          src={firstFiveItems[4].pictureUrl}
          alt=""
        />
        <p>Popularity: {firstFiveItems[4].popularity}</p>
      </div>
    </div>
  );
}

export default App;
