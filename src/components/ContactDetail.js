import { logDOM } from '@testing-library/react';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import './styles/ContactDetail.css';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
}));

const ContactDetail = ({ detail, removeEvent }) => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell>
        <img src={detail.pictureUrl} className="contactDetail__img" />
      </TableCell>
      <TableCell>{detail.name}</TableCell>
      <TableCell>{detail.popularity.toFixed(2)}</TableCell>
      <TableCell>
        <Button
          onClick={() => {
            console.log(detail.id);
            removeEvent(detail.id);
          }}
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ContactDetail;
