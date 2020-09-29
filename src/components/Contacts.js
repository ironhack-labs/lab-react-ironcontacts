import React, { Component } from 'react';
import Contact  from "../contacts.json"
import ContactCard from "./Contact-card"
class Contacts extends Component {

    constructor() {
        super()
            this.state ={

                actors : Contact
            }
    }
    randomActor(){
        let actors2 = Contact[Math.floor(Math.random()*Contact.length)]
       let paquito = this.state.actors.unshift(actors2)
        let paco = this.state.actors
       
        this.setState({
        actors: paco
        })
      
    }
    shortByName(){
        const paco = [...Contact]
        
       this.setState({

            actors: paco.sort((a,b)=> a.name.localeCompare(b.name))
            
         })

    }
    shortByPop(){

        const pepe = [...Contact]

        this.setState({
            actors: pepe.sort((a,b)=> b.popularity - a.popularity)
         })
    }
    
    removeActorFromState = actorsID => {
        this.setState({
            actors: this.state.actors.filter(elm => elm.id != actorsID)
        })

    }

    render() {

        return (
            <section className="card">
               
                    <h1>IronContacts</h1>
                    <button onClick={()=>this.randomActor()}>RANDOM ACTOR</button>
                    <button onClick={()=>this.shortByName()}>sortByname</button>
                    <button onClick={()=>this.shortByPop()}>sortBypopularity</button>
                    <table>
                        <thead>
                    <tr>
                        <td>
                            <h3>Picture </h3>
                        </td>
                        <td>
                            <h3>  name  </h3>
                        </td>
                        <td>
                            <h3> popularity</h3>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.actors.map(elm => <ContactCard Key={elm.id} {...elm} removeActor={() => this.removeActorFromState(elm.id)} name={elm.name} picture={elm.pictureUrl }
                        popularity={elm.popularity} />)}

                        </tbody>

                </table>
            </section>


        )
    }

}

export default Contacts