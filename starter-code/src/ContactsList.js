import React, {Component} from 'react'
import contacts from './contacts.json'
import Card from './Card'

export default class ContactsList extends Component {
    state = {
        contacts: contacts.slice(0,5) //[contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
    }

    addRandom = ()=>{
        let i = Math.floor(Math.random()*contacts.length)
        this.state.contacts.push(contacts[i])
        this.setState({
            contacts: this.state.contacts
        })
    }

    sortName = ()=>{
        let newlist = this.state.contacts.sort(function(a, b){
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
        });
        console.log(newlist)
        this.setState({
            contacts: newlist
        })
    }

    sortPopularity = ()=>{
        let newlist = this.state.contacts.sort((a,b)=>{
            return b.popularity - a.popularity
        })
        this.setState({
            contacts:newlist
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