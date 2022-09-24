import React, {Component} from 'react'
import OneContact from './OneContact/OneContact'


class Contacts extends Component {
    state = {
        contacts: this.props.contacts, 
        remainContacts: this.props.remainContacts,
    }

  addRandomContact = () => {
      const randomContact = this.state.remainContacts[Math.round(Math.random() * ((this.state.remainContacts.length - 1) - 0) + 0)]
      console.log(randomContact)
      this.setState((prevState)=> {
        return{
          remainContacts: prevState.remainContacts.filter((contact) => contact !== randomContact)
        }
      })

      this.setState((prevState) => {
        return { contacts: [...prevState.contacts, randomContact]}
      })

      console.log(this.state.remainContacts)
      console.log(this.state.contacts)
      
    }






render () {
    const { contacts } = this.state

    return (
      <div>
      <h1>IRON CONTACTS</h1>
      <button onClick={this.addRandomContact}>Add Random Contact</button>
         <table className="table table-striped container text-center align-middle">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Picture</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">id</th>
                    <th scope="col">Won Oscar?</th>
                    <th scope="col">Won Emmy?</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <OneContact
                      key={contact.id} {...contact}
                      // como onDeleteBook necesita saber el id, declaro una arrow function que llama a onDeleteBook pasando el id
                    />
                  ))}
                </tbody>
              </table>
            </div>

    )

}


}

export default Contacts