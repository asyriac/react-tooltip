import React, { Component } from "react";
import "./App.css";
import Text from "./components/Text";
import Tooltip from "./components/Tooltip";
import Input from "./components/Input";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showTooltip: false,
      direction: "top",
    };
  }

  toggleTooltip = () => {
    this.setState({
      showTooltip: !this.state.showTooltip,
    });
  };

  setDirection = (d) => {
    this.setState({
      direction: d,
    });
  };

  render() {
    const { showTooltip } = this.state;
    console.log(this.state.direction);
    return (
      <div className="App">
        <div>
          <Input setDirection={this.setDirection} />
          <Text toggle={this.toggleTooltip} />
          {showTooltip && <Tooltip direction={this.state.direction} />}
        </div>
      </div>
    );
  }
}

export default App;
