import './Contact.css'

function Contact({name, pictureUrl, popularity}) {

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
      </li>
    </div>
  )
}

export default Contact