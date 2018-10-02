import React, { Component } from "react";
import ContactRow from "./ContactRow";

const TableContacts = () => {
  return (
      <table>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
    </tr>
    <ContactRow/>
    </table>
  );
};

export default TableContacts;
