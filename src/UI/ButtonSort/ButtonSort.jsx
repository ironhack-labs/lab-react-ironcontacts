function ButtonSort({ listContacts, setListContacts }) {
    return (
      <>
        <button type="button" onClick={() => {
  
          const sortedContacts = listContacts.slice().sort((a, b) => a.name.localeCompare(b.name));
          setListContacts(sortedContacts);
        }}>Sort by name</button>
  
        <button type="button" onClick={() => {
          const sortedContacts = listContacts.slice().sort((a, b) => b.popularity - a.popularity);
          setListContacts(sortedContacts);
        }}>Sort by popularity</button>
      </>
    );
  }

  export default ButtonSort