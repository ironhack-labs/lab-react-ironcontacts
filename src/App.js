import { Component } from "react";
import "./App.css";
import completeContactList from "./contacts.json";

class App extends Component {
  state = {
    contacts: completeContactList.slice(0, 5),
  };
    render() {
      const { contacts } = this.state;
      return (
        <div className="App">
          <header>
            <table className="table-title">
              <tr className="separate">
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </table>
          </header>
          {contacts.map((item, key) => {
            return (
              <table className="table-content">
                <tr key={key}>
                  <td>
                    <img className="img-size" src={item.pictureUrl} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.popularity}</td>
                </tr>
              </table>
            );
          })}
        </div>
      );
  }
}
export default App;
