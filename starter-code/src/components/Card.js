import React from "react";
import Button from "./Button";

const Card = ({ pictureUrl, name, popularity }) => {
  return (
    <tr>
      <td>
        <img
          className="picture"
          src={pictureUrl}
          alt="photo"
          width="100px"
          height="100px"
        />
      </td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>
        <Button className="button delete" onClick={() => this.removeContact}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Card;
