import React, { Component } from "react";
import Image from './Image';

class TableBody extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tbody>
        { this.props.fiveContacts.map((oneContact, idx) => {
          return (
            <tr>
              <td key={`tbodypic-${idx}`} name={oneContact.pictureUrl}>
              <Image picUrl={oneContact.pictureUrl} style={{width: "100px"}} />
              </td>
              <td key={`tbodyname-${idx}`}>{oneContact.name}</td>
              <td key={`tbodypop-${idx}`}>{oneContact.popularity.toFixed(2)}</td>
            </tr>
          )
        }
        )}
      </tbody>
    )
  }
}

export default TableBody;