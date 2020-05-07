import React, { Component, Fragment } from "react";

const ContactCard = (props) => {
  const celebs = props.celebs.map((celeb) => {
    return (
      <Fragment>
        <tr key={celeb.id}>
          <td>
            <img height="200" width="150" src={celeb.pictureUrl} alt="" />
          </td>
          <td>Name: {celeb.name}</td>
          <td>Populartiy: {celeb.popularity}</td>
          <td>
            <button onClick={()=>{props.delete(celeb)}}>Delete this -> {celeb.id}</button> 
          </td>
        </tr>
      </Fragment>
    );
  });

  return <div>{celebs}</div>;
};

export default ContactCard;


// empty function is called callbackfunction in order to use an argument 