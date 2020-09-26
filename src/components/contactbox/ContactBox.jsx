import React from 'react';

class ContactBox extends React.Component {
  state = {};

  handleClick = () => {
    this.props.onDelete(this.props.contact.id);
  };

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
        <button className="button is-danger" onClick={this.handleClick}>
          x
        </button>
      </div>
    );
  }
}

export default ContactBox;
