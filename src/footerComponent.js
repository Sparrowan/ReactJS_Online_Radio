import React, { Component } from 'react'
// import 'bulma/css/bulma.min.css'
import copyright from './resources/copyright.svg'

export default class footerComponent extends Component {
    render() {
        return (
            <div className="radio-link">
                <a href="http://www.muguku.co.ke/" rel="noopener">
                    <h2> muguku.co.ke </h2>
                </a>
                <span>
                    <img className="thisimg left-floater" src={copyright} height="20px" width="20px" alt="copyright" />
                    <h2 className="right-floater"> {new Date().getFullYear()}, All rights reserved </h2>
                </span>

            </div>
        )
    }
}