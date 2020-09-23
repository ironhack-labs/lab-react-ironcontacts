import React from 'react';
import './App.css';
import ContactList from './components/ContactList';
import contacts from './contacts.json';

console.log(contacts.slice(0, 4))

  class App extends React.Component{
  
    state = {
      contact: contacts.slice(0, 4)
    }
    addContact = () => {
     
      const randomContact =  contacts[contacts.length * Math.random() | 0]


      const contactCopy = this.state.contact.slice();
      contactCopy.push(randomContact);
      this.setState({
        contact:contactCopy
        // movies: [...this.state.movies, newMovies]
      })
      
      // this.setState((state) => {
      //   movies: state.movies.concat(newMovie)
      // })
    }

    render() {
      return (
        <div className='App'>
        <h1>IronContacts</h1>

        <button onClick={this.addContact}>Add a Contact</button>
        
        <ContactList contact={this.state.contact}/>
        
    
        </div>
        
      )
    }
  
}

export default App;
