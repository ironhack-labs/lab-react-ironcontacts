import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { random: 0 };
  }

  render() {
    return (
      <div>
        <>
          <p className="nameSize">{this.props.name}</p>
        </>
        <button onClick={this.props.handleClick}>Add Random Contact </button>{" "}
      </div>
    );
  }
}

export default Button;
