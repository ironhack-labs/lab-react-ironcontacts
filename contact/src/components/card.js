import React, { Component } from 'react'
import contacts from '../contacts.json'
import TableCard from './table'

class Card extends Component {
    constructor() {
            super()
            this.state = {
                order: true,
                popularity: true,
                theContacts: contacts.splice(0, 5)
            }
        }

        addRandom = () => {
            let theNewContacts = [...this.state.theContacts]
            theNewContacts.push(contacts.splice(0, 1)[0])
            console.log(theNewContacts)
            this.setState({ theContacts : theNewContacts })
        }

        sortByName = () => {
            let theNewContacts = [...this.state.theContacts]
            if (this.state.order){
            theNewContacts.sort((a, b)=>{
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
            this.setState({ theContacts : theNewContacts })
        }else{
            theNewContacts.sort((a, b) => {
                if (a.name > b.name) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
                return 0;
            })
            this.setState({ theContacts : theNewContacts })
        }
        this.setState({ order: !this.state.order })
        }

        sortByPopularity = () => {
            let theNewContacts = [...this.state.theContacts]
            if (this.state.popularity) {
                theNewContacts.sort((a, b) => {
                    if (a.popularity > b.popularity) {
                        return -1;
                    }
                    if (a.popularity < b.popularity) {
                        return +1;
                    }
                    return 0;
                });
                this.setState({
                    theContacts: theNewContacts
                })
            } else {
                theNewContacts.sort((a, b) => {
                    if (a.popularity > b.popularity) {
                        return 1;
                    }
                    if (a.popularity < b.popularity) {
                        return -1;
                    }
                    return 0;
                })
                this.setState({
                    theContacts: theNewContacts
                })
            }
            this.setState({
                popularity: !this.state.popularity
            })
        }

        deleteContact = id =>{
            let theNewContacts = [...this.state.theContacts]
            theNewContacts.splice(id, 1)
            this.setState({ theContacts : theNewContacts })
        }

        render(){
        return(
<>
<button onClick={this.addRandom}>Add Random Contact</button>
<button onClick={this.sortByName}>Sort By Name</button>
<button onClick={this.sortByPopularity}>Sort By Popularity</button>
<table>
<thead>
    <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
  </tr>
</thead>
    <tbody>
        {this.state.theContacts.map((elm, idx)=>{return(
             <TableCard key={idx} imageUrl={elm.pictureUrl} alt={elm.name}
             name={elm.name} popularity={elm.popularity}
             deleteContact={() => this.deleteContact(idx)}/>
        )})}
    </tbody>
</table>
</>
    )}}


export default Card


