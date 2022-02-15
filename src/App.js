import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Demo from "./Demo";
import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => {
        this.setState({ monsters: res });
      });
  }
  handleChange = e => this.setState({searchField : e.target.value})
  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
       
        <SearchBox placeholder='Search Monsters' handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
