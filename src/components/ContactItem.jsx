function ContactItem({ event, onDelete }) {
  //iteration 5
  const handleDelete = () => {
    onDelete(event);
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

ContactItem.defaultProps = {
  handleDelete: () => {},
};

export default ContactItem;
