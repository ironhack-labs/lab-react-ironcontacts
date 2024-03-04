function SortByName(props) {
  const contacts = props.contacts;

  const sortContactName = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    props.setContacts(sortedContacts);
  };

  return (
    <div>
      <button onClick={sortContactName}>Sort by Name</button>
    </div>
  );
}

export default SortByName;

