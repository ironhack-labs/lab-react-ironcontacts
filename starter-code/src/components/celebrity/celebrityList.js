import React from 'react';
import CelebrityItem from './celebrityItem';


const CelebrityList =({indexes, deleteItem}) =>{
let a = indexes;

return(
<div className="lista">
<form>
<div>
<span> Picture</span>
<span> Name</span>
<span> Popularity </span>

{a.map((n,i) => <CelebrityItem key = {i} index = {n} deleteItem={() => deleteItem(i)}/> )}

</div>
</form>
</div>)

};

export default CelebrityList