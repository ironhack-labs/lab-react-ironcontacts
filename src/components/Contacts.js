import React from 'react';
import 'bulma/css/bulma.css'
import './Contacts.css'

class Contact extends React.Component {

    // function Contact(props) {

    deleteHandler = () => {
        this.props.deleteHandler(this.props.contactId)
    }

    render() {
        return (
            <div>
                <section className="hero is-primary is-bold is-large">
                    <div className="title"> Get it touch with your Soulmate!
            </div>
                </section>
                <div className="contacts ">
                    <div className="container">

                        <div class="card">
                            <div class="card-image">
                                <img src={this.props.pictureUrl} alt="" />

                            </div>

                            <div className="subtitle">
                                {this.props.name}
                            </div>

                            <div className="subtitle">
                                Popularity
                    {' ' + this.props.popularity}
                            </div>

                            <button className="button is-link is-small is-light" onClick={this.deleteHandler}>DELETE THIS CONTACT</button>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;