import React from 'react';
import contacts from '../../contacts.json'
import "./Famous.css"
import Button from "../Button/Button";

export default class Famous extends React.Component {
  constructor() {
    super()
    this.state = {
      famous: [...contacts].splice(0, 5)
    }

    this.addRandom = this.addRandom.bind(this)
    this.sortArray = this.sortArray.bind(this)
  }

  addRandom() {
    let aleatory = (Math.floor(Math.random() * contacts.length))
    let newArray = [...this.state.famous]
    newArray.push(contacts[aleatory])
    this.setState({ famous: newArray })
  }

  sortArray(value) {
    let arraySort = [...this.state.famous]
    arraySort.sort(function (a, b) {

      if (a[value] > b[value]) {
        if (value === "name") {
          return 1
        } else {
          return -1
        }
      }
      if (a[value] < b[value]) {
        if (value === "name") {
          return -1
        } else {
          return 1
        }
      }
      return 0
    })
    this.setState({ famous: arraySort })
    console.log(arraySort)
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
        <Button function={this.addRandom}>Add Random Contact</Button>
        <Button function={() => this.sortArray("name")}>Sort by name</Button>
        <Button function={() => this.sortArray("popularity")}>Sort by popularity</Button>
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