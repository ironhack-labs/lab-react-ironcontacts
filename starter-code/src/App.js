import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

//import Actors from './components/Actors.js';



class App extends Component {
  render() {
    const actorsArray = [
      {
      "name": "Idris Elba",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
      "popularity": 11.622713
    },
    {
      "name": "Jessica Chastain",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
      "popularity": 8.324357
    },
    {
      "name": "Johnny Depp",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
      "popularity": 15.656534
    },
    {
      "name": "Emilia Clarke",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
      "popularity": 16.211837
    },
    {
      "name": "Leonardo DiCaprio",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
      "popularity": 11.245333
    },
    ]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <h1>IronContacts</h1>

        <table>
          <tr>
            <th>Picture</th> 
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          { actorsArray.map((oneNumber, index) => {
              return (
               <tr key={index}> 
                 <td> <img src={ oneNumber.pictureUrl }/></td>
                 <td >{ oneNumber.name }</td>
                 <td> { oneNumber.popularity }</td>
               </tr> 
               ) 
              }
        )}
        </table>

        <button >Add Random Contact</button>

        function randomActor(contacts) {
          let randomIndex = { contacts }[Math.floor(Math.random()*{ contacts }.length)];
          return 

        }




      </div>
    );
  }
}

export default App;



{/* <tr>
<td>{ actorsArray.name }</td> 
<td>{ actorsArray.pictureUrl }</td> 
<td>{ actorsArray.popularity }</td>
</tr> */}
