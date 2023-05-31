import pContacts from "../contacts.json";

function Contacts() {
  function getRandomContact(min, max) {
    return Math.random() * (max - min) + min;
  }
  return (
    <div className="list">
      <button onClick={getRandomContact()}>console</button>
      <div className="contact">
        <h4>Picture</h4>
        <h4>Name</h4>
        <h4>Rating</h4>
        <h4>Won Oscar</h4>
        <h4>Won Emmy</h4>
      </div>

      {pContacts.slice(0, 5).map((contact) => {
        return (
          <div className="contact">
            <img
              src={contact.pictureUrl}
              alt="contact pic"
              className="pic"
            ></img>
            <p>{contact.name}</p>
            <p>{contact.popularity}</p>
            {contact.wonOscar ? <p>🏆</p> : ""}
            {contact.wonEmmy ? <p>🏆</p> : ""}
          </div>
        );
      })}
    </div>
  );
}
export default Contacts;
