import { Component } from "react";
import contacts from "../contacts.json";

class ContactList extends Component {
  state = {
    contacts: [...contacts].splice(0, 5),
  };

  addContact() {
    let newContact =
      Math.floor(
        Math.random() * (contacts.length - this.state.contacts.length)
      ) + this.state.contacts.length;
    const arr = [...this.state.contacts];
    arr.push(contacts[newContact]);
    console.log(arr);

    this.setState({
      contacts: arr,
    });
  }

  orderBy() {
    let arr = [...this.state.contacts];
    arr.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }

      return 0;
    });

    this.setState({
      contacts: arr,
    });
  }

  orderByPopularity() {
    let arr = [...this.state.contacts];
    arr.sort(function (a, b) {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }

      return 0;
    });

    this.setState({
      contacts: arr,
    });
  }

  removeContat(contactId) {
    let arr = [...this.state.contacts];
    arr = this.state.contacts.filter(
      (eachContact) => eachContact.id !== contactId
    );
    this.setState({
      contacts: arr,
    });
  }

  render() {
    return (
      <>
        <button onClick={() => this.addContact()}>Add a random contact</button>
        <button onClick={() => this.orderBy()}>Order By Name</button>
        <button onClick={() => this.orderByPopularity()}>
          OrderBy Popularity
        </button>
        <div
          className="container"
          Style="display: flex; justify-content: center;"
        >
          <table Style="width:66%;" class="table table-bordered">
            <tbody>
              {this.state.contacts.map((eachContact) => (
                <tr key={eachContact.id}>
                  <td>
                    <img
                      Style="width:70px; display:flex;"
                      src={eachContact.pictureUrl}
                      className=""
                      alt={eachContact.name}
                    />
                  </td>
                  <td>{eachContact.name}</td>
                  <td>{eachContact.popularity.toFixed(2)}</td>
                  <td>
                    <button onClick={() => this.removeContat(eachContact.id)}>
                      Remove Contact
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default ContactList;
