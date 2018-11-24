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
        let {listContacts} = this.state;
        let newArr = listContacts.filter((ele,ind) =>{
            if(ind < 5) return ele;
        });
        this.setState({listContacts:newArr});
    }
    handleClick = () => {
        let indexRandom = Math.floor(Math.random() * ContactsJ.length );
        let {listContacts} = this.state;
        listContacts.splice(5,1);
        listContacts.push(ContactsJ[indexRandom]);
        this.setState({listContacts});
        //this.setState({contactRandom:ContactsJ[indexRandom] });
    };
    sortNameClick = () => {
        let {listContacts} = this.state;
        listContacts = listContacts.sort((a,b)=>{
            if (a.name < b.name){
                return -1;
            }

            if (a.name > b.name){
                return 1;
            }

            return 0;
        })
        this.setState({listContacts});

    };
    sortPopularityClick = () => {
        let {listContacts} = this.state;
        listContacts = listContacts.sort((a,b)=>{
            return b.popularity - a.popularity;
        })
        this.setState({listContacts});
    };

    deleteItem = (index) => {
        let {listContacts} = this.state;
        listContacts = listContacts.filter((item,inx) => index !== inx);
        this.setState({listContacts});
    };

  render(){
      return(
          <div>

              <table className="App">
                  <thead>
                  <tr>
                      <th><button onClick={this.handleClick} >Add Random Contact!</button></th>
                      <th><button onClick={this.sortNameClick} >Sort by name</button></th>
                      <th><button onClick={this.sortPopularityClick} >Sort by popularity</button></th>
                  </tr>
                  <tr>
                      <th>Picture</th>
                      <th>Name</th>
                      <th>Popularity</th>
                      <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.listContacts.map((elem, index) => {
                            return <Item key={index} item={elem} ind={index} action={this.deleteItem}/>
                    })
                  }
                  </tbody>

              </table>
          </div>
      );
  }
};