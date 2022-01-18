import React from "react";

const SortPopularity = ({setContacts, contacts}) =>{
    const comparePopularity = () => {

        let compare = contacts.sort((a, b) => {
            return b.popularity - a.popularity;
          })
          
          const organizeP = [...compare];
          return setContacts(organizeP);
    }
    return(
        
        <button onClick ={comparePopularity}>Sort By Popularity</button>
        )
    
}
export default SortPopularity;