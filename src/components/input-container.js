import React, { Component } from "react";
import styled from "styled-components";
import Input from "./input";
import InputBtn from "./input-btn";

const Wrapper = styled.div`
  width: 90%;
  min-width: 800px;
  max-width: 1400px;
  margin: 30px auto 0;
  background-color: #3d3b71;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    min-width: 300px;
  }
`;

const Title = styled.h1`
  padding: 30px;
  text-align: center;
  font-size: 70px;
  color: #fff;

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    padding: 20px;
  }
`;

const InputBox = styled.div`
  width: 70%;
  padding: 20px 0 50px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px 0 30px;
  }
`;

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: ""
    };
    this.submitInput = this.submitInput.bind(this);
    this.setCurrentText = this.setCurrentText.bind(this);
  }

  setCurrentText(text) {
    this.setState({ currentText: text });
  }

  submitInput() {
    this.setState({ currentText: "" });
    this.props.addInputCity(this.state.currentText);
  }

  render() {
    return (
      <Wrapper>
        <Title>Weather Page</Title>
        <InputBox>
          <Input
            onChange={this.setCurrentText}
            currentText={this.state.currentText}
            submit={this.submitInput}
          />
          <InputBtn onClick={this.submitInput} />
        </InputBox>
      </Wrapper>
    );
  }
}

export default InputContainer;
