import React from "react";
const ContactCard = props => {
  return (
    <div>
      <table>
        <tr>
          <th>
            <img alt="broken" height="100px" src={props.pictureUrl}></img>
          </th>
          <th>
            Name<p>{props.name} </p>
          </th>
          <th>
            Popularity<p> {props.popularity}</p>
          </th>
        </tr>
      </table>
    </div>
  );
};
export default ContactCard;
