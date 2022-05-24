import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

function CelebrityCard(props) {
  /*   console.log(props);
  console.log("contact name: " + props.celebrity.name); */
  const { clickToDelete } = props;
  const { pictureUrl, name, popularity, wonOscar, wonEmmy } = props.celebrity;
  return (
    <tr>
      <td>
        <Image rounded fluid src={pictureUrl} alt="" width="100" />
      </td>
      <td> {name}</td>
      <td>{popularity.toFixed(2)}</td>
      <td>{wonOscar ? "🏆" : ""}</td>
      <td>{wonEmmy ? "⭐" : ""}</td>
      <td>
        <Button
          onClick={() => clickToDelete(props.celebrity.id)}
          variant="light"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default CelebrityCard;
