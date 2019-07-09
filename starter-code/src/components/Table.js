import React, { Component } from 'react'
import contacts from './../contacts.json'
import ActorCard from './ActorCard'


class Table extends Component {
   
    /*constructor(){
        super()
        this.state= contacts.splice(0,5)  
    }*/

    state={
        value:  contacts.splice(0,5)  
    }

    handleclick = (evt)=> {
        let nbActor=contacts.length
        let randomIndex=Math.floor(Math.random()*nbActor)
        let randomActor= contacts[randomIndex]
        console.log("value",this.state.value)
        console.log("random", randomActor)
        console.log("typeof", typeof(this.state.value))
        this.state.value.push(randomActor)

        console.log( this.state.value)

        //this.setState( state => state.push(contacts[randomIndex])  )
        this.setState( {value: this.state.value})
    }

    render(){
        return (
            <React.Fragment>

            <button onClick={this.handleclick}> Add Random Contact </button>

            <table className="table-actors"> 
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {this.state.value.map( (contact, index) => (
                            <ActorCard key={index}
                                picture={contact.pictureUrl}
                                name={contact.name}
                                popularity={contact.popularity} 
                            />     
                    ))} 
                 </tbody>     
            </table>

            </React.Fragment>

        )
    }
}


export default Table;