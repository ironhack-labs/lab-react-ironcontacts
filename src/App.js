import './App.css';
import contacts from "./contacts.json";
import React from 'react'
import AddContacts from './addContact'



let shortArr = contacts.slice(0, 5)

function NewContacts(props) {
    return(
      <>
        <tr>
          <td><img src={props.pictureUrl} width="50px" alt="thisImage"/></td>
          <td>{props.name}</td>
          {/* <td>{props.id}</td> */}
          <td>{(Math.round(props.popularity * 100) / 100)}</td>
          <td><button onClick={props.deleteBtn}>Delete</button></td>
        </tr>
      </>
    )
}


class App extends React.Component {
  constructor(){
    super();
    this.state = {
        newActorArr: shortArr
    }
  }

  addNewActor = () => {
    this.setState((prevState)=>{
       const randomActor = contacts[Math.floor(Math.random()*contacts.length)]
       return prevState.newActorArr.push(randomActor)
    })
  }
  
  sortActors = () => {
    this.setState((prevState)=>{
      const sortedList = prevState.newActorArr.sort((a, b) => a.name.localeCompare(b.name))
      return {newActorArr: sortedList}
    })
  }

  

  createActor = (contactInfo) => {
    // const arrContactId = this.state.newActorArr.map(actor => actor.id)
    // contactInfo.id = Math.max(...arrContactId) +  1;
    
    contactInfo.id = this.state.newActorArr.length + 1
    contactInfo.imgURL = '';


    this.setState((prevState)=>{

        const newList = [contactInfo, ...prevState.newActorArr];

        return {newActorArr: newList}
    })
  }

  deleteActors = (reqID) => {
    this.setState((prevState)=>{
      const newArr = prevState.newActorArr.filter(function(item) {
        return item.id !== reqID 
      });
        console.log(newArr);
        return {newActorArr: newArr}
    })
  }


  render(){
    return (
      <>
        <div className="App">
          <h1>Iron Contacts</h1>
          <button onClick={this.addNewActor}>Add New Actor</button>
          <button onClick={this.sortActors}>Sort Actors</button>
        <hr/>
        <AddContacts refCreate={this.createActor}/>
        <hr/>

          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                {/* <th>Id</th> */}
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {this.state.newActorArr.map((elem) => {
                  return (
                    <NewContacts 
                      pictureUrl = {elem.pictureUrl} 
                      name = {elem.name} 
                      // id = {elem.id} 
                      popularity = {elem.popularity}
                      deleteBtn = {() => this.deleteActors(elem.id)}/>)
                })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default App;
