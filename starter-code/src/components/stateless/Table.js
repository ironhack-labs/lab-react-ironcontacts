import React, {Component} from 'react'
import TableContent from './TableContent'
import contacts from '../../contacts.json'

class Table extends Component {
  
  constructor() {  
    
    super();

    this.state = {
    
      actorSize: contacts.slice(0, 5)

    }
  }



  addRandomHandler = randomActor => {

    let actorSizeCopy = [...this.state.actorSize]
    actorSizeCopy.push(contacts[Math.floor(Math.random()*contacts.length-1)])

    this.setState({
      actorSize: actorSizeCopy
    })
  }

  sortNameHandler = randomActor => {

    let actorSizeCopy = [...this.state.actorSize]
    
    actorSizeCopy.sort(function (a, b) {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0;
    })
    this.setState({
      actorSize: actorSizeCopy
    })
  }
  
  sortPopularityHandler = randomActor => {

    let actorSizeCopy = [...this.state.actorSize]
    
    actorSizeCopy.sort((a,b) => {
      return b.popularity - a.popularity
    })
    this.setState({
      actorSize: actorSizeCopy
    })
  }

  deleteHandler = index => {
    const actorSizeCopy = [...this.state.actorSize]
    actorSizeCopy.splice(index, 1)
    this.setState({
        actorSize: actorSizeCopy
    })
}


    
    render() {
      
      return (
      <section>
        <button className="button" onClick={this.addRandomHandler}>Add random actor</button>
        <button className="button" onClick={this.sortNameHandler}>Sort by Name</button>
        <button className="button" onClick={this.sortPopularityHandler}>Sort by Popularity</button>

        <table className="table">
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            {this.state.actorSize.map((actor,index) => <TableContent {...actor} key={index} delete={() => this.deleteHandler(index)}/>)}
          </tbody>
        </table>
      </section>
      
      )
    }
}
  

export default Table