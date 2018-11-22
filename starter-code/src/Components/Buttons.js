import React, {Component} from 'react';
import Button from './Button';

class Buttons extends Component {

  render(){

    const {props} = this;
    const {handleClick} = props; 

    return (
      <div>
        <Button name='addContact' handleClick={handleClick} />
        <Button name='sortByName' handleClick={handleClick} />
        <Button name='sortByPopularity' handleClick={handleClick} />
      </div>
    )
  }
}

export default Buttons;