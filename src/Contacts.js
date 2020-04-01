import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import "./Contacts.css";

class Contacts extends Component {
  render() {
    return (
        <TableRow>
          <TableCell align="center">
            <img className="image" src={this.props.pictureUrl} alt="" />
          </TableCell>
          <TableCell align="center">{this.props.name}</TableCell>
          <TableCell align="center">{this.props.popularity}</TableCell>
          <TableCell align="center">
            <Button   onClick={() => {
                this.props.removeContact(this.props.index);
              }}
              variant="contained">Delete contact</Button>
          </TableCell>
        </TableRow>
    );
  }
}

export default Contacts;
