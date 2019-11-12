import React, { Component } from 'react';
import './App.css'
import contacts from '../src/contacts.json'

class App extends Component {
  
  constructor(props){
    super(props)

   
    this.state = {
        list: contacts.slice(0,5),
        otherContacts: contacts.slice(5),
        sortedPop: false,
        sortedAtoZ: false

    }
  }
  showContacts = () =>{
    
    return this.state.list.map((eachContact, i)=>{
      let popNumb = eachContact.popularity;
      let roundedNumb = popNumb.toFixed(2)
        return(
            <tr className='contentRows' key={i}>
             
           
                        <th className="image">
                             <img className="img" src={eachContact.pictureUrl} alt='contact-pic'/>
                        </th>
                        <th className="name">
                            {eachContact.name}
                        </th>
                        <th className="pop">
                             {roundedNumb}
                        </th>
                        <th className="deleteCol">
                          <button onClick={()=>{this.deleteContact(i)}} className="delete">delete</button>
                        </th>
            
                  
                  
                  </tr>
        )
    })
}

deleteContact = (theIndex) =>{
  let clone = [...this.state.list];
  // step 1 is to grab theinfo out of the state and clone it

  clone.splice(theIndex, 1);
  // step 2 is to do wahtever you want to do to that thing and you can do it in regular javascript

  this.setState({list: clone})
  // step 3 is to take that thing you edited and use it to set the state
}

addRandom = () =>{
  let othersClone = [...this.state.otherContacts];

  let rand = othersClone.splice(Math.floor(Math.random()*othersClone.length), 1)[0]
  
  console.log(rand)


  let clone = [...this.state.list];

  if(rand)
  clone.push(rand);

  this.setState({list: clone, otherContacts: othersClone})
}

sortListByName = () => {
  
  
  let clone = [...this.state.list]
  
  if (this.state.sortedAtoZ === false){
    console.log(this.state.sortedAtoZ)
  let sortedListbyName = clone.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (b.name > a.name) {
        return -1;
    }
    return 0;
});
  this.setState({list: sortedListbyName, sortedAtoZ: true}) 
  } else {
    console.log(this.state.sortedAtoZ)
    let sortedListbyName = clone.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      }
      if (b.name > a.name) {
        return 1;
      }
      return 0;
    });
    this.setState({list: sortedListbyName, sortedAtoZ: false}) 
  }
}





sortListByPop = () => {
  
  console.log("logged")
  let clone = [...this.state.list]


  if (this.state.sortedPop === false){
    console.log(this.state.sortedPop)

    let sortedListByPop = clone.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (b.popularity > a.popularity) {
        return -1;
      }
      return 0;
      
    });
    this.setState({list: sortedListByPop, sortedPop: true})  
  } else {
    console.log(this.state.sortedPop)
    let sortedListByPop = clone.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (b.popularity > a.popularity) {
        return 1;
      }
      return 0;
    });
    this.setState({list: sortedListByPop, sortedPop: false}) 
  }
    
}

  render() {
    return (
    <section className='page'>
   
      <div className='div'> 
      <h1>IronContacts</h1>
      <div className='buttons'>
      <button onClick={this.addRandom} className='addContact'>Add Contact</button>
      <button onClick={this.sortListByName} className='sort'>Sort by name</button>
      <button onClick={this.sortListByPop} className='sort'>Sort by popularity</button>
      </div>
      <table className='table'>
        <thead>
        <tr>
          <th className='header'>Picture</th>
          <th className='header'>Name</th>
          <th className='header'>Popularity</th>
        </tr>
         </thead>
         <tbody>
        {this.showContacts()}
         </tbody>
      </table>
      <br></br>
      </div>
    </section>
      );
   
  }
}


export default App;
