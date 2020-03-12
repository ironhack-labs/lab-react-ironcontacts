import React from "react";

class SortPopularityButton extends React.Component {
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
        <button onClick={this.props.sortPopularityClick}>
          Sort By Popularity{" "}
        </button>{" "}
      </div>
    );
  }
}

export default SortPopularityButton;
