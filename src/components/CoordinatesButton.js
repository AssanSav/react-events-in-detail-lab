import React, {Component} from "react"

export default class Coordinatesbutton extends Component {

    handleOnClick = (event) => {
        const arr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(arr)
    }

    render() {
        return (
            <button onClick={this.handleOnClick}>Click Me!</button>
        )
    }
}