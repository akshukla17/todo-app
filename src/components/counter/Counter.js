import React, { Component } from 'react';
const styles = {
    button: { margin: "10px" },
    counterMain:{ border: "1px solid black", height: "400px", width: "400px", alignContent: "center" }
}
class Counter extends Component {
    state = {
        counter: 0
    }
    handleUpdateCounterBy = (count) => {
        // console.log(count);
        // console.log('handleUpdatCounter is called', e.target.value);
        this.setState((preState) => {
            return { counter: preState.counter + count }
        })
    }
   
    handleReset = () => {
        this.setState({
            counter: 0
        })
    }
    render() {
        const { counter } = this.state;
        return (
          <div style={styles.counterMain}>
            Counter details
            <div>
              <span>
              <button
                  onClick={e => this.handleUpdateCounterBy(100)}
                  style={styles.button}
                >
                  Increase by 100
                </button>
                <button
                  onClick={e => this.handleUpdateCounterBy(10)}
                  style={styles.button}
                >
                  Increase by 10
                </button>
                <button
                  onClick={e => this.handleUpdateCounterBy(1)}
                  style={styles.button}
                >
                  Increase by 1
                </button>
              </span>
              <span>
                <button
                  onClick={e => this.handleUpdateCounterBy(-100)}
                  style={styles.button}
                >
                  Decrease by 100
                </button>
                <button
                  onClick={e => this.handleUpdateCounterBy(-10)}
                  style={styles.button}
                >
                  Decrease by 10
                </button>
                <button
                  onClick={e => this.handleUpdateCounterBy(-1)}
                  style={styles.button}
                >
                  Decrease by 1
                </button>
              </span>

              <h1>{counter}</h1>
              <button onClick={this.handleReset}>Reset</button>
            </div>
          </div>
        );
    }
}

export default Counter;