import React from "react";
import "./Mesa.css";
import Contacto from '../Contacto/Contacto.js';

class Mesa extends React.Component {

    render() {

        const listaContactos = this.props.contacts.map((contacto, i) => {
            return <Contacto key={i} contactInfo={contacto}></Contacto>
        })

        return (<table className="mesa">
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
        </table>)
    }
}

export default Mesa;


