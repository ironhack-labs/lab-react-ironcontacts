import React from 'react';

export const DetailContact = ({ name, pictureUrl, popularity }) => {
  return (
    <div>
      <p>
        <img src={pictureUrl} alt="" />
      </p>
      <p>{name}</p>
      <p>{popularity}</p>
    </div>
  );
};

export default DetailContact;
