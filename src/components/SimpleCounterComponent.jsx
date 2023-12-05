import React, { Component } from "react";

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      toggle: false,
    };

    this.increaseCounter = this.increaseCounter.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  increaseCounter() {
    if (this.state.toggle === true) {
      this.setState({
        counter: this.state.counter + 1,
      });
    } else {
      this.setState({
        counter: this.state.counter,
      });
    }
  }

  toggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    console.log("This is Simple Component");
    return (
      <div>
        <div>Simple Component</div>
        <div>{this.state.counter}</div>
        <div>
          <button onClick={this.toggle}>Set Toggle</button>
          <button onClick={this.increaseCounter}>Counter</button>
        </div>
      </div>
    );
  }
}

export default SimpleCounterComponent;
