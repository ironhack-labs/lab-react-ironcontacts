import React, {Component} from 'react';
import Buttons from './Buttons';

class Tab extends Component {

  render() {
    const val = this.props.inf;
    const functionClick = this.props.functionClick;
 

    return (
    <tr>
      <th><img className="imagem" src={val.pictureUrl} /></th>
      <th>{val.name}</th>
      <th>{val.popularity}</th>
      <Buttons functionClick={functionClick} text={val.name}>Delete</Buttons>
      
      </tr>
  )
}
}

export default Tab;