import React from 'react';

const SortByName = ({contacts, setContacts}) => {
  const organizeByName = () => {
    let sorted = contacts.sort((a, b)=>{
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    })
    const organize = [...sorted];
    return setContacts(organize);
  }
    return <button onClick={organizeByName}>Sort By Name</button>;
};

export default SortByName;
