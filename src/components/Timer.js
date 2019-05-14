import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }
    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>{this.state.time.toLocaleTimeString()}</div>
        )
    }
}
export default Timer;