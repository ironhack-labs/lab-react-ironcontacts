import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import CelebritiesList from './Components/CelebritiesList'
import './CelebritiesList.css';



export default class App extends React.Component {

  state = {
    celebrities: contacts.slice(0,5)
  }

  addRandomCelebrity = () => {
    const randomNum = Math.floor(Math.random() * (contacts.length-1));
    console.log(randomNum, contacts[randomNum])
    const randomCeleb = contacts[randomNum]
    this.setState({
      celebrities: [...this.state.celebrities, randomCeleb]
    })
   
    }

    sortBynameCelebrity = () => {
      const sortCelebName = this.state.celebrities.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
    console.log(sortCelebName)
      this.setState({
        celebrities: sortCelebName
      })
     
      }

      sortByPopularityCelebrity = () => {
        const sortCelebPop  = this.state.celebrities
        this.state.celebrities.sort(function(a, b) {
          return a.popularity - b.popularity;
        });
      
      console.log(sortCelebPop)
        this.setState({
          celebrities: sortCelebPop
        })
       
        }  


  render() {
    return (
      <div>

<div className="btn-container">
      <div>
      <button className="btn" onClick={this.addRandomCelebrity}>Add a random contact</button>
      </div>

      <div>
        <button className="btn" onClick={this.sortBynameCelebrity}>Sort By Name</button>
      </div>

      <div>
        <button className="btn" onClick={this.sortByPopularityCelebrity}>Sort By Popularity</button>
      </div>

      </div>

      <div>
        <h1>Iron Contacts</h1>
        <CelebritiesList celebrities={this.state.celebrities} />
      </div>

      
      </div>
      
     )
  }
}