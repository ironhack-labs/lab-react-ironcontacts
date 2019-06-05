import React, {Component} from "react"

import contacts from '../contacts.json'
import Cards from './Cards'

const contactsList = contacts.slice(0, 5)

class Contacts extends Component {
  constructor() {
    super()

    this.state = {
    contactsList
  }
  }
  render () {
    console.log(this.state.contactsList)
    return (
      <div>
        {
          this.state.contactsList.map((contact, index) =>  {
            return <Cards key={index} {...contact} />
          })
        }
      </div>
    )
  }
}


export default Contacts