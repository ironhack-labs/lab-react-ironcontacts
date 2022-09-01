import './Contact.css'

function Contact({name, pictureUrl, popularity, wonOscar, wonEmmy, deleteContact }) {

const handleClickDelete = () => {
    deleteContact(name);
};



let rating = popularity.toFixed(2)

  return (
    <div>
      <li className="row mb-2">
        <div className="col">
          <img src={pictureUrl} alt={name} className='w-50 contact-image'  />        
        </div>
        <div className="col align-self-center">
          {name}
        </div>
        <div className="col align-self-center">
          {rating}
        </div>
        <div className="col align-self-center">
          {wonOscar && '🏆'}
        </div>
        <div className="col align-self-center">
          {wonEmmy && '🏆'}
        </div>
        <div className="col align-self-center">
          <div className="d-grid gap-2 d-md-block">
            <button onClick={handleClickDelete} className='btn btn-danger'>Delete</button>
          </div>
        </div>
      </li>
    </div>
  )
}

export default Contact