import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      pictureUrl: "",
      popularity: 0
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addTheContact(this.state);
    // clears the inputs again after the form has been submitted
    this.setState({
      name: "",
      pictureUrl: "",
      popularity: 0
    });
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label>Image:</label>
        <input
          type="text"
          name="pictureUrl"
          value={this.state.pictureUrl}
          onChange={this.handleChange}
        />

        <label>Popularity:</label>
        <input
          type="number"
          name="popularity"
          step="0.0001"
          value={this.state.popularity}
          onChange={this.handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddContact;
