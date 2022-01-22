import React from 'react';

const Remove = ({onDelete, id}) => {
  return <td><button onClick={()=>{onDelete(id)}}>Delete</button></td>;
};

export default Remove;
