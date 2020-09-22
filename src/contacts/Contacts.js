import React from "react";
import contacts from './contacts.json';
import './Contacts.css';

const actors = contacts.slice(0,5);
console.log('list of actors: ', actors)

class ContactList extends React.Component {
    state = {
        actorsList: actors
    };
    render(){
        const { actorsList } = this.state;
        console.log('actorsList: ', actorsList)
        return (
            <div>
            <h1 className="table-title">IronContacts</h1>
            <div className="table-display">
            <table>
                <tr className="table-header">
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                { actorsList.map((actor, index) => {
                    return (
                        <tr className="table-content">
                        <th><img className="actor-image" src={actor.pictureUrl}/></th>
                        <th>{actor.name}</th>
                        <th>{actor.popularity.toFixed(2)}</th>
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