import React from 'react';

const ContactRow = (props) => {
      return (
  <div className="col-12 contact-card">
        <div className="row">
          <div className="col-3">
            <img alt={props.name} className="img-contact" src={props.pictureUrl}></img>
          </div>
          <div className="col-3 d-flex justify-content-left align-items-center t">
            <h4>{props.name}</h4>
          </div>
          <div className="col-3 d-flex justify-content-left align-items-center t">
            <h4>{props.popularity}</h4>
          </div>
          <div className="col-3 d-flex justify-content-left align-items-center t">
           <button type="button" className="btn btn-danger" onClick={props.onClickDelete}><strong>x</strong></button>
          </div>
        </div>
  </div>
    );
  }

export default ContactRow