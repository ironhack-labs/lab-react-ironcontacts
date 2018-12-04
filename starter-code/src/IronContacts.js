import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './Contacts.json'

class IronContacts extends Component {
    state = {
        stars : contacts,
        someStars: contacts.slice(0,5),
        style : { height: "4vw", textAlign: "center"},
    }
    addStar(){
        let randomNum = Math.floor(Math.random()*contacts.length)
        let randomStar = this.state.stars[randomNum]
        let newStars = [...this.state.someStars]
        if(!newStars.includes(randomStar)){
            newStars.push(randomStar)
            this.setState({
                someStars: newStars 
            })
        }
    }
    sortByName(){
        let sortedNames = [...this.state.someStars]
       let sortarr = (a, b)=>{
           if(a.name < b.name){
              return -1 
           }
           if(a.name > b.name){
               return 1
           }
           return 0
           
       }
       sortedNames.sort(sortarr)
       this.setState({
           someStars: sortedNames
       })
    }
    sortByPopulartty(){
        let sortedPopulartity = [...this.state.someStars]
        let sortarr = (a, b)=>{
            if(a.popularity < b.popularity){
               return -1 
            }
            if(a.popularity > b.popularity){
                return 1
            }
            return 0
            
        }
        sortedPopulartity.sort(sortarr)
        this.setState({
            someStars: sortedPopulartity
        })

    }
    deleteCeleb = (i) => {
        const celeb = this.state.someStars;
        celeb.splice(i, 1); 
        this.setState({  
            someStars:celeb
        })
    }

  render() {
      const listCelebs = this.state.someStars.map((eachStar, index) =>{
           return(
            <table>
            <tr>
              <td> <img src={eachStar.pictureUrl} style = {this.state.style}/></td>
              <td>{eachStar.name}</td>
              <td>{eachStar.popularity}</td>
              <button onClick={() => this.deleteCeleb(index)}> Delete </button>
            </tr>
          </table>
           )
      })

    return (
      <div >
      <h1>IronContacts </h1>
      <button onClick ={()=>this.addStar()}>Add random start</button>
      <button onClick ={()=>this.sortByName()}>Sort by name</button>
      <button onClick ={()=>this.sortByPopulartty()}>Sort by popularity</button>


      <table >
        <tr>
            <th>Picture</th>
            <th>Name</th> 
            <th>Popularity</th>
         </tr>
         <tr>
             <td>{listCelebs} </td>
            
         </tr>


      </table>
      </div>
    );
  }
}

export default IronContacts;