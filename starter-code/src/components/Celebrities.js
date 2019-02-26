import  React, {Component} from 'react';
import contacts from '../contacts.json'


export default class Celebrities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [...contacts].slice(0,5),
    };
  }

  random_item = () => {
    let newCelebrity = this.state.contacts
    const filterContacts = contacts.filter(c => !newCelebrity.includes(c))
    const randomCelebrity = filterContacts[Math.floor(Math.random()*contacts.length)];
    newCelebrity.push(randomCelebrity)
    this.setState({
        contacts: newCelebrity
    })
  }

  render (){

   const celebrities = this.state.contacts
    .map(contact => {
      return (
        <tr>
          <td><img src={contact.pictureUrl} alt={contact.name} className="picture"/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
        </tr>
      )
    })
    
    return (
      <div className="container">
        <h1>Iron Contacts</h1>
        <button type="button" className="mb-3 btn btn-secondary" onClick={this.random_item}>Add Random</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
            </tr>
          </thead>
          <tbody>
          {celebrities}
          </tbody>
        </table>
      </div>
      )
  }
}






