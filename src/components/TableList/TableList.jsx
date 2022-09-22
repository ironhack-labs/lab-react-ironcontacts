import { Component } from "react";
import "./TableList.css";

class TableList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {contacts.map((actor) => (
          <tr key={actor.id}>
            <td>
              <img width="100px" src={actor.pictureUrl} alt=""></img>
            </td>
            <td>{actor.name}</td>
            <td>{actor.popularity.toFixed(2)}</td>
            <td>{actor.wonOscar ? "⭐" : "No"}</td>
            <td>{actor.wonEmmy ? "⭐" : "No"}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default TableList;
