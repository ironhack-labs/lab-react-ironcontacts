import React, {Component} from 'react';
import './style.css';

class Table extends Component {
  render() {
    const {tableHead, tableBody} = this.props;
    return (
      <table>
        <thead>
        <tr>
          {tableHead.map((element,index) => <th key={index}>{element}</th>)}
        </tr>
        </thead>
        <tbody>
        {tableBody.map((element,index) =>
          <tr key={index}>
            <td><img src={element.pictureUrl} width={50} /></td>
            <td>{element.name}</td>
            <td>{element.popularity.toFixed(2)}</td>
            <td>
              <button onClick={() => this.props.delete(index)}>Delete</button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    );
  }
}

export default Table;