import React from "react";
import styled from "styled-components";

const ContactCard = styled.div`
  display: inline-block;
  position: relative;
  font-family: "Roboto";
  width: 20%;
  .img {
    width: 100%;
  }
  .name {
    position: absolute;
    bottom: 25px;
    left: 5px;
    color: white;
  }
  .popularity {
    position: absolute;
    color: white;
    bottom: 10px;
    left: 6px;
    font-size: 14px;
  }
  .btn {
    position: absolute;
    right: 10px;
    top: 5px;
    border: none;
    background: none;
    color: white;
    font-size: 15px;
    cursor: pointer;
  }
  .text {
    margin: 0;
    filter: drop-shadow(1px 1px 1px black);
  }
`;

export const ContactItem = ({ picture, name, popularity, deleteContact }) => (
  <ContactCard>
    <div className="card">
      <img className="img" src={picture} alt="contact image" />
      <h3 className="name text">{name}</h3>
      <p className="popularity text">Popularity: {popularity}</p>
      <button className="btn text" onClick={deleteContact}>
        X
      </button>
    </div>
  </ContactCard>
);
