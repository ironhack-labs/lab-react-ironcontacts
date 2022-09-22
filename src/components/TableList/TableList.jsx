import { Component } from "react";
import "./TableList.css";

class TableList extends Component {

  state = {
    contacts: this.props.contacts,
    remainContacts: this.props.remainContacts,
  };

  addRandomContact = () => {
    const randomContact =
      this.state.remainContacts[
        Math.round(Math.random() * ((this.state.remainContacts.length - 1) - 0) + 0)
      ];

    this.setState((prevState) => {
      return {
        remainContacts: prevState.remainContacts.filter(
          (contact) => contact !== randomContact
        )
      };
    });

    this.setState((prevState) => {
      return { contacts: prevState.contacts.push(randomContact) };
    });    
  };

  sortByPopularity = () => {
     this.setState((prevState) => {
       return {
         contacts: [...prevState.contacts].sort((a, b) => b.popularity - a.popularity)
       };
     });
  }

  sortByName = () => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts].sort((a, b) =>
          a.name.localeCompare(b.name)
        )
      };
    });
  }  

  render() {
    const { contacts, remainContacts } = this.state;

    return (
      <div className="List-container">
        <div className="Btns-container">
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByPopularity}>Sort by Popularity</button>
          <button onClick={this.sortByName}>Sort by Name</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((actor) => {
              return (
                <tr key={actor.id}>
                  <td>
                    <img width="100px" src={actor.pictureUrl} alt=""></img>
                  </td>
                  <td>{actor.name}</td>
                  <td>{actor.popularity.toFixed(2)}</td>
                  <td>{actor.wonOscar ? "🏆" : "-"}</td>
                  <td>{actor.wonEmmy ? "🏆" : "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableList;
