import React, { Component } from "react";
import contacts from '../contacts.json';
export class IronContacts extends Component {

    state = {
        contacts: contacts.slice(0,5),
    };

    addRandomContact = (e) => {
        const i = Math.floor(Math.random() * contacts.length);
        const newContactList = [...this.state.contacts,contacts[i]];
        this.setState({ 
            contacts: newContactList,
        });
        console.log(newContactList)

    };
 
    sortByName = () => {
        this.setState(
          {
            contacts: [...this.state.contacts].sort((a, b) =>
              a.name.localeCompare(b.name)
            ),
          }
        );
      };

      sortByPop = () => {
        this.setState(
          {
            contacts: [...this.state.contacts].sort((a, b) =>
              b.popularity - a.popularity
            ),
          }
        );
      };

      removeContact= (i) => {
        this.setState(
          {
            contacts: [...this.state.contacts.filter((e,index)=>index!=i)]
          }
        );
      };


    render() {

    return (  
    <div>
    <button onClick={this.addRandomContact}>Add Random Contact</button>
    <button onClick={this.sortByName}>Sort By Name</button>
    <button onClick={this.sortByPop}>Sort by Popularity</button>

    <table>  <thead>
        <tr>
            <th>pic</th>
            <th>name</th>
            <th>pop</th>
            <th>action</th>

        </tr>
        </thead>
        <tbody>
        {this.state.contacts.map((e,i)=>(
    <tr><td><img className="pic" src={e.pictureUrl} alt="contact infos"/></td> <td className="name" >{e.name}</td> <td className="pop" >{e.popularity}</td><td><button onClick={()=>this.removeContact(i)}>Delete</button></td></tr>
        ))}
        </tbody>
</table>
    </div>

    )
    }

}

export default IronContacts