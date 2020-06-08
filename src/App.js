import React, { Component } from "react";
import InputContainer from "./components/input-container";
import ListContainer from "./components/list-container";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[]
    };
    this.addInputCity = this.addInputCity.bind(this);
    this.cityNum = 0;
    this.appid = "bd45fc9db8849cb46d00a451483ccd44";
  }

  addInputCity(city){
    this.cityNum += 1;
    let url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.appid}`;
    let data = fetch(url).then(res => res.json());
    this.state.list.unshift({
      cityNum: this.cityNum,
      data: data
    });
    this.setState({
      list: this.state.list
    });
  }

  render() {
    return (
      <div>
        <InputContainer addInputCity={this.addInputCity} />
        <ListContainer list={this.state.list} />
      </div>
    )
  }
}

export default App;
