import React from 'react';
import contacts from '../contacts.json'
import CoolButton from '../components/CoolButton'

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
              <tr key={index} className="">
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
      

  refreshPage = () => {
    window.location.reload(false);
  }
 
      
  render(){
    return(
      <div className="container">

        <div className="field has-addons">
          <p className="control">
            <a CoolButton className="button is-small is-outlined is-dark" onClick = {this.addRandomContact}>
                <i className="fas fa-align-left"></i>
              <span>Add Random Contact</span>
            </a>
          </p>
          <p className="control">
            <a CoolButton className="button is-small is-outlined is-dark" onClick = {this.sortContactsByName}>
                <i className="fas fa-align-center"></i>
              <span>Sort by Name</span>
            </a>
          </p>
          <p className="control">
          <a CoolButton className="button is-small is-outlined is-dark" onClick = {this.sortContactsByPopularity}>
                <i className="fas fa-align-right"></i>
              <span>Sort by Popularity</span>
            </a>
          </p>
        
        <button CoolButton className="button is-small is-outlined is-dark" value="Refresh Contacts" onClick={() => window.location.reload(false)}>Reset Contacts</button>
        </div>


        <div className="container" id="table-container">
        <table key="" className="table is-narrow is-hoverable">
        <thead className="is-bordered">
        <tr>
          <th>Name</th>
          <th>Picture</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {this.showContacts()}
        </tbody>
        </table>
        </div>

        
        
        </div>
    )
}









}

export default ContactList;