import React from "react";
import Contacts from "./Contacts";
import axios from "axios";

class Application extends React.Component {
  render() {
    return (
      <div>
        <Contacts />
      </div>
    );
  }
}

export default Application;
