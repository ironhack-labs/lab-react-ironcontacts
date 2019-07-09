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

    handleRandom = (evt)=> {
        let nbActor=contacts.length
        let randomIndex=Math.floor(Math.random()*nbActor)
        let randomActor= contacts[randomIndex]
        this.state.value.push(randomActor)
        this.setState( {value: this.state.value})
    }

    handleName = () =>{
        this.state.value.sort( (a,b) =>  (a.name < b.name) ? -1 : ( (a.name > b.name) ? 1:0 ) )
        this.setState( {value: this.state.value})
    }

    handlePopularity = () =>{
        this.state.value.sort( (a,b) => (a.popularity < b.popularity) ? -1 : ( (a.popularity > b.popularity) ? 1:0 )    )
        this.setState( {value: this.state.value})
    }

    handleDelete = (index)=>{
        let actors=[...this.state.value]
        actors.splice(index, 1)
        this.setState( {value: actors}, () => console.log(this.state))
    }


    render(){
        return (
            <React.Fragment>

            <button onClick={this.handleRandom}> Add Random Contact </button>
            <button onClick={this.handleName}> Sort by Name </button>
            <button onClick={this.handlePopularity}> Sort by Popularity</button>

            <table className="table-actors"> 
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {this.state.value.map( (contact, index) => (
                            <ActorCard 
                                key={index}
                                index={index}
                                picture={contact.pictureUrl}
                                name={contact.name}
                                popularity={contact.popularity} 
                                clbk={this.handleDelete}
                            />     
                    ))} 
                 </tbody>     
            </table>

            </React.Fragment>

        )
    }
}


export default Table;