import React from "react";

const SortPopularity = ({setContacts, contacts}) =>{
    const comparePopularity = () => {

        let compare = contacts.sort((a, b) => {
            return b.popularity - a.popularity;
          })
          
          const organizeP = [...contacts, compare];
          return setContacts(organizeP);
    }
    return(
        <div>
        <button onClick ={comparePopularity}>Sort By Popularity</button>
        </div>)
    
}
export default SortPopularity;