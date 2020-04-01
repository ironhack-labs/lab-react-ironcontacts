import React, {Component} from 'react'
import contacts from './contacts.json'
import Card from './Card'

export default class ContactsList extends Component {
    state = {
        contacts: contacts.slice(0,5) //[contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
    }

    addRandom = ()=>{
        let i = Math.floor(Math.random()*contacts.length)
        this.setState({
            contacts: [...this.state.contacts, contacts[i]]
        })
    }


    sortName = ()=>{
        this.setState({
            contacts: this.state.contacts.sort((a,b)=>{
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                if (b.name.toLowerCase() < a.name.toLowerCase()) return 1
                return 0
            })
        })
    }

    sortPopularity = ()=>{
        this.setState({
            contacts: this.state.contacts.sort((a,b)=> {return b.popularity - a.popularity})
        })
    }

    render(){
        return(
            <div className='contacts'>
                <div className='btns'>
                    <button onClick={this.addRandom}>Add Random</button>
                    <button onClick={this.sortName}>Sort by Name</button>
                    <button onClick={this.sortPopularity}>Sort by Popularity</button>
                </div>
                {this.state.contacts.map(celeb=>(
                    <Card
                        key={`${celeb.name} - ${celeb.popularity}`}
                        name={celeb.name}
                        image_url= {celeb.pictureUrl}
                        rating={celeb.popularity}
                    />
                ))}
            </div>
        )
    }
}