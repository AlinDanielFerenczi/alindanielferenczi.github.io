import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../css/logo.css';

export default class Home extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div id="logo-container">
                <img src={process.env.PUBLIC_URL+"/logo.png"} className="App-logo" alt="logo" />
            </div>
        )
    }
}
