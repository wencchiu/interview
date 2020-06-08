import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 80px;
  height: 50px;
  border: none;
  font-size: 18px;
  opacity: 0.7;
  transition: opacity 0.3s;

  @media (max-width: 768px) {
    width: 40%;
    max-width: 150px;
    height: 36px;
    margin-top: 20px;
    font-size: 14px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const InputBtn = props => <Button onClick={props.onClick}>ADD</Button>;

export default InputBtn;
