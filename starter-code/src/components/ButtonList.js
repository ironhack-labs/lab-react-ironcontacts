import React from 'react';
import AddRandom from './AddRandom'
import SortName from './SortName'
import SortPopularity from './SortPopularity'
import '../styles/ButtonList.css'

const ButtonList = ({addContact, sortContacts, sortPopularity}) => {
    return ( 
        <div className="buttonList">
            <AddRandom addContact={() => addContact()}/>
            <SortName sortContacts={() => sortContacts()}/>
            <SortPopularity sortPopularity={() => sortPopularity()}/>
        </div>
     );
}
 
export default ButtonList;