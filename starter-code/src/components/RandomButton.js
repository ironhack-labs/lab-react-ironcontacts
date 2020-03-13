import React from "react";
import styled from "styled-components";

const ButtonRandom = styled.button`
  background-size: cover;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  transition: 0.3s all;
  outline: none;
  &:hover {
    background-color: grey;
    transform: scale(1.1);
    color: white;
    outline: none;
  }
`;

class RandomButton extends React.Component {
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
        <ButtonRandom onClick={this.props.randomClick}>
          Add Random Contact
        </ButtonRandom>{" "}
      </div>
    );
  }
}

export default RandomButton;
