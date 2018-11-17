import  React, {Component} from 'react';
import  Item from './Item';
import '../App.css';
import ContactsJ from '../contacts.json';

export default class Contacts extends Component{
    constructor(){
        super();
        this.state = {
            contactRandom:{
                name: "Random",
                pictureUrl: "RandomImg",
                popularity: 0
            },
            listContacts: ContactsJ
        }
    }
    componentWillMount(){
        this.setState({listContacts: ContactsJ});
        //console.log(this.state.listContacts);
    }
    handleClick = () => {
        let indexRandom = Math.floor(Math.random() * ContactsJ.length );
        this.setState({contactRandom:ContactsJ[indexRandom] });
        //console.log();
    };
    sortNameClick = () => {
        this.setState({listContacts:ContactsJ.sort()});
        console.log('error');
    };
    sortPopularityClick = () => {
        let indexRandom = Math.floor(Math.random() * ContactsJ.length );
        this.setState({contactRandom:ContactsJ[indexRandom] });
        //console.log();
    };
  render(){
      return(
          <div>

              <table className="App">
                  <tr>
                      <th><button onClick={this.handleClick} >Add Random Contact!</button></th>
                      <th><button onClick={this.sortNameClick} >Sort by name</button></th>
                      <th><button onClick={this.sortPopularityClick} >Sort by popularity</button></th>
                  </tr>
                  <tr>
                      <th>Picture</th>
                      <th>Name</th>
                      <th>Popularity</th>
                  </tr>
                  {this.state.listContacts.map((elem, index) => {
                        if(index < 5) {
                            return <Item key={index} item={elem}/>
                        }
                    })
                  }
                  <Item item={this.state.contactRandom}/>

              </table>
          </div>
      );
  }
};