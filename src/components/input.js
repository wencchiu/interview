import React, { Component } from "react";
import styled from "styled-components";

const TaskInput = styled.input`
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
    this.currentTaskText = "";
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    if (this.currentTaskText.length >= 1) {
      if (e.keyCode === 13) {
        this.props.submit();
        this.currentTaskText = "";
      }
    }
  }

  onChange(e) {
    this.currentTaskText = e.target.value.trim();
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <TaskInput
        type="text"
        placeholder="Enter a city"
        id="to-do-input"
        value={this.props.currentTaskText}
        onChange={this.onChange}
        onKeyUp={this.submit}
      />
    );
  }
}

export default Input;
