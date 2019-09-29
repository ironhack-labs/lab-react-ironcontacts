import React from 'react';
import contacts from '../contacts.json';

class ActorsList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      showActors: contacts.slice(0,5),
      allActors: contacts.slice(5),
      asc: true,
    }
  }


  displayActors = () =>{
    return this.state.showActors.map((eachAct, index) =>{
      return(
        <tr key ={index}>
          <td>
            <img alt='Actor' style= {{width: '100px'}} src= {eachAct.pictureUrl} />
          </td>
          <td>{eachAct.name}</td>
          <td>{eachAct.popularity}</td>
          <td>
            <button onClick ={()=>{this.deleteActor(index)}}>
              Delete
            </button>
          </td>
        </tr>
      )
    })
  }


  deleteActor = (deleteSelectedActor) =>{
    let duplicate =[...this.state.showActors]
    duplicate.splice(deleteSelectedActor, 1);
    this.setState({showActors: duplicate});
  }


  addNewActor = () =>{
    let visibleActor =[...this.state.showActors];
    let nonVisibleActor =[...this.state.allActors];
    
    let randomAct = Math.floor(Math.random()* nonVisibleActor.length)
    
    visibleActor.unshift(...nonVisibleActor.splice(randomAct,1))

    this.setState({
      showActors: visibleActor,
      allActors: nonVisibleActor,
    })
  }

  sortThisColumn = (sortThis) =>{
    let duplicate =[...this.state.showActors];
    if (this.state.asc){
      duplicate.sort((a,b) =>{
        if (a[sortThis] > b[sortThis]){
            return 1
        } else if (b[sortThis] > a[sortThis]){
            return -1
        } else {
            return 0
        }
      })
    } else {
      duplicate.sort((a,b) =>{
        if (a[sortThis] > b[sortThis]){
            return -1
        } else if (b[sortThis] > a[sortThis]){
            return 1
        } else {
            return 0
        }
      })
    }
      this.setState({
        showActors: duplicate,
        asc: !this.state.asc,
      })
  }


  render(){
    return(
      <div className="wholeContacts">
      <div className="contacts">
        <h1>IronContacts</h1>
        <div className="filterButtons">
        <button onClick ={this.addNewActor}>
          Add Random Contact
        </button>
        <button onClick ={()=>{this.sortThisColumn('name')}}>
          Sort By Name
        </button>
        <button onClick ={()=>{this.sortThisColumn('popularity')}}>
          Sort By Popularity
        </button>
        </div>

        <table>
            <tbody>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Action</th>
                </tr>
                {this.displayActors()}
            </tbody>
        </table>
      </div>
    </div>
    )
  }

}

export default ActorsList;
