import { Component } from "react"
import contacts from "./../contacts.json"
import ContactCards from "./ContactCards"

class Contacts extends Component {

    constructor() {

        super()
        this.state = {
            //modificamos 

            giveMeFive: contacts.filter((elm, i) => {
                if (i < 5) { return elm }
            })


        }


    }


    pickRandom = () => {
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)]

        const contactsCopy = [...this.state.giveMeFive]

        contactsCopy.push(randomContact)

        this.setState({ giveMeFive: contactsCopy })
    }


    sortByName = () => {

        const contactsCopy = [...this.state.giveMeFive]

        contactsCopy.sort((a, b) => {


            // a y b es cada objeto, accedemos como ojeto a sus keys names para comparar los values, nombres.
            if (a.name < b.name) { return -1 }
            if (a.name > b.name) { return 1 }
            return 0

        })

        this.setState({ giveMeFive: contactsCopy })
        //ojo, poner el mismo nombre de propiedad que tenemos en el map abajo.... sino, evidentemente no conseguiremos qiue lo pinte... es lo que restamos pasando a la App.js
    }

    sortByPopularity = () => {

        const contactsCopy = [...this.state.giveMeFive]


        contactsCopy.sort((a, b) => {
            return b.popularity - a.popularity;
        });


        this.setState({ giveMeFive: contactsCopy })
        //ojo, poner el mismo nombre de propiedad que tenemos en el map abajo.... sino, evidentemente no conseguiremos qiue lo pinte... es lo que restamos pasando a la App.js
    }


    deleteContacts = contactId => {
        this.setState({
            giveMeFive: this.state.giveMeFive.filter(elm => elm.id !== contactId)
        })
    }



    render() {



        return (
            <main>
                <div className="container contactCard">
                    <div className="row">
                        <div className="col-3">
                            <button onClick={this.pickRandom} style={{ width: '100%', margin: '30px 0' }} >
                                Add Random Contact
                            </button>
                        </div>
                        <div className="col-3">
                            <button onClick={this.sortByName} style={{ width: '100%', margin: '30px 0' }} >
                                Sort by name
                            </button>
                        </div>
                        <div className="col-3">
                            <button onClick={this.sortByPopularity} style={{ width: '100%', margin: '30px 0' }} >
                                Sort by popularity
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <h4><strong>PICTURE</strong></h4>
                        </div>
                        <div className="col-3">
                            <h4><strong>NAME</strong></h4>
                        </div>
                        <div className="col-3">
                            <h4><strong>POPULARITY</strong></h4>
                        </div>
                    </div>
                </div>

                {this.state.giveMeFive.map(elm => <ContactCards key={elm.id} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} {...elm} deleteContacts={() => this.deleteContacts(elm.id)}/>)}

               


            </main>
        )

    }
}

export default Contacts