import React from "react";
import { Component } from "react";
import contacts from "../contacts.json";

const fullProducerArray = [...contacts]; //  spread operator to create a copy of the entire array

const firstFiveItems = fullProducerArray.slice(0, 5); // create a slice to copy in a new array only the first 5 elements

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { value: firstFiveItems };
  }
  clickRandomHandler = () => {
    console.log("Clicked");
    const getRandomContact =
      fullProducerArray[Math.floor(Math.random() * fullProducerArray.length)];
    console.log("random contact", getRandomContact);

    const newState = [...this.state.value];
    newState.push(getRandomContact);

    console.log("NEW STATE", newState);

    this.setState({
      value: newState,
    });
  };

  clickSortHandler = () => {
    console.log("SORT CLICKED!");
    const copyOfFirstFiveItems = [...firstFiveItems];
    copyOfFirstFiveItems.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  clickSortPopHandler = () => {
    console.log("SORT CLICKED!");
    const copyOfFirstFiveItems = [...firstFiveItems];
    copyOfFirstFiveItems.sort((a, b) => {
      return b.popularity - a.popularity;
    });
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <div>
          <button onClick={this.clickRandomHandler}>Add random contacts</button>
          <button onClick={this.clickSortHandler}> Sort by Name</button>
          <button onClick={this.clickSortPopHandler}>Sort by Popularity</button>
          <p>{value.name}</p>
        </div>
      </>
    );
  }
}

export default Table;
