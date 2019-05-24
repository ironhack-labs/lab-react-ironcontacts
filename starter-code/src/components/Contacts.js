import React from 'react'

// const Contacts = () => (
//     <p>hola</p>
// )


class Contacts extends React.Component {
    render() {
      const { contact } = this.props
  
      return (
        <div className="Episode card">
          <img src={contact.pictureUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{contact.name}</h5>
              <p className="card-title">{contact.popularity}</p>
          </div>
          <button color="danger" onClick={()=>this.props.delete}>
            Delete
          </button> 
        </div>
      );
    }
  }

  export default Contacts