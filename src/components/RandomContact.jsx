import React from "react";
import { Component } from "react";
import contacts from "../contacts.json";

const fullProducerArray = [...contacts]; //  spread operator to create a copy of the entire array

const firstFiveItems = fullProducerArray.slice(0, 5); // create a slice to copy in a new array only the first 5 elements

class RandomContact extends Component {
  constructor(props) {
    super(props);
    this.state = { value: firstFiveItems };
  }
  clickHandler = () => {
    console.log("Clicked");
    const getRandomContact =
      fullProducerArray[Math.floor(Math.random() * fullProducerArray.length)];
    console.log("hola", getRandomContact);
    const newState = [...this.state.value];

    newState.push(getRandomContact);
    console.log("NEW", newState);

    this.setState({
      value: newState,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}> Add random contacts</button>
        <p>{this.state.value.name}</p>
      </div>
    );
  }
}

export default RandomContact;
