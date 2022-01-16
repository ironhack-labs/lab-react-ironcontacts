import React from "react";
import "./Sort.css";



const Sort = ({setContacts, contacts}) => {

    const organizeByName = () =>{
        
        let byName = contacts.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            
            return 0;
          });
          const organize = [...contacts, byName];
          return setContacts(organize);
        

    }
    
    return(
        <div>
        <button onClick ={organizeByName}>Sort By Name</button>
        </div>)
}
export default Sort;