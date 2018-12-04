import React from "react";
import "./Mesa.css";
import Contacto from '../Contacto/Contacto.js';

class Mesa extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contactos: this.props.contacts.splice(0, 5)
        }

        this.addContactHandler = this.addContactHandler.bind(this);
        this.SortByNameHandler = this.SortByNameHandler.bind(this);
        console.log(this.state.contactos);
    }

    addContactHandler(contacts) {
        let index = Math.floor(Math.random() * contacts.length);
        console.log(index + " " + contacts.length);

        let contactosNuevo = [...this.state.contactos]
        contactosNuevo.push(contacts[index]);

        this.setState({ ...this.state, contactos: contactosNuevo })

    }

    SortByNameHandler() {

        console.log(this.state.contactos);

        let contactosSinOrden = [...this.state.contactos]
        let contactosOrdenados = contactosSinOrden.sort((a, b) => {
            if (a.name > b.name) { return 1 };
            if (a.name < b.name) { return -1 };
            if (a.name = b.name) { return 0 };
        });

        console.log(contactosOrdenados);

        this.setState({ contactos: contactosOrdenados }, function(){
            console.log(this.state.contactos)
        });

    }

    render() {

        const listaContactos = this.state.contactos.map((contacto, i) => {
            return <Contacto key={i} contactInfo={contacto}></Contacto>
        });

        return (<div className="mesa">

            <div className="buttons">
                <button id="add-contact" onClick={() => this.addContactHandler(this.props.contacts)}>Add Random Contact</button>
                <button id="sort-by-name" onClick={this.SortByNameHandler}>Sort by name</button>
                {/* <button id="sort-by-pop" onClick={SortByPopHandler}>Sort by popularity</button> */}
            </div>

            <table>
                <thead className="cabecera">
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <Contacto contactInfo={this.props.contacts[0]}></Contacto> */}
                    {listaContactos}
                </tbody>
            </table>
        </div>
        )
    }
}

export default Mesa;


