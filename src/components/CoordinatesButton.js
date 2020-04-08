import React, {Component} from "react"

export default class Coordinatesbutton extends Component {

    coordinateOnClick = (event) => {
        this.props.onReceiveCoordinates(new Array(event.clientX, event.clientY))
    }

    render() {
        return (
            <button onClick={this.coordinateOnClick}>Click me to Coordinate!</button>
        )
    }
}