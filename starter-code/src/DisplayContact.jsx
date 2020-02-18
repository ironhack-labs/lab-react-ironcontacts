import React, {Component} from 'react'
import allContacts from './contacts.json';



export default class DisplayContact  extends Component  {
state = {newArray : allContacts.splice(0,5)}

handleClickRandom =e => {
     console.log("coucou")
    const randomIndex = Math.floor(Math.random() * allContacts.length);
    const randomActor = allContacts[randomIndex];
    const contactsCopy = [...this.state.newArray];
    console.log(contactsCopy)
    contactsCopy.push(randomActor);
    allContacts.splice(randomIndex, 1);
    this.setState({ newArray: contactsCopy })
}

handleSortByName = e => {
    console.log("Hello there!")
    const contactsCopy = [...this.state.newArray]
    contactsCopy.sort((a,b) => {
          if(a.name > b.name)
          return 1
          if (a.name < b.name)
          return -1
          
    })
    this.setState({ newArray: contactsCopy })
}

handleSortByPopularity = e => {
    console.log("Hello!")
    const contactsCopy = [...this.state.newArray]
    contactsCopy.sort((a,b) => {
          if(a.popularity > b.popularity)
          return -1
          if (a.popularity < b.popularity)
          return 1
          
    })
    this.setState({ newArray: contactsCopy })
}

handleDelete = i => {
    console.log("wesh")
    const contactsCopy = [...this.state.newArray]
    contactsCopy.splice(i, 1)
    this.setState({ newArray: contactsCopy })
}


render(){
    return (
        <div>
        <button onClick={this.handleClickRandom}
        >Add random contact</button>
        <button onClick={this.handleSortByName}>Sort by name</button>
        <button onClick={this.handleSortByPopularity}>Sort by popularity</button>
        <table className="iron-contacts">   
        <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {this.state.newArray.map((c, i) => (
              <tr key={i} className="contactRow">
               <td><img src={c.pictureUrl}></img></td>
                <td>{c.name}</td>  
                <td>{c.popularity}</td>  
                <td><button onClick={() => this.handleDelete(i) }>Delete</button></td>
             </tr>
            ))

            }
 
        </tbody>
        </table>
        </div>
    )}
}
