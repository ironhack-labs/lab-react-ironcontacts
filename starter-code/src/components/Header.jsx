import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  background: black;
  .bg-dark {
    background: black;
  }
  .nav-item {
    cursor: pointer;
  }
`;

export const Header = ({ addRandomContact, sortByName, sortByPopularity }) => (
  <NavBar>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand" href="#">
        Contacts
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <div class="nav-item nav-link" onClick={addRandomContact}>
            Add Contact
          </div>
          <div class="nav-item nav-link" onClick={sortByName}>
            Sort By Name
          </div>
          <div class="nav-item nav-link" onClick={sortByPopularity}>
            Sort By Popularity
          </div>
        </div>
      </div>
    </nav>
  </NavBar>
);
