import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state= {
    contacts: [contacts]
  }
  
  render() {
    const fiveFirst = contacts.slice(0, 5)
    const randomItem = contacts[Math.floor(Math.random()*contacts.length)];
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick ={()=>{
          this.setState(prevState => ({
            contacts:{...prevState.contacts, randomItem}
          }))
        }}>Add Random Contact</button>
        <table>
          <tr>
            <th><h1>Picture</h1></th>
            <th><h1>Name</h1></th>
            <th><h1>Popularity</h1></th>
            <th><h1>Action</h1></th>
          </tr>
           <tbody>
         
            {fiveFirst.map((post, index) => {
              return (
                <tr key={post.id}>
                  <td>
                    <img   src={post.pictureUrl} width="70" height="100" />
                  </td>
                  <td ><h1>{post.name}</h1></td> 
                  <td ><h1>{post.popularity.toFixed(2)}</h1></td>
                  <button>Delete</button>
                </tr>

                
              );
            })}
          </tbody>

         
        </table>
      </div>
    );
  }
}

export default App;
