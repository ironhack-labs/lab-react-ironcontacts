import React, { Component } from 'react'
import actor from "./actor.css"
import contacts from "../contacts.json"
import Celebs from "./celeb"

class Actors extends Component{
    state = {
        constanza:contacts.slice(0,5),
        random:contacts[Math.floor(Math.random()*contacts.length)]
    }
    addRandomContact=()=>{
            let newArr = [...this.state.constanza]
            newArr.push(this.state.random)
            this.setState({constanza:newArr,random:contacts[Math.floor(Math.random()*contacts.length)]
            })
    }   

    sortByName = () => {
        let arr = [...this.state.constanza]
        let sortArr = arr.sort(function(a, b) {
            var x = a.name; var y = b.name;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
        });

        this.setState({constanza:sortArr})
    }
    
    sortByPopularity = () => {
        let arr = [...this.state.constanza]
        let sortArr = arr.sort(function(a, b) {
            var x = a.popularity; var y = b.popularity;
            return ((x > y) ? -1 : ((x < y) ? 1 : 0))
        });

        this.setState({constanza:sortArr})
    }
    
    removePeople = e => {
        var array = [...this.state.constanza]; // make a separate copy of the array
          array.splice(e, 1);
          this.setState({constanza: array});
        }
      
    
    render() {
        return (
            <div>
                <button onClick = {this.addRandomContact}>Add Random Contact!</button>
                <button onClick = {this.sortByName}>Sort by name</button>
                <button onClick = {this.sortByPopularity}>Sort by Popularity</button>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.state.constanza.map((contact,index)=>
                        <Celebs key={index} clickToDelete = {this.removePeople.bind(this,index)} name={contact.name} popularity={contact.popularity} pictureUrl={contact.pictureUrl}/>))}
                    </tbody>
                </table>
            </div>
        )
    }
}



export default Actors