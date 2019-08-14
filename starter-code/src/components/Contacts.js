import React, { Component } from 'react';
import Contacts from '../contacts.json'
import Button from './Button'

class ContactsList extends Component {

  constructor() {
    super()
    this.state = {
      contacts: Contacts,
      filtered: undefined
    }
  }

  addRandom = () => {
    const filteredContacts = this.state.contacts.filter((elm, idx) => idx <= 4)

    let randomContact = this.state.contacts[Math.floor(Math.random() * ((this.state.contacts.length - 1) - 5) + 5)]
    //console.log(randomContact)
    filteredContacts.push(randomContact)
    // console.log(filteredContacts)
    this.state.display = filteredContacts// añadiéndolo directamente a setstate no me lo coge.No veo porqué. He tenido que hacer esto
    this.setState({
      contacts: Contacts,
      display: filteredContacts
    })
    console.log(this.state)
    //volver a manipular state
  }


  render() {

    const contactsCopy = [...this.state.contacts]
    const five = contactsCopy.splice(0, 5)
    //  const filteredContacts = [...this.state.contacts.filter((elm, idx) => idx <= 4)
    // console.log(five)





    return (
      <React.Fragment>
        <Button addRandom={this.addRandom} />
        <table>

          <thead>
            <th>{<h3>Picture</h3>}</th>
            <th>{<h3>Name</h3>}</th>
            <th>{<h3>Popularity</h3>}</th>
          </thead>
          <tbody>

            {
              five.map((elm, idx) => {
                return (<tr key={idx}>
                  <td>{<img src={elm.pictureUrl} alt={elm.name}></img>}</td>
                  <td>{elm.name}</td>
                  <td>{elm.popularity}</td>
                </tr>)
              })
            }

          </tbody>
        </table>
      </React.Fragment>
    )

  }



  // firstFive = () => {
  //   const contactsCopy = [...this.state.contacts]
  //   contactsCopy.splice(0, 5)
  //   this.setState({
  //     contacts: contactsCopy
  //   })

  // }
}
export default ContactsList