import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    pictureUrl: "",
    popularity: "",
    id: "",
  };

  handleChange = (event) => {
      const nameOfField = event.target.name;
      this.setState({[nameOfField]: event.target.value})
  }

  handleFormSubmit = (event) => {
      event.preventDefault();

      this.props.addContactHandler(this.state);

          this.setState({
            name: "",
            pictureUrl: "",
            popularity: "",
            id: "",
          });  
  }

  render() {
    return (
      <div className="add-contact-form">
        <h3>Add new contact:</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Picture:
            <input
              type="text"
              name="pictureUrl"
              value={this.state.pictureUrl}
              onChange={this.handleChange}
            ></input>
          </label>{" "}
          <label>
            Popularity:
            <input
              type="text"
              name="popularity"
              value={this.state.popularity}
              onChange={this.handleChange}
            ></input>
          </label>{" "}
          <label>
            Id:
            <input
              type="text"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
            ></input>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddContact;