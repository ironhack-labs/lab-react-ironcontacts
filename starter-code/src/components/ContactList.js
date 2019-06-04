import React, { Component } from 'react'
import contacts from '../contacts.json'
import TableRow from './TableRow'

const listSize = 5
const firstList = contacts.slice(0, listSize)

//const consolelog = (console.log(firstList))


class ContactList extends Component{

  constructor(){

    super()
    this.state = {
      firstList:firstList,
    }
  }

  addPersonHandler = () => {
    const firstListCopy = [...this.state.firstList] 
    firstListCopy.push(contacts[Math.floor(Math.random() * contacts.length)])
    this.setState({
      firstList: firstListCopy
    })
  }

  sortByName = () => {
    const firstListCopy = [...this.state.firstList] 
    firstListCopy.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
    this.setState({
      firstList: firstListCopy
    })

  }

  sortByPopularity = () => {
    const firstListCopy = [...this.state.firstList] 
    firstListCopy.sort(function(a, b){
      if(a.popularity < b.popularity) { return 1; }
      if(a.popularity > b.popularity) { return -1; }
      return 0;
    })
    this.setState({
      firstList: firstListCopy
    })
  }

  deletePerson = (personidx) => {
    const firstListCopy = [...this.state.firstList] 
    firstListCopy.splice(personidx, 1)
    this.setState({
      firstList: firstListCopy
    })

  }
 
  render(){

    return (

      <div>
        
            <button onClick={()=>this.addPersonHandler()}>
                  Add Random Contact 
            </button>

            <button onClick={()=>this.sortByPopularity()}>
                  Sort by popularity
            </button>

            <button onClick={()=>this.sortByName()}>
                  Sort by name
            </button>
            
            <table className="table">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                  </thead>
                  <tbody>

                        {this.state.firstList.map((person, idx)=>{
                          return <TableRow key={idx} {...person} clickToDelete={() => this.deletePerson(idx)}/>
                        })}
                      
                  </tbody>

              </table>

        </div>
    )
  }
}
export default ContactList
//export default consolelog