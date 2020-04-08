import React, { Component } from "react"

export default class DelayedButton extends Component {

    handleDelayOnClick = (event) => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    } 

    render() {
        return (
            <button onClick={this.handleDelayOnClick}>Click To Delay</button>
        )
    }
}