import React, { Component } from "react";
import styled from "styled-components";

const CityInput = styled.input`
  width: 90%;
  height: 50px;
  padding-left: 10px;
  border: none;
  font-size: 18px;
  opacity: 0.5;
  transition: opacity 0.3s;

  @media (max-width: 1024px) {
    width: 100%;
  }

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

class Input extends Component {
  constructor(props) {
    super(props);
    this.currentText = "";
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    if (this.currentText.length >= 1) {
      if (e.keyCode === 13) {
        this.props.submit();
        this.currentText = "";
      }
    }
  }

  onChange(e) {
    this.currentText = e.target.value.trim();
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <CityInput
        type="text"
        placeholder="Enter a city"
        id="city-input"
        value={this.props.currentText}
        onChange={this.onChange}
        onKeyUp={this.submit}
      />
    );
  }
}

export default Input;
