import React from 'react';
import actorGroup from '../../src/contacts.json';
import OneSingleActor from './singleActor';

class ActorList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            list: actorGroup.slice(0,5),
            otherActors: actorGroup.slice(5)
        }
    }

    showActor = () =>{
        return this.state.list.map((eachActor,i)=>{
            return(
            <OneSingleActor
             key={i}
             theActor = {eachActor}
              />
            )
        })
    }

    addRandom = () =>{
      let othersCloneActor = [...this.state.otherActors];
      let rand = othersCloneActor.splice(Math.floor(Math.random()*othersCloneActor.length), 1)[0];
      console.log(rand);

      let clone = [...this.state.list];

      if(rand) {
      clone.unshift(rand);
      }

      this.setState({list: clone, otherActors: othersCloneActor});
  }


render(){

    console.log(this.state);

    return(
        <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
        </thead>
        <tbody>
            {this.showActor()}
        </tbody>
        </table>
    )
}



}

export default ActorList;