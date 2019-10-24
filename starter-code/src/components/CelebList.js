import React from "react";
import CelebItem from "./CelebItem";
import { Table } from "reactstrap";

const CelebList = ({ deleteItem, contact }) => {
  return (
    <Table striped dark>
      <thead>
        <tr>
          <th>Picture:</th>
          <th>Name:</th>
          <th>Popularity:</th>
        </tr>
      </thead>
      <tbody>
        {contact.map((n, i) => (
          <CelebItem key={i} blah={n} deleteItem={() => deleteItem(i)} />
        ))}
      </tbody>
    </Table>
  );
};

export default CelebList;
