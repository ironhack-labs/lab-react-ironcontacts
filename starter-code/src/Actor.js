import React, { Component } from 'react';


class Actor extends Component {
  
  // addRandomActor = () => {
  //   let newActorsArr = [];
  //   let newList;
  //   let x = Math.floor((Math.random() + 1) *7);
  //   console.log(x);
  //   let randomSelection = this.props.actorsList[x];
  //   console.log(randomSelection);
  //   newActorsArr = newList.push(randomSelection);
  //   this.setState({
  //     actors: newActorsArr
  //   });
  // };

  render() {
    // console.log(newActorsArr)
    console.log("Rendering Actor.js...");
    return (
      <div className="actor">
        <table className="center">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
            </tr>
          </thead>
          <tbody>{this.showActors()}</tbody>
        </table>
      </div>
    );
  }
}

export default Actor;
