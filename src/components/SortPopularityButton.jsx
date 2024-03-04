function SortPopularity(props) {

  const contacts = props.contacts;
  
  const sortContactPopu =() =>{
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
    props.setContacts(sortedContacts);

  }
  
  return (
    <div>
      <button onClick ={sortContactPopu}>Sort by popularity</button>
    </div>
  )
}

export default SortPopularity

