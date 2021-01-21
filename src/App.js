import React from 'react';
import './App.css';
import contacts from './contacts.json';
 
class App extends React.Component {
  state = {
    celebrities: contacts.slice(0,5)
  }
 
  ButtonRandom = () => {
 
      let clonedCeleb = [...this.state.celebrities]
 
      let randomCel = contacts[Math.floor(Math.random()*contacts.length)]
      clonedCeleb.push(randomCel)
 
      this.setState({
        celebrities: clonedCeleb
      })
  }
 
 
 
 
  render() {
    return (
 
      
    
    
    this.state.celebrities.map(elem => { 
      return(
      <React.Fragment>
        <button onClick={this.ButtonRandom}>Click here</button>
      
      <table>
          <thead>
            <tr>
              <th>picture</th>
              <th>name</th>
              <th>popularity</th>
            </tr>
          </thead>
        <tbody>
          <tr>
            <td>
              <div className="TableImage">
                <img src={elem.pictureUrl}/>
              </div>
            </td>
            <td>{elem.name}</td>
            <td>{elem.popularity}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment> 
      )
      })
    )     
  }
}
 
export default App;
