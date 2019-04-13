import React from "react";

const Contact = ({name, popularity, pictureUrl, deleteContact}) => {

    return (
      <div className="card spacing">
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src={pictureUrl} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong>
              <br/>
              Popularity: {popularity}
            </p>
          </div>
        </div>
        <div className="media-right">
          <button onClick={deleteContact} className="delete" />
        </div>
      </article>
      </div>
    );
}

export default Contact;
