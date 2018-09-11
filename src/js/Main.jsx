import React, { Component } from 'react'
import moment from 'moment'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentDate: moment(),
        }

        this._updateTime = this._updateTime.bind(this)
    }

    componentDidMount() {
        this.timeInterval = setInterval(this._updateTime, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval)
    }

    render() {
        return (
            <div className="main">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn something... hopefully.</p>
                {this._renderTime()}
            </div>
        )
    }

    _updateTime() {
        this.setState({
            currentDate: moment(),
        })
    }

    _renderTime() {
        return <h3>{this.state.currentDate.format('DD.MM.YYYY HH:mm:ss')}</h3>
    }
}

export default Main
