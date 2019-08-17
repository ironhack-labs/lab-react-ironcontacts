import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from "./components/TopNav";
import DataContacts from "./DataContacts";
import ListaContacts from "./components/ListaContacts";


class App extends React.Component {

	state = {
		listaContactos: DataContacts
	};


	render() {
		return (
			<div className="App">
				<div className="col xs-12 col-md-12">
					<TopNav/>
					<ListaContacts lista={this.state.listaContactos}/>

				</div>

			</div>
		);
	}

}

export default App;
