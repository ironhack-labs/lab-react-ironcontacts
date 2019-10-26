import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();
    this.state = {
      amountClicked: 0
    };
  }

  onClickHandler = () => {
    this.setState({ amountClicked: this.state.amountClicked + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onClickHandler}>
          {/* Show state */}
          {this.state.amountClicked}
        </button>
      </div>
    );
  }
}
export default Likes;
