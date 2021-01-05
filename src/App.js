import React from 'react';
import './App.css';
import ContactCard from './components/ContactCard';
import contacts from './contacts.json'



class App extends React.Component {
  state = {
    contacts: [{
      "name": "Idris Elba",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
      "popularity": 11.622713,
      "id": "11731993-0604-4bee-80d5-67ad845d0a38"
    },
    {
      "name": "Johnny Depp",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
      "popularity": 15.656534,
      "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06"
    },
    {
      "name": "Monica Bellucci",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
      "popularity": 16.096436,
      "id": "0ad5e441-3084-47a1-9e9b-b917539bba71"
    },
    {
      "name": "Gal Gadot",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
      "popularity": 10.049256,
      "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2"
    },
    {
      "name": "Ian McKellen",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
      "popularity": 10.070132,
      "id": "0067ae32-97b6-4431-898e-eb1c10150abb"
    },

    ]

  };
  handleAddRandomContact = () => {
    const getRandomIndex = Math.floor(Math.random() * (contacts.length - 4) + 5)
    console.log({getRandomIndex})
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contacts[getRandomIndex]]
    }));
  };

  handleSortByName = () => {
    this.setState({ contacts: [...this.state.contacts].sort((a, b) => (a.name.localeCompare(b.name))) });
  };

  handleSortByPopularity = () => {
    this.setState({
      contacts: [...this.state.contacts].sort((a, b) => (-a.popularity + b.popularity))
    });
  };
  handleRemove = (event) => {
    const contactId = event.target.getAttribute('aria-label');
    this.setState({
      contacts: [...this.state.contacts].filter(contact => contact.id !== contactId)
    })

  }

  render() {

    return (
      <div className="App" >

        <h1>IronContacts</h1>
        <div className="btn-container">
          <button onClick={this.handleAddRandomContact}>Add Random Contact</button>
          <button onClick={this.handleSortByName}>Sort by name</button>
          <button onClick={this.handleSortByPopularity}>Sort by popularity</button>
        </div>

        <div className='table-wrapper'>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {this.state.contacts.map(({ name, pictureUrl, popularity, id }, index) => {
                return (
                  <ContactCard
                    key={index}
                    id={id}
                    name={name}
                    pictureUrl={pictureUrl}
                    popularity={popularity}
                    handleRemove={this.handleRemove}
                  />

                )
              })}

            </tbody>

          </table>
        </div>

      </div>
    );
  }
}

export default App;