import React from "react"
import Contacts from "./Contacts"
import contactsArr from "./contacts.json"

export default class Main extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      contactsToDisplay: contactsArr
    }
  }

  render(){
    return (
      <>
        <div className="contacts-list">
          {this.state.contactsToDisplay.map((contact)=>{
            return <Contacts key={contact.id} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity}/>
            
          })}
  
        </div>
      </>
    )
  }
}