import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import "bootstrap/dist/css/bootstrap.css";
import { Table } from "reactstrap";
import { Button } from "reactstrap";
const shortid = require("shortid");

class App extends Component {
  state = {
    table: [...contacts].slice(0, 5),
  };
  handleClick = () => {
    this.setState({
      table: this.state.table.concat(
        [...contacts][Math.floor(Math.random() * Object.keys(contacts).length)]
      ),
    });
  };
  sortByname = () => {
    this.setState({
      table: this.state.table.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      ),
    });
  };
  sortBypopularity = () => {
    this.setState({
      table: this.state.table.sort((a, b) =>
        a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0
      ),
    });
  };
  handleDelete = (id) => {
    this.setState({
      table: this.state.table.filter((x) => x.id !== id),
    });
  };
  render() {
    console.log(this.state.table);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Iron hack Contacts</h1>
        </header>
        <main>
          <div className="btnDiv">
            <Button
              className="float-left"
              color="primary"
              onClick={this.handleClick}
            >
              Add New Random Contacts
            </Button>
            <Button color="info" onClick={this.sortByname}>
              sort the table by name
            </Button>
            <Button
              color="info"
              className="float-right"
              onClick={this.sortBypopularity}
            >
              sort the table by popularity
            </Button>
          </div>

          <Table dark hover>
            <thead>
              <tr>
                <th>picture </th>
                <th>name</th>
                <th>popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.table.map((x) => (
                <tr key={shortid.generate()}>
                  <td>
                    <img src={x.pictureUrl} alt="" style={{ width: "200px" }} />
                  </td>
                  <td>{x.name}</td>
                  <td>{x.popularity}</td>
                  <td>
                    <Button
                      color="danger"
                      onClick={() => this.handleDelete(x.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </main>
      </div>
    );
  }
}

export default App;
