import React, { Component } from 'react';
import contacts from '../contacts.json';
import Row from './Row'

class TableBody extends Component {
   
      state = { 
         contacts: contacts,
         contactsToShow:contacts.splice(0,5),
        
      }
   
    
    
    clickHandler = () =>{
        
        let random = this.state.contacts[Math.floor(Math.random()*contacts.length)]
        let addedRandom=this.state.contactsToShow
        addedRandom.push(random)
        this.setState({
            contactsToShow:addedRandom
        })
       
      }
   
    sotByNameHandler=()=>{
       let arr=this.state.contactsToShow;
       arr.sort((a, b) => {
         a = a.name.toLowerCase();
         b = b.name.toLowerCase();
    
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
        this.setState({
            contactsToShow:arr
        })
    }
    
    sotByPopHandler=()=>{
        let arr=this.state.contactsToShow;
        arr.sort((a, b) => {
            return b.popularity - a.popularity;
        });

        this.setState({
            contactsToShow:arr,
        })
    }

    deleteContactHandler = (contactID) => {
    
        const filtered = this.state.contactsToShow.filter(contact => contact.id !== contactID)
        this.setState({
            contactsToShow:filtered,
        });
      };
    
    render() {
        
        return (
        <>
        <h1 id='title'>IronContacts</h1>
            <button onClick={()=>this.clickHandler()}>Add Random!</button>
            <button onClick={()=>this.sotByNameHandler()}>Sort by name!</button>
            <button onClick={()=>this.sotByPopHandler()}>Sort by popularity!</button>
        <table id='contacts'>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr> 
            </thead>
            <tbody>
                {this.state.contactsToShow.map(contact => {
                    const { id } = contact //destructuring
                    return (

                    <Row key={id}
                    {...contact}
                    clickToDelete={() => this.deleteContactHandler(contact.id)}
                        />
            
                )
                })}
            </tbody>

            </table>
        </>
        )
    }
   
}

export default TableBody //exporting a component make it reusable and this is the beauty of react