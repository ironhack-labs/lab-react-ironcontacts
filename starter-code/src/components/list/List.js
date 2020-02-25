import React, { Component } from 'react'
import ContactCard from '../card/ContactCard'
import contacts from '../../contacts.json';
import './list.css';

let arr = contacts.slice(0,5)


class List extends Component {

    constructor() {
        super()
        this.state = {
            arr
            // showOscarAwarded: false
        }
    }

    rndContact = () =>{
        let newArr=[...this.state.arr]
        newArr.push(contacts[Math.round(Math.random()*contacts.length)])
        this.setState({ arr: newArr})
    }

    deleteContact = idx => {
        const newArr = [...this.state.arr]
        newArr.splice(idx, 1)
        this.setState({ arr: newArr })
    }

    sortPopularity = idx => {
        const newArr = [...this.state.arr]
        newArr.sort( (b,a)=>a.popularity - b.popularity)
        this.setState({arr:newArr})
    }

    sortName = idx => {
        const newArr = [...this.state.arr]

        newArr.sort((a,b)=> a.name.localeCompare(b.name))
        this.setState({arr:newArr})
    }
    

    render() {        
        // const filteredContacts = this.state.contacts.filter(elm => elm.hasOscars === this.state.showOscarAwarded)

        return (
            <>
                <button onClick={this.rndContact}>
                    add Random
                </button>
                <button onClick={this.sortPopularity}>
                    sort Popularity
                </button>
                <button onClick={this.sortName}>
                    sort Name
                </button>

                <div className="align-center">

                
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>

                    {this.state.arr.map((elm,idx) => <ContactCard key={idx} {...elm} deleteOne={()=>this.deleteContact(idx)} />)}
                    
                </table>
                </div>
            </>
        )
    }
}

export default List







    // toggleOscarsList = () => this.setState({ showOscarAwarded: !this.state.showOscarAwarded }, () => console.log('Estado actualizado'))

    /*  */

    // <button onClick={this.toggleOscarsList}>
    //     {this.state.showOscarAwarded ? <>Mostrar películas sin Oscar</> : <>Mostrar películas con Oscar</>}
    // </button>