import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Celeblist from './components/celebrity/celebrityList';
import contacts from './contacts.json'

class App extends Component {

  state = {
    indexes: [0,1,2,3,4]
  }

  

addRandom = e => {
  e.preventDefault();
  let {indexes} = this.state;
  indexes.push(Math.floor((Math.random() * 198)))
  this.setState({indexes})
};

sortName = e =>{
 e.preventDefault();
 let {indexes} = this.state;
 let celeb = contacts;
 let ordNom = (a,b) =>{
  let g = [];
  for (let i = 0 ; i < a.length ; i++)
  { b[a[i]].id = a[i]
    g.push(b[a[i]])  }
  g.sort((aa, bb) => (aa.name > bb.name) ? 1 : -1);
  
  let arr = []
  for (let i = 0 ; i < a.length ; i++)
  {
  arr.push(g[i].id)
  }
   return arr
  };
  let g = ordNom (indexes,celeb)
  indexes = g;
  this.setState({indexes})

}

sortPop = e =>{
  e.preventDefault();
  let {indexes} = this.state;
  let celeb = contacts;
  let ordNom = (a,b) =>{
   let g = [];
   for (let i = 0 ; i < a.length ; i++)
   { b[a[i]].id = a[i]
     g.push(b[a[i]])  }
   g.sort((aa, bb) => (aa.popularity > bb.popularity) ? -1 : 1);
   
   let arr = []
   for (let i = 0 ; i < a.length ; i++)
   {
   arr.push(g[i].id)
   }
    return arr
   };
   let g = ordNom (indexes,celeb)
   indexes = g;
   this.setState({indexes})
 
 };

 deleteItem = (i,e) => {

  const {indexes} = this.state;
  let lugar = indexes.indexOf(i)
  indexes.splice(lugar, 1);
  console.log(lugar)
  this.setState({indexes});
}
 



  render() {
    

    //let addRandom = () => indexes.push(Math.floor((Math.random() * 198)));

    return (
      <div className="App">
      <form >
        <header>
          <h1>IronContacts</h1>
        </header>
        <button onClick = {this.addRandom}>inserta aleatorio</button>
        <button onClick = {this.sortName}>Ordena por nombre</button>
        <button onClick = {this.sortPop}>Ordena por fama</button>
        </form>
          <div>
          <Celeblist indexes={this.state.indexes} deleteItem={this.deleteItem}/>
          </div>
      </div>
    );
  }
}

export default App;
