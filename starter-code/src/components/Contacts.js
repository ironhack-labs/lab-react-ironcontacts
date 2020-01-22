import React from "react";

const Contacts = props => {

  return (
    <div >
      <table className="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>
            <img src={props.pictureUrl} width="70px" alt="" />
          </td>
          <td>{props.name}</td>
          <td>{props.popularity}</td>
          <td>
          <button className="btns" onClick={() => this.deleteContact()}>
                  Delete
                </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Contacts;
