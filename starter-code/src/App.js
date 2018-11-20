import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import NewContacts from './Components/NewContacts';
import 'bulma/css/bulma.css';

 class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
	constructor() {
		super();
		this.state = {
            contactS: [],
            contac:contacts
		};
    }
     componentWillMount(){
        //llamar a nuestras elementos del state
        let {contac,contactS}= this.state;
         //insertar los primeros 5 a nuestro array ContactS
        contactS = contac.splice(0,5)
        //setear el nuevo contactS para que se vean los cambios
        this.setState({contactS})
        //este nada mas es un console para ver si si hay 5 
        console.log("tengo algo",contactS)
     }
    
     //esta funcion es para general uno random 
    handleClick = () => {
         //llamanos a contactS para poderle hace un push al final
        let{contactS}=this.state;
        console.log("original",contactS)
        // creamos esta variable para quitar los primeros 5 del arreglo original
        let remaining = this.state.contac.slice(5);
        //esta variable es el elemento random que se agrega a contactS
        let item = remaining[Math.floor(Math.random()*remaining.length)];
        console.log("nuvo",item);
        //se hace un push a contactS
        contactS.push(item)
        //contactS=item
         //seteamos para reflejar cambios
        this.setState({contactS});
      };

      //funcion para arreglar por nombre
    sortByName = () => {
      //lamar a contacts del state
      let{contactS} = this.state;
      //funcion con operador ternario para comparar por nombre
      contactS.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
      //seteamos para cambios
      this.setState({contactS})
    }

        //funcion para arreglar por popularidad
    sortByPopularity = () => {
      //lamar a contacts del state
      let{contactS} = this.state;
      //funcion sencilla para comparar por popularidad
      contactS.sort((a, b) => b.popularity - a.popularity);
      //seteamos para cambios
      this.setState({contactS})
    }


    deleteArtist = (i) => {
      let {contactS} = this.state;
      contactS = contactS.splice(i,1);
      this.setState({contactS});
  };


 	render() {
		return (
			<div className="App">
      
      <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="/cinema.jpg" height="500"/>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" onClick={this.handleClick}>
            <strong>Add a Random Contact</strong>
          </a>
          <a class="button is-primary" onClick={this.sortByName}>
            <strong>Sort by Name</strong>
          </a>
          <a class="button is-primary" onClick={this.sortByPopularity}>
            <strong>Sort by Popularity</strong>
          </a>
        </div>
      </div>
    </div>
</nav>  
      

				<table className="table">
					<tbody>
						<tr>
							<th>Picture</th>
							<th>Name</th>
							<th>Popularity</th>
						</tr>
 						{this.state.contactS.map((item, index) => (
							
                            <tr key={index}>
                                <td><img src={item.pictureUrl} alt=""/></td>
                                <td>{item.name}</td>
                                <td>{item.popularity}</td>
                                <td><button class="button is-danger" onClick={this.deleteArtist}>Delete</button></td>
                            </tr>
                        ))}
                        
						
					</tbody>
				</table>
			</div>
		);
	}
}
 export default App;