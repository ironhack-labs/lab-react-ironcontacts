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
                <strong>Name</strong>
                <br />
                <span>{this.props.contact.name}</span>
              </p>
            </div>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Popularity</strong>
                <br />
                <span>{this.props.contact.popularity}</span>
              </p>
            </div>
          </div>
          <div className="media-right">
            <button className="button is-danger" onClick={this.handleClick}>
              x
            </button>
          </div>
        </article>
      </div>
    );
  }
}

export default ContactBox;
