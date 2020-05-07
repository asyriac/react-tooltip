import React from "react";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.setDirection(this.state.input);
    this.setState({
      input: "",
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="input" value={this.state.input} onChange={this.onChange} />
        </form>
      </div>
    );
  }
}
