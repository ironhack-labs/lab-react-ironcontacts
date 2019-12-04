import React from 'react'

function ContactCard(props) {

    const { name, picture, popularity } = props;

    return (
        <div>


            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                <tr>
                    <td><img src={picture} alt="" width="100px" height="auto"/></td>
                    <td>{name}</td>
                    <td>{Math.round(popularity * 100) / 100}</td>
                </tr>

                </table>
        </div>
    )
}

export default  ContactCard;
