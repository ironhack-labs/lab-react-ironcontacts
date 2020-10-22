
import React, { Component } from 'react'
//import React from 'react';
//import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json';



export default class App extends Component {
   
  state= {
    limits:contacts.slice(0,5)
}

  addRandomContact = () => {
    const contactCopy=[...this.state.limits];
    const randomContact=contacts[Math.floor(Math.random()*contacts.length)];
    if(!contactCopy.includes(randomContact)){
        contactCopy.push(randomContact);
    }
    this.setState({limits:contactCopy})
  }

  sortByName = () => {
      const contactCopy=[...this.state.limits];
      contactCopy.sort((a,b)=>a.name.localeCompare(b.name));

      this.setState({limits:contactCopy})
  }

  sortByPopularity = () => {
      const contactCopy = [...this.state.limits];
      contactCopy.sort((a,b)=> b.popularity-a.popularity)

      this.setState({limits:contactCopy})
  }

  delectContact = (index) => {
   this.state.limits.splice(index,1);
   this.setState({limits:this.state.limits});

  }

 render() {
     return (
         <div>
             <h1>Ironhack Contacts</h1>
             <div>
                 <button onClick={this.addRandomContact}>AddRandom</button>
                 <button onClick={this.sortByName}>SortByName</button>
                 <button onClick={this.sortByPopularity}>SortByPopularity</button>
             </div>
             <table>
             <tr>
                 <th>Picture</th>
                 <th>Name</th>
                 <th>Popularity</th>
                 </tr>

                 {this.state.limits.map((item,key)=>(
                     <tr key={item}>
                       <td>
                           <img src={item.pictureUrl} alt='person' height='100px'/>
                       </td>
                       <td>
                           {item.name}
                       </td>
                       <td>
                           {item.popularity}
                       </td>
                       <td>
                           <button onClick={()=>this.delectContact(key)}>Delete</button>
                       </td>
                       
                     </tr>
                 ))}
                

             </table>
         </div>
     )
 }
}

