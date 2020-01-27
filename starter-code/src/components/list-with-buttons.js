import React, { Component } from "react";
import ContactList from "./contact-list.js";
import contactFile from "../contacts.json";

class ListWithButtons extends Component {

    deleteEvent = (contactId) => {
        console.log("DELETE clicked Id = " + contactId);
        this.setState({
            displayedRows : this.state.displayedRows.filter (c => {return c.id !== contactId})
        });
    } 

    contactFileWithButtons = contactFile.map(e => {
        return ({...e,
                 deleteHandler : () => this.deleteEvent(e.id)
          })          
        });

    state = {
        displayedRows : this.contactFileWithButtons.filter((e,i) => 
                               {return (i >= 0 && i <= 4)})
                             
    }
    
    addContactEvent = () => {
        const randomRow = this.contactFileWithButtons[Math.floor((Math.random() 
                                * this.contactFileWithButtons.length))];      
        for (let c of this.state.displayedRows)
          if (c.id === randomRow.id) return; //contact already displayed
   
        const newDisplayedRows = this.state.displayedRows.slice();   //copy array
        newDisplayedRows.push(randomRow);

        this.setState({
            displayedRows : newDisplayedRows
        });
    }    

    sortByNameEvent = () => {
        this.setState({
            displayedRows : this.state.displayedRows.sort((a,b) => a.name > b.name ? 1 : -1)
        });
    }    

    sortByPopularityEvent = () => {
        this.setState({
            displayedRows : this.state.displayedRows.sort((a,b) => a.popularity > b.popularity ? -1 : 1)
        });
    }    


    render() {

      return (
          <div> 
            <div className="toolbar"> 
              <button onClick={this.addContactEvent}>Add Random Contact</button>
              <button onClick={this.sortByNameEvent}>Sort by Name</button>
              <button onClick={this.sortByPopularityEvent}>Sort by Popularity</button>
            </div>
            <ContactList rows={this.state.displayedRows} />
          </div>
      )
  }
}


export default ListWithButtons;
