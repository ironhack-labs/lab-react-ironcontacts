import React from 'react';

import contacts from '../../contacts.json'

const CelebrityItem = ({index, deleteItem})=>{
index = index;

let Name = contacts[index].name;
let Pic = contacts[index].pictureUrl;
let Pop = contacts[index].popularity;

return (
<div>
<img src={Pic} width = '100px' height = '100px'/>
<span> {Name} </span>
<span> {Pop} </span>
<button onClick={deleteItem}> Delete </button>
</div>
 )};

export default CelebrityItem