import React from 'react'

const ContactBox = (props) => {

    return (
        <div className="row align-items-center info">
            <div className="col-4 delete">
                <button className="btn" onClick={() => props.deleteContact(props.contact)}>
                    <svg viewBox="0 0 448 512">
                        <path fill="currentColor" d="M440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h18.9l33.2 372.3a48 48 0 0 0 47.8 43.7h232.2a48 48 0 0 0 47.8-43.7L421.1 96H440a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zm184.8 427a15.91 15.91 0 0 1-15.9 14.6H107.9A15.91 15.91 0 0 1 92 465.4L59 96h330z"></path>
                    </svg>
                </button>
                <div className="picture" style={{background: `url(${props.contact.pictureUrl}) #333 no-repeat center center / cover`}}></div>
            </div>
            <div className="col-4">{props.contact.name}</div>
            <div className="col-4 text-center pop">
            <svg viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
            <strong>{(props.contact.popularity / 4).toFixed(1)}</strong> / 5 </div>
        </div>
    )
}

export default ContactBox