import React from 'react'
import contacts from '../contacts.json'


class Contact extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      list: contacts.slice(0, 5),
      fullList: contacts,
      name: "",
      popularity: "",
    }
  }

  showContacts = () => {
    return this.state.list.map((eachContact, index) => {
      return (
        <div key={index} className='people-grid' >
          <table>
            <tbody>
              <tr>
                <td>
                  <img src={eachContact.pictureUrl} alt="" />
                </td>
                <td>
                  {eachContact.name}
                </td>
                <td>
                  {eachContact.popularity.toFixed(2)}
                </td>
                <td>
                  <button onClick={
                    () => { this.deleteContact(index) }}> Delete
                </button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      )
    })
  }

  deleteContact = (whichOne) => {
    let copy = [...this.state.list];
    copy.splice(whichOne, 1);
    this.setState({ list: copy })
  }

  addRandomContact = () => {
    let theShortList = [...this.state.list]
    let theFullList = [...this.state.fullList]
    let randomNum = Math.floor(Math.random() * theFullList.length)
    let randomContact = theFullList[randomNum]

    theShortList.push(randomContact)

    this.setState({
      list: theShortList
    })

  }

  sortByName = () => {
    let listToSort = [...this.state.list]

    listToSort.sort(function (a, b) {

      let nameA = a.name.toLowerCase()
      let nameB = b.name.toLowerCase()

      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })

    this.setState({
      list: listToSort,
    })

  }

  sortByPopularity = () => {
    let listToSort = [...this.state.list]

    listToSort.sort(function (a, b) {

      let popA = a.popularity
      let popB = b.popularity

      if (popA < popB) {
        return -1
      }
      if (popA > popB) {
        return 1
      }
      return 0
    })

    this.setState({
      list: listToSort,
    })

  }


  render() {
    return (
      <div>

        <div className="button-group">
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by Name</button>
          <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        </div>

        <table>
          <tbody>
            <tr>
              <th><h2>Picture</h2></th>
              <th><h2>Name</h2></th>
              <th><h2>Popularity</h2></th>
            </tr>
            <tr></tr>
          </tbody>
        </table>

        {this.showContacts()}

      </div>
    )
  }


}

export default Contact
