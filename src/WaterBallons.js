import React, { Component } from 'react';
import contacts from './contacts.json';
console.log(contacts)

class App extends Component {
  state = {
    balloonFight:false,
    wickedcool:'water ballons',
  }

  showBallons = (color) => {

    if(this.state.balloonFight === true){
      return color + this.state.wickedcool
    } else {
      return `no balloon fight`
    }
  }

  toggleBallonFight = () => {

    this.setState({
      balloonFight: !this.state.balloonFight
    })


  }

  render() {

    return (
      <div>
        {Math.random()}
        <h2>{ this.showBallons('green')  }</h2>
        

        <button onClick={this.toggleBallonFight} >Toggle Balloon Fight</button>
      </div>
    );
  }
}



export default App;






