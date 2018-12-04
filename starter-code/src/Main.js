import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'


class Main extends Component {
    state = {
        contactList : contacts,
        firstFive : contacts.slice(0,5)
    }

    addRandomContact = () => { // works
        const newContactList = [...this.state.firstFive] 
        let randomNum = Math.floor((Math.random()*200)+1);

        if(randomNum !== this.firstFive){
            newContactList.push( 
              contacts[randomNum]
            )
        } else {
            randomNum;
        }
        this.setState({ 
            firstFive:newContactList
        })
    }
        
    sortByName = () => {  // works
       let sortedNames = [...this.state.firstFive]

       sortedNames.sort((a,b)=>{
        if(a.name > b.name){
            return 1;
        } 
        if(a.name < b.name){
            return -1;
        } 
        else {
            return 0;
        }
       })
        this.setState({
            firstFive:sortedNames
    })
    }

    sortByPop = () => {  // works
        let sortedPop = [...this.state.firstFive]
 
        sortedPop.sort((a,b)=>{
         if(a.popularity > b.popularity){
             return 1;
         } 
         if(a.popularity < b.popularity){
             return -1;
         } 
         else {
             return 0;
         }
        })
         this.setState({
             firstFive:sortedPop
     })
     }

    deleteContact = (i) => {  // works
        const contacts = [...this.state.firstFive] 
        contacts.splice(i, 1); 
        this.setState({ 
            firstFive:contacts
        })
    }

  render() {
    const listItems = this.state.firstFive.map((theContact, index) => { 

        return  (                     
                    <li key={index} >
                        <h2>Name: {theContact.name}</h2>  
                        <img src={theContact.pictureUrl} width="100px"/> 
                        <h2>Popularity: {theContact.popularity}</h2>  
                         
                        <button onClick={() => this.deleteContact(index)}>Delete Contact</button> 

                    </li>
        )
    })

        return (
            <div>
                <button onClick={this.addRandomContact} className="addContact">Add a Contact</button>
                <button onClick={this.sortByName} className="">Sort by Name</button>
                <button onClick={this.sortByPop} className="">Sort by Popularity</button>
                {listItems}
            </div>
        )
    }

}







export default Main;