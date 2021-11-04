import React from "react"
import {Contacts} from "./Contacts"
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
        <div className="table">
          <div className="table-head">
            <p>Picture</p>
            <p>Name</p>
            <p>Popularity</p>
          </div>

          <div>
            {this.state.contactsToDisplay.map((contact)=>{
               return <Contacts key={contact.id} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity}/>
            })}
          </div>
        </div>
      </>
    )
  }
}