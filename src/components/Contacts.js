import React, { useState } from 'react';
import ContactDetail from './ContactDetail';

import Container from '@material-ui/core/Container';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './styles/Contacts.css';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const Contacts = ({ contacts }) => {
  const [newContacts, setNewContacts] = useState(contacts);

  const handleRandom = () => {
    const randomContacts = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * contacts.length);
      randomContacts.push(contacts[randomIndex]);
    }
    setNewContacts(randomContacts);
  };

  const handleName = () => {
    let sortByName = [...contacts];
    sortByName.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setNewContacts(sortByName);
  };

  const handlePopularity = () => {
    let sortByPopularity = [...contacts];
    sortByPopularity.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else if (a.popularity > b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    setNewContacts(sortByPopularity, newContacts);
  };

  const handleRemove = (someId) => {
    let filteredContacts = newContacts.filter((contact) => {
      return contact.id !== someId;
    });
    setNewContacts(filteredContacts);
  };

  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="lg">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={handleRandom}
        >
          Add Random Contact
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleName}
        >
          Sort by name
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handlePopularity}
        >
          Sort by popularity
        </Button>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Picture</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Popularity</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newContacts.map((contact) => {
                return (
                  <ContactDetail
                    key={contact.id}
                    detail={contact}
                    removeEvent={handleRemove}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default Contacts;
