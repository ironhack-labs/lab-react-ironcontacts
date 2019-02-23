import React, {Component} from "react";

class Contacto extends Component{

  render (){

    return(
        <tr>
          <td>
            <img className="img-contact" src={this.props.pictureUrl}/>
          </td>
          <td>
            {this.props.name}
          </td>
          <td>
            {this.props.popularity}
          </td>
        </tr>
    )
  }
}

export default Contacto;
