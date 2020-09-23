import React from 'react'



export default function CelebritiesList(props) {
        const celebrities = props.celebrities.map(celebrity => {
            return (
                <tr key={celebrity.id}>
                    <td> <img src ={celebrity.pictureUrl} alt='celebrityPhoto' width="90px"/></td>
                    <td>{celebrity.name}</td>
                    <td>{celebrity.popularity}</td>
                </tr>
    )
});
console.log(celebrities)
return <table class="table">
<tr>
<th>Picture</th>
<th>Name</th>
<th>Popularity</th>

</tr>
{celebrities}
</table>
}
