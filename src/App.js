import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json';


class App extends Component {


  state = {
    celebrities: contacts.slice(0,5),
    // contacts: contacts
  }


  handleRandom = () => {  
    let newCelebrities =  JSON.parse(JSON.stringify(this.state.celebrities))
    
    let randomCelebrity = contacts[Math.floor(Math.random() * contacts.length)]
    newCelebrities.push(randomCelebrity)

    this.setState({
        celebrities: newCelebrities
    })
    
}


  handleSort = () => {  
    let cloneCelebrities =  JSON.parse(JSON.stringify(this.state.celebrities))

          cloneCelebrities.sort((a,b) => {
            if(a.name > b.name) {
                return 1;
            }
            else if (a.name < b.name) {
                return -1;
            }
            else {
                return 0;
            }
        })

    this.setState({
        celebrities: cloneCelebrities
    })
    
  }


  handlePopularitySort = () => {  
    let cloneCelebrities =  JSON.parse(JSON.stringify(this.state.celebrities))

          cloneCelebrities.sort((a,b) => {
            if(a.popularity < b.popularity) {
                return 1;
            }
            else if (a.popularity > b.popularity) {
                return -1;
            }
            else {
                return 0;
            }
        })

    this.setState({
        celebrities: cloneCelebrities
    })
    
  }

  handleDelete = (someId) => {
    console.log('delete called', someId)
    let filteredCelebrities = this.state.celebrities.filter((celebrity) => {
        return celebrity.id !== someId

    })
    this.setState({
        celebrities: filteredCelebrities
    })
}



  render() {
    return (
      <div className="container">
          <h1>IronContacts</h1>
          <button className="btn" onClick={this.handleRandom}>Add a random celebrity</button>
          <button className="btn" onClick={this.handleSort}>Sort by name</button>
          <button className="btn" onClick={this.handlePopularitySort}>Sort by popularity</button>
      <table >
          <thead>
                <tr className="card">
                  <th className="elem">Picture</th>
                  <th className="elem">Name</th>
                  <th className="elem">Popularity</th>
                  <th className="elem">Action</th>
                </tr>
          </thead>
          
          <tbody>
          {
            this.state.celebrities.map((celebrity) => {
                return (
                <tr key={celebrity.id} className="card">
                  <td className="elem"><img width="100" src={celebrity.pictureUrl} alt="image"/></td>
                  <td className="elem">{celebrity.name}</td>
                  <td className="elem">{Math.round(celebrity.popularity*100)/100}</td>
                  <td className="elem"><button className="btn pink" onClick={()=>{this.handleDelete(celebrity.id)}}>Delete</button></td>
                  
                </tr>
                )
          })
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
