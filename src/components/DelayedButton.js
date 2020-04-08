import React, { Component } from "react"

export default class Delay extends Component {

    delayOnClick = (event) => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
    
    render() {
        return (
            <button onClick={this.delayOnClick}>Click me to Delay!</button>
        )
    }
}