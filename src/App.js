import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from "./components/TopNav";
import DataContacts from "./DataContacts";
import ListaContacts from "./components/ListaContacts";


const listaInicial = [];

let i = 0;
DataContacts.forEach(c => {
	c.isAdd = false;
	c.id=i+1;
	if (i < 5) {
		c.isAdd = true;
		listaInicial.push(c);
	}
	i++
});


class App extends React.Component {


	state = {
		listaContactos: listaInicial
	};

	proContactos = {
		addRandom: () => {

			console.log('addRandom');

			let listaNoAdd = DataContacts.filter(c => {
				return !c.isAdd;
			});

			let index = parseInt(Math.random(listaNoAdd.length));

			let cRandom = listaNoAdd[index];

			cRandom.isAdd = true;

			this.setState({
				listaContactos: [...this.state.listaContactos, cRandom]
			})

		},
		sortByName: () => {

			this.setState({
				listaContactos: this.state.listaContactos.sort((a, b) => {
					if (a.name === b.name) {
						return 0;
					}

					if (a.name > b.name) {
						return 1;
					}

					return -1;
				})
			})
		},
		sortByPopularuty: () => {

			this.setState({
				listaContactos: this.state.listaContactos.sort((a, b) => {
					if (a.popularity === b.popularity) {
						return 0;
					}

					if (a.popularity > b.popularity) {
						return 1;
					}

					return -1;
				})
			})

		},
		removeItem: (id) => {

			let newList= this.state.listaContactos.filter( c=>{
				return c.id !== id;
			});

			this.setState({
				listaContactos: newList
			});


		}

	};


	render() {
		return (
			<div className="App">
				<div className="col xs-12 col-md-12">
					<TopNav
						pro={this.proContactos}
					/>
					<ListaContacts
						lista={this.state.listaContactos}
						onRemoveItem={this.proContactos.removeItem}


					/>

				</div>

			</div>
		);
	}

}

export default App;
