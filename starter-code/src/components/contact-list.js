import React, { Component } from "react";
import ContactRow from "./contact-row.js"

class ContactList extends Component {

  render() {
    
    const rows = this.props.rows.map((e) => 
      <ContactRow key = {e.id}
         pictureUrl = {e.pictureUrl} 
         name = {e.name}
         popularity = {e.popularity}  
         deleteHandler = {e.deleteHandler}
      />
    )  

    return <div> 
              <div className="contact-row">
                <h2>Picture </h2>
                <h2>Name</h2>
                <h2>Popularity</h2>
              </div>
              {rows}
           </div>
  }
}

export default ContactList;
