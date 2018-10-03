import React, {Component} from 'react'
import contacts from '../contacts.json'
import ListDisplay from '../components/ListDisplay'

class ListContainer extends Component{
    state = {
      contacts:[contacts]
    }

    showContact = (contact,index) =>{
      return <ListDisplay {...contact} key={index}/>
    }

    render(){
      console.log(this.showContact)
      const {contacts} = this.state
      return(
        <div className='flex-list'>
     {contacts.map(this.showContact)}
    </div>
      )
    }
}

export default ListContainer