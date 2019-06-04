import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

const DataRow = (props) => {
	return (
		<TableRow>
			<TableCell align="right">
				<img className="contact-img" src={props.pictureUrl} alt={props.name} />
			</TableCell>
			<TableCell align="center">{props.name}</TableCell>
			<TableCell align="center">{props.popularity}</TableCell>
			<TableCell align="center">
				<IconButton aria-label="Delete" onClick={props.delete}>
					<SvgIcon>
						<path
							fill="#ff7277"
							d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
						/>
						<path d="M0 0h24v24H0z" fill="none" />
					</SvgIcon>
				</IconButton>
			</TableCell>
		</TableRow>
	);
};

export default DataRow;
