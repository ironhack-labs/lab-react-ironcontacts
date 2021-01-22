import React from 'react';
import './App.css';
import contacts from './contacts.json';
 
class App extends React.Component {
  state = {
    celebrities: contacts.slice(0,5)
  }
 
  ButtonRandom = () => {
 
    let clonedCeleb1 = [...this.state.celebrities]
 
    let randomCel = contacts[Math.floor(Math.random()*contacts.length)]
    clonedCeleb1.push(randomCel)
 
    this.setState({
      celebrities: clonedCeleb1
    })
  }
 
  SortedByName = () => {

    let clonedCeleb2 = [...this.state.celebrities]

    clonedCeleb2.sort((a,b) =>{
      if (a.name<b.name){
        return -1
      } else if (a.name>b.name) {
        return 1
      } else {
        return 0
      }
    })

    this.setState({
      celebrities: clonedCeleb2
    })
  }

  SortedByPopularity = () => {

    let clonedCeleb3 = [...this.state.celebrities]

    clonedCeleb3.sort((a,b) =>{
      return (b.popularity-a.popularity)
    })

    this.setState({
      celebrities: clonedCeleb3
    })
  }

  DeleteButton = (celebId) => {

    let clonedCeleb4 = [...this.state.celebrities]

    let celebIndex = clonedCeleb4.findIndex( element => element.id === celebId);
    clonedCeleb4.splice(celebIndex, 1);
    
    this.setState({
      celebrities: clonedCeleb4
    })

  }

 

  render() {
    const UpdatedList = (elem) => {
      return (
        <React.Fragment>
              <td><button onClick={elem.clickToDelete}>Delete</button></td>
      </React.Fragment> 
  
      ) 
    }

    const deleteFun = this.state.celebrities.map( elem => {
      return (
            <UpdatedList key={elem.id} clickToDelete={()=> this.DeleteButton(elem.id)} {...elem}/>
            )
          }); 

    const contactList = this.state.celebrities.map(elem => { 
      return(
          <React.Fragment>
            <table>
                <thead>
                  <tr>
                    <th>picture</th>
                    <th>name</th>
                    <th>popularity</th>
                    <th>action</th>
                  </tr>
                </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="TableImage">
                      <img src={elem.pictureUrl}/>
                    </div>
                  </td>
                  <td>{elem.name}</td>
                  <td>{elem.popularity}</td>
                </tr>
              </tbody>
            </table>
          </React.Fragment> 
          
      )
      })

    return (
      <div>
        <button onClick={this.ButtonRandom}>Add Random Celeb</button>
        <button onClick={this.SortedByName}>Sort By Name</button> 
        <button onClick={this.SortedByPopularity}>Sort By Popularity</button>
        {deleteFun}
        {contactList}
      </div>
    )     
  }
}
 
export default App;
