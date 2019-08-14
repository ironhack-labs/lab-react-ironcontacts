import React, { Component } from 'react'
import contacts from '../contacts.json'
import ContactsCard from './Contacts.js'

class DinamicList extends Component {

    constructor() {
        super()
        this.state = {
            producer: [
                { name: contacts[0].name, picture: contacts[0].pictureUrl, popularity: contacts[0].popularity },
                { name: contacts[1].name, picture: contacts[1].pictureUrl, popularity: contacts[1].popularity },
                { name: contacts[2].name, picture: contacts[2].pictureUrl, popularity: contacts[2].popularity },
                { name: contacts[3].name, picture: contacts[3].pictureUrl, popularity: contacts[3].popularity },
                { name: contacts[4].name, picture: contacts[4].pictureUrl, popularity: contacts[4].popularity },
            ]
        }
    }

    deleteProducer = idx => {

        const producerCopy = [...this.state.producer]  // SPREAD OPERATOR PARA LA COPIA
        producerCopy.splice(idx, 1)

        this.setState({
            producer: producerCopy
        })
    }

    sortProducer = idx => {

        const producerCopy = [...this.state.producer]  // SPREAD OPERATOR PARA LA COPIA
        producerCopy.sort(idx)
        (function (a, b) {
            return a.localeCompare(b);
          })
        this.setState({
            producer: producerCopy
        })
    }

    // sortRate = idx => {

    //     const producerCopy = [...this.state.producer]  // SPREAD OPERATOR PARA LA COPIA
    //     producerCopy.sort(idx)
    //     // (function (a, b) {
    //     //     return a.localeCompare(b);
    //     //   })
    //     this.setState({
    //         producer: producerCopy
    //     })
    // }






    render() {

        const filteredProducers = this.state.producers.filter({ })

        return(<div className = "container">
                <div className = "row">
                
                    {
                        this.state.producer.map((elm,idx)=> 
                        <div className = "col-12">
                                <img src= {elm.picture}></img>
                                <h3> {elm.name}</h3>
                                <h3> {elm.popularity}</h3>

                     </div>
                                )
                    }
                </div>
                <div className = "row">

                {
                        filteredProducers.map((elm, idx) => {
                        return <ContactsCard key={idx} {...elm} deleteProducer={() => this.deleteProducer(idx)} />
                    })
                }
                <button className="btn btn-dark filterMovies" onClick={this.sortProducers}>
                    {/* {this.state.showOscarAwarded ?
                        
                    } */}
                </button>

                </div>
            </div>

            
        ) 
        
    }
}
  

export default DinamicList

