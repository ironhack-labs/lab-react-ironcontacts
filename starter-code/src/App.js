import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'



class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          listContacts: contacts.slice(0, 5)

        //  [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
      }
  }

addRandomContact(){
let newsList =  this.contacts.slice(0, 6);

}


 render() {

   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1>
       </header>


       <div className="App">


         <RandomButton onClick={this.addRandomContact} title ="Add random"></RandomButton>


        <table>

           {
               this.state.listContacts.map(contact => {
                   return (

                        <Table name={contact.name} pictureUrl={contact.pictureUrl} popularity={contact.popularity}>
               </Table>
                    );
               })
           }
         </table>

       </div>

     </div>
   );
 }
}



class Table extends Component {
    render () {
        return (
            <div className="table">

                <tr>
                  <td><h4> {this.props.name}</h4></td>
                  <td><img src={this.props.pictureUrl}></img></td>
                  <td><p>{this.props.popularity}</p></td>
                </tr>

            </div>
        )
    }
}


class RandomButton extends Component {
  constructor(props) {
      super(props)
      this.state = {

      }
  }
  render(){
    return(


    <button onClick = {this.props.onClick}>{this.props.title}</button>

    )
  }
}




export default App;
