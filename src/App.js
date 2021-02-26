import './App.css';
import React from 'react'
import contacts from "./contacts.json";

// function App() {
//   return (
//     <div className="App">
    
//     </div>
//   );
// }

// export default App;


const contact5 = contacts.filter((contact, i) => i < 5)

class App extends React.Component {
  
state = {
    contact5
  }

render(){

const {contact5} = this.state 
const firstFive = contact5.map((c,i)=> {
  return <tr key={c.id}>
  <td ><img width='100vh' src={c.pictureUrl} alt=""/></td>
  <td ><h4>{c.name}</h4></td>
  <td >{c.popularity.toFixed(2)}</td>
 </tr> 
  
})


  return (
  < >
    <div className='btns'>
      <button onClick={this.pickRandom}>Add Random Contact</button>
      <button>Sort by Name</button>
      <button>Sort by Popularity</button>
    </div>

    <table > 
    <caption ><h1> IronContacts</h1></caption> 
    <thead>
        <tr>
          <th><h3>Picture</h3></th>
          <th ><h3>Name</h3></th>
          <th ><h3>Popularity</h3></th>
        </tr>
      </thead>
     <tbody>
        {firstFive}
     </tbody>
    </table>
    

    
    </>
  );
  }

};


export default App;
