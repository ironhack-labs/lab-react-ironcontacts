import React from 'react';

const BestCard = (props) => {
  return (
    <table className="table-container">
      <tbody>
        <tr>
          <td>
            <img className="image-style" src={props.pictureUrl} alt="" />
          </td>
          <td>{props.name}</td>
          <td>{props.popularity}</td>
          <td>
            <button className="button-style" onClick={props.clickToDelete}>
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BestCard;
