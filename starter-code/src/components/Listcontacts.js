import React from 'react'


const Listcontacts = (props) =>{


return(
<tr>

    <th className="profile-pic"><img src={props.pictureUrl}/></th>
    <th>{props.name}</th>
    <th>{props.popularity}</th>
    <th><button onClick={props.delete}>Delete</button> </th>
</tr>
)




}







export default Listcontacts