import contacts from './contacts.json'
import "./App.css";
import { Component } from 'react';

class App extends Component {

  state = {
    contacts: contacts.slice(0,5)
  }

  
  render() {
    console.log(this.state.contacts)
    return (
      <div className="App container">
        <h1 className='m-4'>ironcontacts</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">Won Oscar</th>
              <th scope="col">Won Emmy</th>
            </tr>
          </thead>
          {
            this.state.contacts.map( (person, indice) => {
            const { id, name, pictureUrl, popularity, wonEmmy, wonOscar } = person
              return (
                <tbody key={id}>
                  <tr>
                    <td className='ironcontacts-img' style={{backgroundImage: `url(${pictureUrl})`}}></td>
                    <td>{name}</td>
                    <td>{popularity.toFixed(2)}</td>
                    <td>{wonOscar ? (
                          <span className='iconWin'></span>
                        ) : (
                          <span className='iconLose'></span>
                        )
                      }</td>
                      <td>{wonEmmy ? (
                          <span className='iconWin'></span>
                        ) : (
                          <span className='iconLose'></span>
                        )
                      }</td>
                  </tr>
                </tbody>
              )
            })
          }
        </table>
      </div>
    )
  }
}
export default App;