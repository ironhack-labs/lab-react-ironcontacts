import React, {Component} from 'react'
import contacts from '../contacts.json';
import '../index.css'


class IronContacts extends Component {

  state = {
    contacts : 5, 
    datos : contacts.slice(0, 5)
  }

  addRandomContact = () => {
    const random = Math.floor(Math.random() * contacts.length-1);
    //console.log(random)
    this.setState({
      contacts : this.state.contacts + 1,
      datos : [
        ...this.state.datos,
        contacts[random]
      ]
    })
  }

  sortByPopularity = () => {
    const sorted = this.state.datos.sort((a, b) => {
      const popA=a.popularity
      const popB=b.popularity

      if (popA < popB) //sort string ascending
       return 1;
      if (popA > popB)
       return -1;
      return 0; //default return value (no sorting)
     });
     this.setState({
      datos : sorted
    })
  }

  sortByName = () => {
    const sorted = this.state.datos.sort((a, b) => {
      const nameA=a.name.toLowerCase()
      const nameB=b.name.toLowerCase();
      if (nameA < nameB)
       return -1;
      if (nameA > nameB)
       return 1;
      return 0;
     });
     this.setState({
      datos : sorted
    })
  }

  deleteContact(index){
    return () => {
      this.state.datos.splice(index,1)
      this.setState({
        datos : this.state.datos
      })
    }
  }

  parsePopularity(pop){
    console.log(pop)
    const num = parseFloat(pop).toFixed(2);
    return num
  }

  render(){
    //console.log(Contacts)
    console.log(this.state)
    return(
      <div>       
        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>

        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>

          {this.state.datos.map((person, index) =>{   //array.slice(0, 5).map((item)
            return (
              <tr key={index}>
                <th><img src={person.pictureUrl} alt="Influencer" className="img" /></th>
                <th>{person.name}</th>
                <th>{this.parsePopularity(person.popularity)}</th>
                <th><button className="danger" onClick={this.deleteContact(index)}>Delete</button></th>
              </tr>)}
            )}

        </table>
      </div>
    )
  }

}



export default IronContacts