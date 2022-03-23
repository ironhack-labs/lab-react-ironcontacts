import React, {Component} from 'react';
import contacts from './contacts.json';
import './App.css';

class App extends Component {

    state = {
      firstContacts: [...contacts].splice(0,5),
      otherContacts: [...contacts].splice[5, contacts.length]
    }

  render(){
    return (
      <div className="App">
    <h3>IronContacts</h3>
    
    <table class="table size-tb">
    <thead>
    <tr className='me-3'>
    <th scope="col">Piture</th>
    <th scope="col">Name</th>
    <th scope="col">popularity</th>
    <th scope="col">Won Oscar</th>
    <th scope="col">Won Emmy</th>
    {/* <th scope="col"></th> */}
    </tr>
    </thead>
      {
        this.state.firstContacts.map(({ pictureUrl, name, popularity, wonOscar, wonEmmy }) => {
          return (
            <tbody>
              <tr>
                <td>
                <img 
                  className='contact-img'
                  src={pictureUrl}
                  alt=""
                />
                </td>
                <td>{name}</td>
                <td>{popularity}</td>

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
