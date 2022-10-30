import allContacts from './contacts.json';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

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
    <div className="App">
      <h1 className="display-5 mt-3">IronContacts</h1>
      <Button className="mt-3 mb-4" variant="outline-light" onClick={getRandomContact}>
        Add random Contact
      </Button>
      <Table striped="columns" bordered hover variant="dark">
        <tbody>
          <tr>
            <th>Picture</th>
            <th style={{ cursor: 'pointer' }} onClick={sortByName}>
              Name <span>&#8639;&#8642;</span>
            </th>
            <th style={{ cursor: 'pointer' }} onClick={sortByPopularity}>
              Popularity <span>&#8639;&#8642;</span>
            </th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img style={{ width: '80px' }} src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td className="align-middle">
                  <p>{contact.name}</p>
                </td>
                <td className="align-middle">
                  <p>{contact.popularity}</p>
                </td>
                <td className="align-middle">
                  <p style={{ fontSize: '30px' }}>{contact.wonOscar && '🏆'}</p>
                </td>
                <td className="align-middle">
                  <p style={{ fontSize: '30px' }}>{contact.wonEmmy && '🏆'}</p>
                </td>
                <td className="align-middle">
                  <Button
                    className="text-light"
                    variant="outline-danger"
                    size="sm"
                    onClick={() => {
                      handleClickDelete(contact.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default App;
