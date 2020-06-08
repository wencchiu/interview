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
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.appid}`;
    fetch(url).then(res => {
      if(res.ok){
        return res.json()
      }
      throw new Error();
    })
    .then(data =>{
      this.state.list.unshift({
        cityNum: this.cityNum,
        data: data
      });
      this.setState({
        list: this.state.list
      });
    })
    .catch(err => alert("The city does not exist. Please enter a new city."))
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
