import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Tabla from "./Tabla"
// import RandomButton from "./RandomButton"


class App extends Component {

  constructor(props){
    super(props)

    this.state={
        actores: [...contacts].slice(0,5),
    }
}


addNewActor(){
  let newArr= [...this.state.actores]
  let clonedArr =  [...contacts]

      let celeb=  clonedArr[Math.floor(Math.random()*clonedArr.length)]
          newArr.push(celeb)

console.log(newArr)

this.setState({
  ...this.state,
  actores: newArr
})
}

  render() {
    return (
      <section>
      <button onClick={()=>this.addNewActor()} >Add a random</button>
      <table>
      <thead>
          <tr>
              <th>ACTORES</th>
          </tr>
      </thead>
      <tbody>
          {
            this.state.actores.map((actor,idx)=>{
             return <Tabla key={idx} paco={actor} />
            })
          }
          
      </tbody>
  </table>
  </section>
    )
  }
}

export default App;




