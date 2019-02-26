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

  sort_name = () => {
    let sortCelebrityName = this.state.contacts;
    sortCelebrityName.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
    
    this.setState({
      contact: sortCelebrityName
    })
  }

  sort_popularity = () => {
    let sortCelebrityPopularity = this.state.contacts;
    sortCelebrityPopularity.sort(function(a, b) {
      var textA = a.popularity;
      var textB = b.popularity;
      return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
  });
    
    this.setState({
      contact: sortCelebrityPopularity
    })
  }

  onClickDelete = (contact) => {
    this.setState({
      contacts: this.state.contacts.filter(f => f !== contact)
    })
    
  }

  render (){

   const celebrities = this.state.contacts
    .map(contact => {
      return (
        <tr key={contact.name}>
          <td><img src={contact.pictureUrl} alt={contact.name} className="picture"/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td><button type="button" className="mb-3 btn btn-danger" onClick={this.onClickDelete.bind(this, contact)}>Delete</button></td>
        </tr>
      )
    })
    
    return (
      <div className="container">
        <h1>Iron Contacts</h1>
        <button type="button" className="mb-3 btn btn-secondary" onClick={this.random_item}>Add Random</button>
        <button type="button" className="mb-3 ml-2 btn btn-secondary" onClick={this.sort_name}>Sort by name</button>
        <button type="button" className="mb-3 ml-2 btn btn-secondary" onClick={this.sort_popularity}>Sort by popularity</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th></th>
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






