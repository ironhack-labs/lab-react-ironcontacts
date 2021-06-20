import React from "react";
import { Component } from "react";
import contacts from "../contacts.json";

const fullProducerArray = [...contacts]; //  spread operator to create a copy of the entire array

const firstFiveItems = fullProducerArray.slice(0, 5); // create a slice to copy in a new array only the first 5 elements

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { data: firstFiveItems };
  }
  clickRandomHandler = () => {
    console.log("Clicked");
    const getRandomContact =
      fullProducerArray[Math.floor(Math.random() * fullProducerArray.length)];
    console.log("random contact", getRandomContact);

    const newState = [...this.state.data]; //make copy of the actual state in that moment with the exact number of character
    newState.push(getRandomContact); //i made push to add new element into the array

    console.log("NEW STATE", newState);

    this.setState({
      //assign my new array to data, will generate a change of the state
      data: newState,
    });
  };

  clickSortHandler = () => {
    console.log("CLICKED SORT!");
    const firstCopyOfFirstFiveItems = [...this.state.data];
    firstCopyOfFirstFiveItems.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });

    this.setState({
      data: firstCopyOfFirstFiveItems,
    });
  };

  clickSortPopHandler = () => {
    console.log("CLICKED SORT BY POPULARITY!");
    const secondCopyOfFirstFiveItems = [...this.state.data];
    secondCopyOfFirstFiveItems.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      data: secondCopyOfFirstFiveItems,
    });
  };

  clickDeleteHandler = (id) => {
    // function with id argument
    console.log("id", id);
    const eraser = this.state.data.filter((item) => item.id !== id); // create new variable equal to the actul status and remove the id selected

    this.setState({
      data: eraser,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.clickRandomHandler}>Add random contacts</button>
        <button onClick={this.clickSortHandler}> Sort by Name</button>
        <button onClick={this.clickSortPopHandler}>Sort by Popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          {this.state.data.map((item, index) => (
            //map to pass element , cant pass as object

            <tbody>
              <tr key={index} index={item.id}>
                <td>
                  <img
                    style={{ height: "100px" }}
                    src={item.pictureUrl}
                    alt="pic"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.popularity.toFixed(2)}</td>
                <td>
                  <button onClick={() => this.clickDeleteHandler(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default Table;
