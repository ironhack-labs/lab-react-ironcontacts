import React from "react";
import contacts from "../contacts.json";
import { Space, Table, Button } from "antd";
import { useState } from "react";

const Celebrities = () => {
  const [deletedKeys, setDeletedKeys] = useState([]);

  const [data, setData] = useState(
    contacts
      .map((celebrity) => {
        return {
          key: celebrity.id,
          name: celebrity.name,
          pictureUrl: (
            <img src={celebrity.pictureUrl} alt={celebrity.name} width="100" />
          ),
          popularity: celebrity.popularity,
          wonOscar: celebrity.wonOscar,
          wonEmmy: celebrity.wonEmmy,
          actions: (
            <Button onClick={() => handleDelete(celebrity.id)}>Delete</Button>
          ),
        };
      })
      .slice(0, 5)
  );

  const handleAddRandomContact = () => {
    const filteredContacts = contacts.filter(
      (contact) => !data.some((celebrity) => celebrity.key === contact.id)
    );

    if (filteredContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredContacts.length);
      const randomContact = filteredContacts[randomIndex];

      setData((prevData) => [
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
        ...prevData,
      ]);
    }
  };

  const handleSortByPopularity = () => {
    setData((prevData) => {
      const dataCopy = [...prevData];

      dataCopy.sort((a, b) => b.popularity - a.popularity);

      return dataCopy;
    });
  };

  const handleSortByName = () => {
    const sortedData = [...data].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    setData(sortedData);
  };

  const handleDelete = (id) => {
    setData((prevState) =>
      prevState.filter((celebrity) => celebrity.key !== id)
    );
    setDeletedKeys((prevState) => [...prevState, id]);
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
        <Space size="middle">
          <Button onClick={() => handleDelete(e.key)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <section>
      <div className="sortButtons">
        <Button onClick={handleAddRandomContact}>Add Random Contact</Button>
        <Button onClick={handleSortByPopularity}>Sort By Popularity</Button>
        <Button onClick={handleSortByName}>Sort By Name</Button>
      </div>
      <Table
        columns={columns}
        dataSource={data.filter(
          (celebrity) => !deletedKeys.includes(celebrity.key)
        )}
      />
      ;
    </section>
  );
};

export default Celebrities;
