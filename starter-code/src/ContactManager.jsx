import React from 'react'

class ContactManager extends React.Component {

  state = {
    contacts : this.props.contacts
  }

  // onInputChange = (e) => {
  //   this.setState({newUser : e.target.value});
  // }
  //
  // onButtonClick = (e) => {
  //   if(!this.state.newUser) { return; }
  //   this.setState({
  //     users : [...this.state.users, this.state.newUser],
  //     newUser : ''
  //   })
  // }
  //
  // onDelete = (index) => {
  //   this.setState({users : this.state.users.filter((u, i) => { return i !== index }) })
  //   this.inputField.current.focus()
  // }

  render () {
    return(
      <div className="contact-manager">

        <table>

          <thead>
            <tr><th>Picture</th><th>Name</th><th>Popularity</th></tr>
          </thead>

          <tbody>
          {this.state.contacts.map((v, i) => (
            <tr key={i}>
              <td><img src={v.pictureUrl} alt={v.name} height="50px" /></td>
              <td>{v.name}</td>
              <td>{v.popularity.toFixed(2)}</td>
            </tr>
          ))}
          </tbody>

        </table>

      </div>
    )
  }
}

export default ContactManager;
