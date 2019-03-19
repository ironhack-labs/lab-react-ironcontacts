import React from 'react'


const Listcontacts = (props) =>{


return(
<tr>

    <th className="profile-pic"><img src={props.pictureUrl}/></th>
    <th className="act-name" >{props.name}</th>
    <th className="act-pop">{props.popularity}</th>
    <th><button className="delete" onClick={props.delete}>Delete</button> </th>
</tr>
)




}







export default Listcontacts