import React, { Component } from 'react';
import styled from 'styled-components';

import ContactRow from './components/ContactRow';

import contacts from './contacts.json';

const Layout = styled.main`
  margin: 0 auto;
  max-width: 600px;
`;

const ContactsTable = styled.table`
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

const Button = styled.button`
  font-weight: bold;
`;
class App extends Component {
  state = {
    record: [0, 1, 2, 3, 4],
    data: contacts.slice(0, 5)
  };

  addRandomContact = () => {
    const { record, data } = this.state;
    let exist = false;

    do {
      const index = Math.floor(Math.random() * contacts.length);

      if (!record.includes(index)) {
        this.setState({
          record: [...record, index],
          data: [...data, contacts[index]]
        });

        exist = true;
      }
    } while (!exist);
  };

  sortBy(type) {
    const { data } = this.state;

    const lowest = (a, b) => a[type] > b[type];
    const highest = (a, b) => a[type] < b[type];

    if (type === 'name') {
      data.sort(lowest);
    } else if (type === 'popularity') {
      data.sort(highest);
    }

    this.setState({ data });
  }

  handleDelete = index => {
    const { record, data } = this.state;

    record.splice(index, 1);
    data.splice(index, 1);

    this.setState({
      record,
      data
    });
  };

  render() {
    const { data } = this.state;

    const contacts = data.map((contact, i) => (
      <ContactRow key={i} id={i} {...contact} handleDelete={this.handleDelete} />
    ));

    return (
      <Layout>
        <header>
          <h1>Contacts</h1>
        </header>
        <section>
          <Button onClick={this.addRandomContact}>Add Random Contact</Button>
          <Button onClick={() => this.sortBy('name')}>Sort by name</Button>
          <Button onClick={() => this.sortBy('popularity')}>Sort by popularity</Button>
        </section>
        <section>
          <ContactsTable>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{contacts}</tbody>
          </ContactsTable>
        </section>
      </Layout>
    );
  }
}

export default App;
