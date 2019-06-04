import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import TableSortLabel from '@material-ui/core/TableSortLabel';

import data from '../../contacts.json';

import DataRow from './DataRow';
const randomSelector = (array) => array[Math.floor(Math.random() * array.length)];

/* const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(3),
		overflowX: 'auto'
	},
	table: {
		minWidth: 650
	}
}));
 */
class Contacts extends Component {
	constructor() {
		super();
		this.state = {
			contacts: data.splice(0, 5)
		};
	}
	addRandomContact = () => {
		const contacts = [ ...this.state.contacts ];

		//console.log(randomContact);
		contacts.push(randomSelector(data));
		this.setState({
			contacts
		});
	};

	sortByName = () => {
		const contacts = [ ...this.state.contacts ];
		contacts.sort((a, b) => a.name.localeCompare(b.name));
		//console.log(contacts);
		this.setState({
			contacts
		});
	};
	sortByPopularity = () => {
		const contacts = [ ...this.state.contacts ];
		contacts.sort((a, b) => b.popularity - a.popularity);
		//console.log(contacts);
		this.setState({
			contacts
		});
	};

	deleteContact = (i) => {
		const contacts = [ ...this.state.contacts ];
		contacts.splice(i, 1);
		//console.log(contacts);
		this.setState({
			contacts
		});
	};

	/* 	classes = useStyles(); */
	render() {
		return (
			<Paper /* className={this.classes.root} */>
				<Button onClick={() => this.addRandomContact()} variant="contained" color="primary">
					Add random contact
				</Button>
				{/* 	<Button onClick={() => this.sortByName()} variant="contained" color="primary">
					Sort Alphabetically
				</Button>
				<Button onClick={() => this.sortByPopularity()} variant="contained" color="primary">
					Sort by Popularity
				</Button> */}
				<Table /* className={this.classes.table} */>
					<TableHead>
						<TableRow>
							<TableCell>Picture</TableCell>
							<TableCell align="center">
								<TableSortLabel onClick={() => this.sortByName()}>Name</TableSortLabel>
							</TableCell>
							<TableCell align="center">
								<TableSortLabel onClick={() => this.sortByPopularity()}>Popularity</TableSortLabel>
							</TableCell>
							<TableCell align="center">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.state.contacts.map((contact, i) => {
							return <DataRow key={i} {...contact} delete={() => this.deleteContact(i)} />;
						})}
					</TableBody>
				</Table>
			</Paper>

			/* 	<tbody>
						{this.state.contacts.map((contact, i) => {
							return <Contact key={i} {...contact} delete={() => this.deleteContact(i)} />;
						})}
					</tbody> */
		);
	}
}

export default Contacts;
