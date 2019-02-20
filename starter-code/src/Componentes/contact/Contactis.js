import React from "react";


class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactos: [
        {
          name: this.props.contactoInfo.name,
          pictureUrl:this.props.contactoInfo.pictureUrl,
          popularity: this.props.contactoInfo.popularity
        }
      ]
    }
  }
    render(){
      return <tr>
        <td><img src={this.state.pictureUrl}></img></td>
        <td>{this.state.name}</td>
        <td>{this.state.popularity}</td>
      </tr>
  }
}

  export default Contacts;