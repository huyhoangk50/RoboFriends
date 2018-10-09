import React, { Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    }).then(users => {
      this.setState({robots: users});
    });
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  render(){
    const {robots, searchField} = this.state;
    const filterRobots = robots.filter(robot => {
      return (robot.name.toLocaleLowerCase().includes(searchField));
    });
    if(!robots.length){
      return (
        <h1>Loading</h1>
      );
    } else {
      return (
        <div className="tc">
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox 
            searchChange = {this.onSearchChange}
            searchField = {searchField}
          />
          <Scroll>
            <CardList robots = {filterRobots}/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
