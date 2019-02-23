import React, {Component} from "react"
import Contacto from "./Contacto"

class ListaContactos extends Component {

  render(){
    return (
      <table>
      <tbody>
        <tr>
          <th>Picture
          </th>
          <th>Name
          </th>
          <th>Popularity
          </th>
        </tr>
        {
          this.props.contactos.map((contacto)=>(
            //return (
              <Contacto {...contacto}/>
          //)
        ))}
        </tbody>
      </table>
    )
  }
}

export default ListaContactos
