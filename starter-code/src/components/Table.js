import React, {Component} from 'react';
import contacts from '../contacts.json'
import Listcontacts from "./Listcontacts"


class Table extends Component  {
    constructor(){
        super()
        this.state = {
          actors: contacts.slice(0, 5)
        }
      }
    
    
    
    
    clickHandler = () =>{
    console.log("hola")
      const acotrsCopy = [...this.state.actors]
       let r = Math.floor(Math.random() * 30) +5
      acotrsCopy.push(contacts[r])
      console.log(acotrsCopy)
      this.setState ({
     
        actors: acotrsCopy
        //aco Math.floor(Math.random() * 5)
      })
    }
    
    sortHandler =() =>{
     let sorting = [...this.state.actors]
    sorting.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      
      return 0;
    });
    this.setState({
      actors: sorting
    })
    
    
    }
    sortpopularity = () =>{
     let sortingPop = [...this.state.actors]
    sortingPop.sort(function(a, b) {
      return b.popularity - a.popularity;
      
    });
    this.setState({
      actors: sortingPop
    })
    }
    deleteActors = Index =>{
      let deleteAct = [...this.state.actors]
          // hacemos una copia del Array para no manipoular el estado original
          deleteAct.splice(Index, 1)
      this.setState({
          actors: deleteAct  // asignamos la copia
      })
    }


    render(){
 console.log(this.state.actors)
return (
    <section>
    <button className="random" onClick={this.clickHandler}>Add Random contacts</button>
        <button className="sort-name" onClick={this.sortHandler}>Sort by name</button>
        <button className="sort-pop" onClick={this.sortpopularity}>Sort by popularity</button>  
    <table className="table">
        <tbody>
            <tr className="present">
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                
            </tr>
            {this.state.actors.map((actor, indx) => <Listcontacts {...actor} key={indx} delete={() => this.deleteActors(indx)}/>)}
            
        </tbody>
    </table>
    </section>
    
    )
    }
}


export default Table