import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            time: new Date()
        }
        this.intervalid = null;
    }
    render() {
        return (
            <div className="Clock">
                <h3 id="time">{this.getTimeString()}</h3>
            </div>
        );
    }
    componentDidMount() {
        this.intervalid= setInterval(
            () => { this.setState({time: new Date()})},
            1*1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalid);
    }

    getTimeString() {
        const currTime = this.state.time;
        const [hrs, mins, secs] = [currTime.getHours(), currTime.getMinutes(), currTime.getSeconds()];
        const amOrpm = hrs >= 12 ? "PM" : "AM";
        const hrstwelveHrForm = hrs>12 ? hrs - 12 : hrs;
        const hrString=""+(hrstwelveHrForm);
        const minString=this.toTwoDigits(mins);
        const secString=this.toTwoDigits(secs);
        const timeString = `${hrString}:${minString}:${secString} ${amOrpm}`;
        return timeString;
    }

    toTwoDigits(num) {
        return `${num<10 ? "0":""}${num}`;
    }
}


export default App;
