import React, { Component } from 'react'
import contacts from '../contacts.json'
import Table from './Table';

class Contacts extends Component{
    constructor(){
        super();
        this.state = {
            contactList : [...contacts],
            contactListOfFive : [...contacts].slice(0,5)
        }
        
    }

    createContacts = () => {
       /* return this.arr.filter((c,i)=>i<this.numberList).map((actor)=> <Table {...actor} key = {actor.id}/>) */
       /* var contacts = this.arr(0,5) */
       /* var contacts = this.state.contactList.slice(0,5) */

       return this.state.contactListOfFive.map((actor)=> <Table {...actor} key = {actor.id}/>)
      
    }

    createRandomContact =()=>{

        
    
        const arr = [...this.state.contactListOfFive]
        
       const randomActor = contacts[Math.floor(Math.random()*contacts.length)];
        console.log(randomActor, arr)
     
                arr.some((actor)=>{
                if(actor !==randomActor){
                    arr.push(randomActor)
                    this.setState({
                    contactListOfFive:arr
                     })
                }
            })
        console.log(this.state.numberList)
        
    /* const addedActors = contacts.filter((c, i) => i < this.numberList);
    this.setState(() => ({ contactList: addedActors })); */
  };
    sortByName = ()=>{
      const order = this.state.contactListOfFive.sort((a,b)=> a.name.localeCompare(b.name))
        
        this.setState({
            contactListOfFive: order
        })
        console.log(this.state.contactList)
    }

    sortByPop = () =>{
        const order = this.state.contactList.sort((a,b)=>{
            return  b.popularity - a.popularity  
        })
        this.setState({
            contactList: order
        })
    }

    deleteContact = (id) =>{
        const actorDelete = this.state.contactListOfFive;
        actorDelete.splice(id, 1);
        this.setState({
            contactListOfFive:actorDelete
        })
    }
    
    render(){
/*         console.log(this.state.contactList.slice(0,5))
 */        return(
            <div>
                <button onClick = {()=>this.createRandomContact()}>Add a random actor</button>
                <button onClick = {()=>this.sortByName()}>Sort by name</button>
                <button onClick = {()=>this.sortByPop()}>Sort by popularity</button>

                {this.createContacts()}
            </div>
        )
    }
}

export default Contacts