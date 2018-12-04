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
        console.log(this.state.contactos);
    }

    addContactHandler(contacts) {
        let index = Math.floor(Math.random() * contacts.length );
        console.log(index + " " + contacts.length);
        
        this.state.contactos.push(contacts[index]);
        
        this.setState({contactos: this.state.contactos})
        
    }

    render() {

        const listaContactos = this.state.contactos.map((contacto, i) => {
            return <Contacto key={i} contactInfo={contacto}></Contacto>
        });

        return (<div className="mesa">

            <div className="buttons">
                <button id="add-contact" onClick={() => this.addContactHandler(this.props.contacts)}>Add Random Contact</button>
                {/* <button id="sort-by-name" Onclick={SortByNameHandler}>Sort by name</button> */}
                {/* <button id="sort-by-pop" Onclick={SortByPopHandler}>Sort by popularity</button> */}
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


