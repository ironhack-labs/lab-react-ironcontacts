import { Component } from "react"
import contacts from './contacts.json'
import CardContacts from './CardContact'

class DynamicContactList extends Component {

    constructor() {
        super()
        this.state = {
            currentContacts: contacts.slice(- 5)  //la ponemos aqui para despues pasar esa info de contactos a otros componentes o trabajar ocn ella
        }
    }

    getRandom = () => this.setState({ currentContacts: [...this.state.currentContacts, contacts[Math.floor(Math.random() * (contacts.length - 5))]] })
    // set state para poner el valor de los 5 que tenia mas 1
    //hago que currentContacts (el qeue tiene 5 valores de la inea 10, porque eso es lo que hace setState, actualizar el state) sea current contacts + el alor que le añado
    //entonces con el spread operator coge el contenido de currentContats(los 5 valores) y le añado uno cogido del json aleatoriamente, lo hacemos asi porque si cogemos el array original y le hacemos push estamos modificando el array original

    // usamos el spread operator aqui porque el sort modifica el array original
    sortByName = () => this.setState({
        currentContacts: [...this.state.currentContacts].sort((a, b) => {

            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        }
        )
    })

    sortByPopularity = () => this.setState({
        currentContacts: [...this.state.currentContacts].sort((a, b) => b.popularity - a.popularity)
    })
    //// filter crea un array nuevo, por eso no hay que usar el spread operator para hacer una copia


    render() {

        return (
            <>



                {/* {this.state.currentContacts.map(elm => <CardContacts blahblah={this.deleteContact} {...elm} key={elm.id} />)} */}
                {/* {this.state.currentContacts.map(elm => <CardContacts blahblah={this.deleteContact} name={elm.name} popularity={elm.popularity} id={elm.id} pictureUrl={elm.pictureUrl}  key={elm.id} />)} */}



                <button onClick={this.getRandom} style={{ width: '100%', margin: '30px 0' }} >
                    New Random Contact
                </button>
                <button onClick={this.sortByName} style={{ width: '100%', margin: '30px 0' }} >
                    Sort by Name
                </button>
                <button onClick={this.sortByPopularity} style={{ width: '100%', margin: '30px 0' }} >
                    Sort by Popularity
                </button>

            </>
        )
    }
}

export default DynamicContactList