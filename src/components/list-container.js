import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  min-width: 800px;
  max-width: 1400px;
  margin: auto;

  @media (max-width: 1024px) {
    min-width: 300px;
  }

  & > p {
    text-align: center;
    font-size: 60px;
    padding: 20px;
    background-color: #ececec;
  }
`;

const List = styled.ul`
  button {
    border: none;
    height: 35px;
    width: 55px;
    color: #58564f;
    margin: 10px;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 1024px) {
      font-size: 12px;
      margin: 5px;
      width: 48px;
    }
  }
`;

const Li = styled.li`
  list-style-type: none;
  line-height: 60px;
  padding: 6px 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    line-height: 50px;
  }

  &:nth-child(odd) {
    background-color: #fcf7de;
  }

  &:nth-child(even) {
    background-color: #f6f5f8;
  }
`;

class ListContainer extends Component {
  render() {
    var cityList = this.props.list.map(cityWeather => (
      <Li key={cityWeather.cityNum}>{cityWeather.data}</Li>
    ));
    return (
      <Wrapper>
        <List>{cityList}</List>
      </Wrapper>
    );
  }
}

export default ListContainer;
