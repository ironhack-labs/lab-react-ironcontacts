function SortByName(props) {
  const contacts = props.contacts;

  const sortContactName = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      const surnameA = a.name.split(' ')[1]; 
      const surnameB = b.name.split(' ')[1]; 
      if (surnameA < surnameB) {
        return -1;
      }
      if (surnameA > surnameB) {
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

