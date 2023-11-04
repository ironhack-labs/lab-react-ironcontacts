function ButtonsList(props) {
  return (
    <div className="buttons-list">
      <button className="button" onClick={props.handleCreateRandomContact}>
        Add Random Contact
      </button>
      <button onClick={props.sortContactsByName}>Sort by name</button>
      <button onClick={props.sortContactsByPopularity}>
        Sort by popularity
      </button>
    </div>
  );
}

export default ButtonsList;
