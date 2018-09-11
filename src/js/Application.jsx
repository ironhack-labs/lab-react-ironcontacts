import React from 'react'
import Navigation from './Navigation'
import Main from './Main'
import Contacts from './Contacts'

class Application extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Main />
                <Contacts />
            </div>
        )
    }
}

export default Application
