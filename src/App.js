// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import data from "./contacts.json";

function App() {
  return (
    <div className="App">
      <FiveContacts />
      <AddToState />
      <SortState />
    </div>
  );
}

// ITERATION 1:

// get 5 elements of the data array.
const newArr = data.slice(0, 5);

// Some styles.

const contactStyle = {
  display: "flex",
  // border: "1px solid grey",
  borderRadius: "4px",
  width: "250px",
  // heigth: "100px",
  marginBottom: "10px",
  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 2.5px 4px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
};

const imgStyle = {
  display: "inline-block",
  // border: "1px solid grey",
  width: "65px",
  height: "100px",
  borderRadius: "5px",
  marginLeft: "10px",
  marginTop: "10px",
  marginBottom: "15px",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 5px 8px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
};

const textStyle = {
  // border: "1px solid grey",
  font: `12px "Nunito", sans-serif`,
  display: "inline-block",
  width: "350px",
  height: "12px",
  marginLeft: "10px",
  // marginTop: "-75px",
  // marginBottom: "50px",
};

function FiveContacts() {
  return (
    <div className="fiveontacts">
      <ul>
        {newArr.map((person) => {
          return (
            <table style={contactStyle}>
              <img style={imgStyle} src={person.pictureUrl} />{" "}
              <p style={textStyle}>
                {person.name} {person.popularity}
              </p>
            </table>
          );
        })}
      </ul>
    </div>
  );
}

// ITERATION 2:
// Select random contact.
function selectRandomContact(data) {
  let randomNumber = Math.floor(Math.random() * (data.length + 1));
  return data[randomNumber];
}

// Add random contact to newArr.
function addContactToArray(anArray) {
  newArr.push(anArray);
  return newArr;
}

// Class to add a random contact to newArr.
class AddToState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: data.slice(0, 5),
    };
  }

  handleIncrementClick = () => {
    // console.log("test", addContactToArray(selectRandomContact()));
    this.setState({
      value: selectRandomContact(data),
    });
  };

  render() {
    console.log("this.state.value:", this.state.value);
    if (this.state.value.length <= 5) {
      return (
        <ul>
          <div>
            <button onClick={this.handleIncrementClick}>
              Add Random Contact
            </button>
          </div>
        </ul>
      );
    } else {
      return (
        <div>
          <ul>
            <table style={contactStyle}>
              <img style={imgStyle} src={this.state.value.pictureUrl} />{" "}
              <p style={textStyle}>
                {this.state.value.name} {this.state.value.popularity}
              </p>
            </table>
            <div>
              <button onClick={this.handleIncrementClick}>
                Add Random Contact
              </button>
            </div>
          </ul>
        </div>
      );
    }
  }
}

// ITERATION 3:
// Sort by name array.
function sortNameContact() {
  newArr.sort(function (a, b) {
    return b.name - a.name;
  });
  return newArr;
}

// Class to add a random contact to newArr.
class SortState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: data.slice(0, 5),
    };
  }

  handleSortNameClick = () => {
    // console.log("test", addContactToArray(selectRandomContact()));
    this.setState({
      value: sortNameContact(),
    });
  };

  render() {
    console.log("this.state.value:", this.state.value);
    return (
      <div>
        <ul>
          <table>
            <img src={this.state.value.pictureUrl} />{" "}
            <p>
              {this.state.value.name} {this.state.value.popularity}
            </p>
          </table>
          <div>
            <button onClick={this.handleSortNameClick}>Sort by name</button>
          </div>
        </ul>
      </div>
    );
  }
}

export default App;
