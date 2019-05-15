import React from 'react';
import './App.css';
import Contacts from './contacts.json'

class Actors extends React.Component {

  state = {
    people: Contacts,
    somePeople: Contacts.splice(0, 5),
}

getRandom = () => {
  let newPeopleArray = this.state.somePeople
  // console.log("random person ----- ", this.state.people[Math.floor(Math.random()*this.state.people.length)])
  newPeopleArray.push(this.state.people.splice(Math.floor(Math.random()*this.state.people.length+1),1)[0])
  // this.setState.somePeople = newPeopleArray;
  this.setState({
    somePeople: newPeopleArray
  })
  // this.state.somePeople = newPeopleArray;
}


showPeople = () => {
  let copySomePeople = this.state.somePeople.map((eachPerson, i)=>{
  return (
        <div key={i}>
          <h3>{eachPerson.name}</h3>
          <img width="100px" src={eachPerson.pictureUrl}/>
          <i>{eachPerson.popularity}</i>
          <button onClick={() => this.deletePeople(i)}>Delete</button>
         
        </div>
      )
    })
    return copySomePeople
}

deletePeople = (j) => {
let newSomePeople=[...this.state.somePeople]
newSomePeople.splice(j,1)
this.setState({
  somePeople:newSomePeople
})
}

sortPeople = (e) => {
  let newSomePeople=[...this.state.somePeople]
  let key = e.target.name
  newSomePeople.sort(function(a, b){
    if(a[key] < b[key]) { return -1; }
    if(a[key] > b[key]) { return 1; }
    return 0;
  })

  this.setState({
    somePeople:newSomePeople
  })
}


// filterContacts = (e) => {
//   let newPeople = this.state.somePeople.filter((eachPerson,i)=>{
//     console.log(eachPerson)
//     return eachPerson.name.includes(e.target.value)
//   })
//   this.setState({
//     somePeople:newPeople
//   })
// }


render(){

  console.log("this is the state ", this.state)
  
return (
  <div>
    <h2> The People </h2>
    {/* <input type='text' onChange={this.filterContacts} ></input> */}
    <button onClick={(e) => this.getRandom()}> Get Random </button>
    <button name="name" onClick={this.sortPeople}>Sort Contacts By Name</button> 
    <button name="popularity" onClick={this.sortPeople}>Sort Contacts By Popularity</button> 
    {this.showPeople()}
  </div>
  );
}
}
  export default Actors
