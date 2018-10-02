import React, { Component } from "react";
import contacts from './contacts.json'


let Ironcontacts = contacts.filter((e,i)=> i>=5)

export class Contacts extends Component {
    constructor() {
        super();

        this.state = {
            contacts: contacts.filter((e, i) => i < 5)
        }
    }

    deleteContact = (i) => {
        this.state.contacts.splice(i,1)
        this.setState({contacts:this.state.contacts})
    }

    randomContact = () => {
        const random = Math.floor(Math.random()*(Ironcontacts.length))
        return Ironcontacts.splice(random,1)[0]
    }

    render() {
        const {contacts} = this.state
        const table = contacts.map((e,i)=>{
            return (
            <tr key={i}>
                <td><img style={{width:100}}src={e.pictureUrl}/></td>
                <td>{e.name}</td>
                <td>{e.popularity}</td>
                <button onClick={()=>{
                    this.deleteContact(i)
                }}>Delete</button>
            </tr>
            )
        })

        return (
            <div>
                <button onClick={() => {
                    this.setState({contacts: [...contacts,this.randomContact()] 
                    })}}>Add random Contact</button>
                <button onClick={() => {
                    this.setState({contact:contacts.sort((a,b)=>{
                        if(a.name>b.name) {
                            return 1
                        }
                        if(b.name>a.name){
                            return -1
                        }
                    })})
                }}>Sort by name</button>
                <button onClick={() =>{
                    this.setState({contact:contacts.sort((a,b)=>{
                        return a.popularity-b.popularity
                    })})
                }}>Sort by popularity</button>

                <table>
                    <tbody>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                        {table}
                    </tbody>
                </table>
             </div>
        )
    }
}