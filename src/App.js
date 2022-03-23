import { Component } from "react";
import "./App.css";
import completeContactList from "./contacts.json";

class App extends Component {
  state = {
    contacts: completeContactList.slice(0, 5),
  };
  addRandomContact=()=>{
  const { contacts } = this.state
  contacts.push([])
  }
    render() {
      const { contacts } = this.state;
      return (
        <div className="App">
          <header>
            <button onClick={()=>this.addRandomContact()}>Add Random Contact</button>
            <table className="table-title">
              <tr className="separate">
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won an Oscar</th>
                <th>Won an Emmy</th>
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
                  <td>{item.wonOscar ? "🏆" : ""}</td>
                  <td>{item.wonEmmy ? "🏆" : ""}</td>
                </tr>
              </table>
            );
          })}
        </div>
      );
  }
}
export default App;
