import React from 'react';
import "./list-contact.css";

/*

id: "11731993-0604-4bee-80d5-67ad845d0a38"
name: "Idris Elba"
pictureUrl: "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg"
popularity: 11.622713
*/
const ListContact = ({list}) => {

    console.log(list);
    
    return (
        <table className="list-contact">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
            </thead>
            <tbody>

                {list.map((individu, index) => (
                    <tr key={index} className="individu">
                        <td><img src={individu.pictureUrl} alt={individu.name} className="individu-img"/></td>
                        <td className="individu-name">{individu.name}</td>
                        <td className="individu-popularity">{individu.popularity}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    )
}

export default ListContact;
