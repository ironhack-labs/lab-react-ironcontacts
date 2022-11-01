// Material UI testing here
import allContacts from './contacts.json';
import { useState } from 'react';
import './App.css';

import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import { Badge } from '@mui/material';

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple[500],
    },
    secondary: {
      custom: '#ba000d',
    },
  },
});

darkTheme = createTheme(darkTheme, {
  palette: {
    error: {
      main: darkTheme.palette.secondary.custom,
    },
  },
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -5,
    top: 30,
    border: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: 'transparent',
    borderRadius: '0 50% 0',
    width: '50px',
    height: '50px',
    zIndex: '-1',
    fontSize: '16px',
  },
}));

const initialState = allContacts.slice(0, 5);

function App() {
  const [contacts, setContacts] = useState(initialState);
  const [sortingDirection, setSortingDirection] = useState(false);

  // Make sure contact is not there yet
  const randomContact = (input) => {
    let randomContact = input[Math.floor(Math.random() * input.length)];
    while (contacts.includes(randomContact)) {
      randomContact = input[Math.floor(Math.random() * input.length)];
    }
    return randomContact;
  };

  // Get a random contact
  const getRandomContact = () => {
    if (contacts.length < 52) {
      setContacts((current) => [...current, randomContact(allContacts)]);
    }
  };

  // Toggle sorting direction
  const toggleSortingDirection = () => {
    setSortingDirection((current) => !current);
  };

  // Sort by popularity
  const sortByPopularity = () => {
    const contactsPopSort = [...contacts];
    contactsPopSort.sort((a, b) => {
      return sortingDirection ? b.popularity - a.popularity : a.popularity - b.popularity;
    });
    setContacts(contactsPopSort);
    toggleSortingDirection();
  };

  // Sort by name
  const sortByName = () => {
    const contactsNameSort = [...contacts];
    contactsNameSort.sort((a, b) => {
      return sortingDirection ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });
    setContacts(contactsNameSort);
    toggleSortingDirection();
  };

  // Delete Contact
  const handleClickDelete = (id) => {
    const contactToDelete = contacts.findIndex((obj) => obj.id === id);
    const contactsMinusOne = [...contacts];
    contactsMinusOne.splice(contactToDelete, 1);
    setContacts(contactsMinusOne);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <StyledBadge badgeContent={contacts.length} color="primary">
        <h1>IronContacts</h1>
      </StyledBadge>

      <Button onClick={getRandomContact} sx={{ margin: 7 }}>
        Add random Contact
      </Button>
      <TableContainer component={Paper} sx={{ maxHeight: '100vh' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow hover>
              <TableCell>Picture</TableCell>
              <TableCell style={{ cursor: 'pointer' }} onClick={sortByName}>
                Name <span color="error">&#8639;&#8642;</span>
              </TableCell>
              <TableCell style={{ cursor: 'pointer' }} onClick={sortByPopularity}>
                <span>Popularity &#8639;&#8642;</span>
              </TableCell>
              <TableCell>Won Oscar</TableCell>
              <TableCell>Won Emmy</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => {
              return (
                <TableRow hover key={contact.id}>
                  <TableCell>
                    <img sx={{ m: 0 }} style={{ width: '80px' }} src={contact.pictureUrl} alt={contact.name} />
                  </TableCell>
                  <TableCell>
                    <p>{contact.name}</p>
                  </TableCell>
                  <TableCell>
                    <p>{contact.popularity}</p>
                  </TableCell>
                  <TableCell>
                    <p style={{ fontSize: '30px' }}>{contact.wonOscar && '🏆'}</p>
                  </TableCell>
                  <TableCell>
                    <p style={{ fontSize: '30px' }}>{contact.wonEmmy && '🏆'}</p>
                  </TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => {
                        handleClickDelete(contact.id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
export default App;
