import React, { Component } from 'react';
const styles = {
    button: { margin: "10px" }
}
class Counter extends Component {
    state = {
        start: 0
    }
    handleIncreaseBy10 = () => {
        // const { start } = this.state;
        // console.log('handleUpdatCounter is called');
        this.setState((preState) => {
            return { start: preState.start + 10 }
        })
    }
    handleDecreaseBy10 = () => {
        const { start } = this.state;
        // console.log('handleUpdatCounter is called');
        this.setState({
            start: start - 10
        })
    }
    handleReset = () => {
        this.setState({
            start: 0
        })
    }
    render() {
        const { start } = this.state;
        return (<div style={{ border: "1px solid black", height: "400px", width: "400px", alignContent: "center" }}>
            Counter details
                <div >
                <button onClick={this.handleIncreaseBy10} style={styles.button}>
                    Increase by 10</button>

                <button onClick={this.handleDecreaseBy10} style={styles.button}>
                    Decrease by 10</button>

                <h1>
                    {start}
                </h1>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        </div>);
    }
}

export default Counter;