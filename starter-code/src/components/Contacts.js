import React from 'react';
import contacts from '../contacts.json'

class ContactList extends React.Component {

  constructor(props){
    super(props)

    this.state = {
        list: contacts.slice(0,5),
    }
  }

  showContacts = () =>{
    
    // let newList = this.state.newList
    
    console.log(this.state.list)

    return this.state.list.map((eachContact, index)=>{

        return (
            
          // <table key={index}>
          // <thead>
          // <tr>
          //   <th>Picture</th>
          //   <th>Name</th>
          //   <th>Popularity</th>
          //   <th>Action</th>
          // </tr>
          // </thead>
          // <tbody>
              <tr>
                <td>{eachContact.name}</td>
                <td><img src={eachContact.pictureUrl} alt=""/></td>
                <td>{eachContact.popularity.toFixed(2)}</td>
                <td><button onClick = {
                  ()=>{
                    this.deleteContact(index)
                  }
                }> Delete </button></td>
              </tr>
)
})
}


addRandomContact = () =>{
  // e.preventDefault();
  
  let shortList = [...this.state.list]
  
  let entireList = [...contacts].slice(5)
  // console.log(entireList)
  
  let randomIndex = Math.floor(Math.random() * entireList.length)
  
  let randomContact = entireList[randomIndex]
  // let newContact = {name: this.state.randomContact.name, pictureUrl: this.state.randomContact.pictureUrl}
  
  // console.log(randomContact)
  
  shortList.push(randomContact)
  
  console.log(shortList)
  
  this.setState({
    list: shortList,
  })
  
    // return (
    
    //     <tr>
    //       <td>{randomContact.name}</td>
    //       <td><img src={randomContact.pictureUrl} alt=""/></td>
    //       <td>{randomContact.popularity}</td>
    //       <td><button onClick = {
      //           ()=>{
        //             this.deleteContact(randomIndex)
        //           }
        //         }> Delete </button></td>
        //     </tr>
        
        //   )
        
        
        
      } //end of grab random contact



  sortContactsByName = () =>{
    // e.preventDefault();
    
    let listToSort = [...contacts]

    listToSort.sort(function(a, b){
      var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase() 
      if (nameA < nameB) {//sort string ascending
        return -1
      } 
      if (nameA > nameB) {
        return 1
      }
      return 0 //default return value (no sorting)
      })
    
    
    this.setState({
      list: listToSort,
    })
    
  }

  sortContactsByPopularity = () =>{
    // e.preventDefault();
    
    let listToSort = [...contacts]

    listToSort.sort(function(a, b){
      var popA=a.popularity, popB=b.popularity 
      if (popA < popB) {//sort string ascending
        return 1
      } 
      if (popA > popB) {
        return -1
      }
      return 0 //default return value (no sorting)
      })
    
    
    this.setState({
      list: listToSort,
    })
    
  }

      
      
  updateTheValue = (e) =>{
    // this.state[e.target.name] = e.target.value
    // never do this
    // never update the state directly
    // instead use this.setState
    this.setState({
      [e.target.name]: e.target.value
    })   
  }
      
      
  deleteContact = (whichOne) =>{
    let copy = [...this.state.list];
    copy.splice(whichOne, 1);
    this.setState({list: copy})
  }
      
      
  render(){
    return(
      <div>

        <button onClick = {this.addRandomContact}
          >Add Random Contact</button>
        <button onClick = {this.sortContactsByName}
          >Sort by Name</button>
        <button onClick = {this.sortContactsByPopularity}
          >Sort by Popularity</button>
            
        <table key="">
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {this.showContacts()}
        </tbody>
        </table>

        
        
        </div>
    )
}









}

export default ContactList;