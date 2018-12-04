import React from 'react';
import contacts from '../../contacts.json'
import "./Famous.css"
import Button from "../Button/Button";

export default class Famous extends React.Component {
  constructor() {
    super()
    this.state = {
      famous: [...contacts].splice(0,5)
    }

    this.addRandom=this.addRandom.bind(this)
  }

  addRandom() {
    let aleatory = (Math.floor(Math.random() * contacts.length))
    let newArray = [...this.state.famous]
    newArray.push(contacts[aleatory])
    this.setState({famous: newArray})
    console.log("hola")
  }

  render() {
    
    let famous = this.state.famous.map((element, index) => {
      return (
        <tr>
          <td>
            <img className="famous-image" src={element.pictureUrl} />
          </td>
          <td>
            {element.name}
          </td>
          <td>
            {element.popularity}
          </td>
        </tr>
      )
    })
    return (
      <div className="Famous" >
        <Button addRandom={this.addRandom}></Button>
        <table>
          <tr>
            <th>
              Picture
            </th>
            <th>
              Name
            </th>
            <th>
              Popularity
            </th>
          </tr>
          {famous}
        </table>
      </div>
    );
  }
}