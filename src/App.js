import React, {Component} from 'react';
import contacts from './contacts.json';
import './App.css';



class App extends Component {

    state = {
      firstContacts: [...contacts].splice(0,5),
      otherContacts: [...contacts].splice(5, contacts.length)
    }

    addRandom = () => {
      const {firstContacts, otherContacts} = this.state;

      let contactRandom = otherContacts[Math.floor(Math.random()*otherContacts.length)]
      console.log(contactRandom)

      this.setState({
        firstContacts: [...firstContacts, contactRandom]
      })
      console.log(firstContacts)
    }

  render(){
    return (
      <div className="App">
    <h3>IronContacts</h3>
      <button
        onClick={this.addRandom}>
      Add Random Contact
      </button>
    
    <table className="table size-tb">
    <thead>
    <tr className='me-3'>
    <th scope="col">Picture</th>
    <th scope="col">Name</th>
    <th scope="col">Popularity</th>
    <th scope="col">Won Oscar</th>
    <th scope="col">Won Emmy</th>
    {/* <th scope="col"></th> */}
    </tr>
    </thead>
      { this.state.firstContacts.map(({ pictureUrl, name, popularity, wonOscar, wonEmmy, id }) => {
          return (
            <tbody>
              <tr>
                <td>
                <img 
                  key={id}
                  value={pictureUrl}
                  className='contact-img'
                  src={pictureUrl}
                  alt=""
                />
                </td>
                <td>{name}</td>
                <td>{popularity.toFixed(2)}</td>

                <td>
                {wonOscar && "🏆"}
                </td>
                <td>
                {wonEmmy && "🏆"}
                </td>
              </tr>
              </tbody>
          )
        })
      }
   </table>
    </div>
    );
  }
}


export default App;
