import React from "react";
import contacts from './contacts.json';
import './Contacts.css';

const actors = contacts.slice(0,5);



class ContactList extends React.Component {
    state = {
        actorsList: actors
    };

    addRandom = () => {
        const copyActorsList = this.state.actorsList;
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
        if(!copyActorsList.includes(randomContact)){
            copyActorsList.push(randomContact)
             }
            this.setState( {actorsList: copyActorsList} )
             };
    
    sortByName = () => {
        const sortedNames = this.state.actorsList.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
            this.setState( {actorsList: sortedNames} )
            };
    
    sortByPopularity = () => {
        const sortedPopularity = this.state.actorsList.sort((a, b) =>
          a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0);
            this.setState( {actorsList: sortedPopularity} )
      };
    
    deleteContact = (index) => {
        const editedActorsList = this.state.actorsList;
        editedActorsList.splice(index, 1);
            this.setState( {actorsList: editedActorsList} )
    };
    
    render(){
        const { actorsList } = this.state;
        console.log('actorsList: ', actorsList)
        return (
            <div>
            <h1 className="table-title">IronContacts</h1>
            <button onClick={this.addRandom} className="random-button"> Add Random Contact </button>
            <button onClick={this.sortByName} className="sort-name-button"> Sort by Name </button>
            <button onClick={this.sortByPopularity} className="sort-pop-button"> Sort by Popularity </button>
            <div className="table-display">
            <table>
                <tr className="table-header">
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
                { actorsList.map((actor, index) => {
                    return (
                        <tr className="table-content">
                        <th><img className="actor-image" src={actor.pictureUrl}/></th>
                        <th>{actor.name}</th>
                        <th>{actor.popularity.toFixed(2)}</th>
                        <th><button onClick={this.deleteContact(index)} className="delete-button"> Delete </button></th>
                        </tr>
                    )
                })}
            </table>
            </div>
            </div>
        )
  }
}
  
  export default ContactList;
