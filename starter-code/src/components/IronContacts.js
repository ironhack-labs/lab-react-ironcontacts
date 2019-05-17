import React from "react";

class IronContacts extends React.Component {
  render() {
    const { name, pictureUrl, popularity } = this.props.data;
    const { deleteContact } = this.props;

    return (
      <React.Fragment>
        <td>
          <img width="75px" src={pictureUrl} alt={name} />
        </td>
        <td>
          <h4>{name}</h4>
        </td>
        <td>{popularity} </td>
        <td>
          <button
            className="uk-button uk-button-default uk-button-small"
            onClick={deleteContact}
          >
            Delete
          </button>
        </td>
      </React.Fragment>
    );
  }
}

export default IronContacts;
