import React from "react";
import contacts from "../contacts.json";
import { Space, Table, Button } from "antd";
import { useState } from "react";

const Celebrities = () => {
  const [deleted, setDeleted] = useState([]);

  const [data, setData] = useState(
    contacts
      .map((contact) => {
        return {
          key: contact.id,
          name: contact.name,
          pictureUrl: (
            <img src={contact.pictureUrl} alt={contact.name} width="100" />
          ),
          popularity: contact.popularity,
          wonOscar: contact.wonOscar,
          wonEmmy: contact.wonEmmy,
          actions: (
            <Button onClick={() => handleDelete(contact.id)}>Delete</Button>
          ),
        };
      })
      .slice(0, 5)
  );

  const handleAddRandomContact = () => {
    const filteredContacts = contacts.filter(
      (contact) => !data.some((contact) => contact.key === contact.id)
    );

    if (filteredContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredContacts.length);
      const randomContact = filteredContacts[randomIndex];

      setData((data) => [
        {
          key: randomContact.id,
          name: randomContact.name,
          pictureUrl: (
            <img
              src={randomContact.pictureUrl}
              alt={randomContact.name}
              width="100"
            />
          ),
          popularity: randomContact.popularity,
          wonOscar: randomContact.wonOscar,
          wonEmmy: randomContact.wonEmmy,
          actions: (
            <Button onClick={() => handleDelete(randomContact.id)}>
              Delete
            </Button>
          ),
        },
        ...data,
      ]);
    }
  };

  const handleSortByPopularity = () => {
    setData((data) => {
      const dataCopy = [...data];

      dataCopy.sort((a, b) => b.popularity - a.popularity);

      return dataCopy;
    });
  };

  const handleSortByName = () => {
    const sortedData = [...data].sort((a, b) => {
      const firstName = a.name.toUpperCase();
      const secondName = b.name.toUpperCase();

      if (firstName < secondName) {
        return -1;
      }
      if (firstName > secondName) {
        return 1;
      }

      return 0;
    });

    setData(sortedData);
  };

  const handleDelete = (id) => {
    setData((data) =>
      data.filter((contact) => contact.key !== id)
    );
    setDeleted((data) => [id, ...data ]);
  };

  const columns = [
    {
      title: "Picture",
      dataIndex: "pictureUrl",
      key: "pictureUrl",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Popularity",
      dataIndex: "popularity",
      key: "popularity",
      render: (popularity) => <span>{popularity}</span>,
    },
    {
      title: "Won Oscar",
      dataIndex: "wonOscar",
      key: "wonOscar",
      render: (text) => (text ? "🏆" : " "),
    },
    {
      title: "Won Emmy",
      dataIndex: "wonEmmy",
      key: "wonEmmy",
      render: (text) => (text ? "🌟" : " "),
    },
    {
      title: "Actions",
      key: "actions",
      render: (e) => (
        <Space>
          <Button onClick={() => handleDelete(e.key)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <section>
      <div className="buttons">
        <Button type="primary" onClick={handleAddRandomContact}>Add Random Contact</Button>
        <Button type="primary" onClick={handleSortByPopularity}>Sort By Popularity</Button>
        <Button type="primary" onClick={handleSortByName}>Sort By Name</Button>
      </div>
      <Table
        columns={columns}
        dataSource={data.filter(
          (contact) => !deleted.includes(contact.key)
        )}
      />
      ;
    </section>
  );
};


export default Celebrities;