import { Component } from 'react';
import './App.css';
import contacts from "./contacts.json";


class App extends Component {
  constructor() {
    super()
    this.state = {
      contactsFiltered: []
    }
  }

  //OLVIDAR HASTA MAÑANA
  componentDidMount = () => this.setState({
    contactsFiltered: contacts.splice(0, 5)
  })

  addRandom = () => {
    const newArr = [...this.state.contactsFiltered]
    // calcular indice aleatorio y pasarle del array contacts el elemento con ese indice
    newArr.push()
    this.setState({ contactsFiltered: newArr })
  }
  
  render() {
    return (
      <div>
      <button onClick={this.addRandom}>Add random</button>
        <table>
      <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
              
      </thead>
      <tbody>
            {this.state.contactsFiltered.map(actor => {
        return (
          
          <tr>
            <td><img src={actor.pictureUrl}/></td>
            <td>{actor.name}</td>
            <td>{actor.popularity}</td>
          </tr>
          
        )
      })}
    
      </tbody>
      </table>
      </div>
    );
  }
}

export default App;
