import React from 'react';

class ContactBox extends React.Component {
  state = {};

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.contact.pictureUrl} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.contact.name}</strong> <br />
                <small>Popularity {this.props.contact.popularity}</small>
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default ContactBox;
