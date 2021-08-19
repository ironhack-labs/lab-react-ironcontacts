
import { Link } from 'react-router-dom';
import './ContactItem.css';

function ContactItem({ id, name, email, avatar, phone, onDeleteContact }) {
  return (
    <div className="ContactItem d-flex">
      <div className="me-auto d-flex">
        <img src={avatar} alt={name} className="avatar align-self-start img-fluid w-100 rounded-circle me-3" />
        <div className="d-flex flex-column">
          <h5 className="mb-1">{name}</h5>
          { email && <p className="m-0 text-muted"><i className="fa fa-envelope fa-fw me-1" />{email}</p> }
          { phone && <p className="m-0 text-muted"><i className="fa fa-phone fa-fw me-1" />{phone}</p> }
          <Link to={`/contacts/${id}`} className="stretched-link"/>
        </div>
      </div>
      <div>
        <i className="fa fa-times text-danger" role="button" onClick={() => onDeleteContact(id)}></i>
      </div>
    </div>
  );
}

ContactItem.defaultProps = {
  onDeleteContact: () => {}
}

export default ContactItem;
