import React, {Component} from 'react';
import './App.css';
import contacts from './contacts.json';
import Table from './components/Table';


class App extends Component{

  state = {

    celebrities: contacts,

    newcelebrities: contacts.slice(0,5)
  }
  //slice= cuts off, first paremeter where to start, the second how many.

    
  addContact = () =>  {
    //defining how you're going to get random celebrity by the index
    //Math.random gives you a number between 0 and 1, but that number is too low so we need to multiple tht number with ahigher number
    //
      let storedCelebrity = this.state.celebrities[Math.round(Math.random()*this.state.celebrities.length)]
      console.log(storedCelebrity)

    this.setState({
      //concat brings together two elements
      newcelebrities: this.state.newcelebrities.concat([storedCelebrity])
    })

  }

  sortByName = () =>  {
    //if a is more thanb return a else return b
        let sortingName  =  this.state.newcelebrities.sort((a,b) => {return a.name < b.name ?  -1 :  1})

    this.setState({

            newcelebrities: sortingName

    })

  }

  sortByPopularity = () =>  {

    let sortingPopularity =  this.state.newcelebrities.sort((a, b) => { return b.popularity - a.popularity})

    this.setState({
      
      newcelebrities: sortingPopularity

    })

  }

  deleteContact = (name) => {

    let deleteContact = JSON.parse(JSON.stringify(this.state.newcelebrities))
    let index = deleteContact.findIndex((contact) => {
      return contact.name == name;
    })
//want to delete 1, so 1
    deleteContact.splice(index, 1);
    this.setState({
      newcelebrities: deleteContact
    })

  }

  render () {
    return (
      <div>

        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Name</button>
        <button onClick={this.sortByPopularity}>Popularity</button>
        

        {this.state.newcelebrities.map((celebrity, index) => {
          return <Table 
          key={index}
          pictureUrl={celebrity.pictureUrl}
          name={celebrity.name}
          popularity={celebrity.popularity}
          delete={this.deleteContact}
          
          /> 

        })

      }
      </div>


    )
  }
}

    export default App;