import React from "react";

class SortNameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sort: 0 };
  }

  render() {
    return (
      <div>
        <>
          <p className="nameSize">{this.props.name}</p>
        </>
        <button onClick={this.props.sortNameClick}>Sort Contacts </button>{" "}
      </div>
    );
  }
}

export default SortNameButton;
