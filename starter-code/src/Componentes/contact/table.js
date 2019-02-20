import React from "react";
import Contacto from '../../Componentes/contact/Contactis'


class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contactos: this.props.contacts.splice(0,5)
    }

  }
  render(){
    const listaContactos = this.props.contacts.map((contacto, i)=>{
      return <Contacto key={i} contactInfo={contacto}></Contacto>
    })
    return <div>
          <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {listaContactos}
                </tbody>
            </table>

    </div>
  }
  
}

export default Table;