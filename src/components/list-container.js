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

const Th = styled.th`
  width: 10%;
  background-color: #fcf7de;
`;

const Tr = styled.tr`
  line-height: 60px;
  background-color: #f6f5f8;
`;

const Td = styled.td`
  width: 10%;
  text-align: center;

  div {
    margin: auto;
  }

  p {
    line-height: 30px;
    margin: 5px;
  }
`;

const Icon = styled.div`
  width:60px;
  height:60px;
  display:flex;
  background-image: url(${props => props.icon});
  background-size: contain;
`;

class ListContainer extends Component {
  render() {
    var cityList = this.props.list.map(cityWeather => {
      const { data:{ name, main:{temp}, weather} } = cityWeather;
      return (
        <Tr>
          <Td>{name}</Td>
          <Td>{temp}</Td>
          <Td>
            <p>{weather[0].main}</p>
            <Icon icon={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}/>
          </Td>

        </Tr>
        )
    });
    return (
      <Wrapper>
        <table>
          <Tr>
            <Th>City</Th>
            <Th>Temperature(Celsus)</Th>
            <Th>Weather</Th>
          </Tr>
          {cityList}
        </table>
      </Wrapper>
    );
  }
}

export default ListContainer;
