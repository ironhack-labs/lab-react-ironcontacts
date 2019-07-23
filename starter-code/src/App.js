import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Contact from './Components/contacts/contact';
import Button from './Components/button/button';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      names: [
       { ...contacts[0]},
       { ...contacts[1]},
       { ...contacts[2]},
       { ...contacts[3]},
       { ...contacts[4]}
      ]

    }
  }


  showContacts = () => {
    return(
      this.state.names.map((eachName, i)=>{
        return(
<Contact 
key={i}
name={eachName.name}
picture={eachName.pictureUrl}
popularity ={eachName.popularity}
delete = {()=>{this.deletethis(i)}}
/>
      
          )
      })
    )

  }

  addRandomContact =()=>{
   let clone = [...this.state.names];
   let random =contacts[Math.floor(Math.random()*contacts.length)];
   clone.push(random);
   this.setState({names: clone})
  }

  SortByName(){

    let clone = [...this.state.names];
  
   clone.sort((a,b)=>{
     if(a.name > b.name){
       return 1;
     }if (b.name > a.name) {
       return -1;
     }
     return 0;
   });


    this.setState({names:clone});

  }

  SortByPop(){
    let clone = [...this.state.names];
  
   clone.sort((a,b)=>{
     if(a.popularity > b.popularity){
       return 1;
     }if (b.popularity > a.popularity) {
       return -1;
     }
     return 0;
   });


    this.setState({names:clone});
  }

  deletethis(theIndex){

    let clone = this.state.names.slice()

    clone.splice(theIndex, 1);

    this.setState({names: clone})
  }
  

  render() {
    return (
      <div className="App">
<Button value="Random" role={ ()=> {this.addRandomContact()} } />
<Button value="Sort By Name" role={ ()=> {this.SortByName()} } />
<Button value="Sort By Popularity" role={ ()=> {this.SortByPop()} } />

 {this.showContacts()}
 
      </div>
    );
  }
}

export default App;
