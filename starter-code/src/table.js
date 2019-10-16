import React from "react";
import contacts from "./contacts.json";

let newContact = 0;

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  getNewContact() {
    let randomNumb = Math.floor(Math.random() * 100 + 1);
    newContact = contacts.slice(randomNumb, randomNumb + 1);
    console.log(newContact);
    this.setState();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.getNewContact()}>Generate</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {/* {contacts.slice(0, 5).map(e => {
              return (
                <tr>
                  <td>
                    <img src={e.pictureUrl} alt="" />
                  </td>
                  <td>{e.name}</td>
                  <td>{e.popularity}</td>
                </tr>
              );
            })} */}
            {list}
            <tr>
              <td>
                <img src={newContact.pictureUrl} alt="" />
              </td>
              <td>{newContact.name}</td>
              <td>{newContact.popularity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
