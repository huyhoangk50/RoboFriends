import React, { Component} from 'react';
import CardList from '../components/CardList';
import {connect} from 'react-redux';
// import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField, requestRobots} from '../actions';
// import { searchRobots } from './reducers';


const mapStateToProps = state => {
  console.log(state);
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     robots: []
  //   };
  // }

  componentDidMount(){
    this.props.onRequestRobots();
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => {
    //   return response.json();
    // }).then(users => {
    //   this.setState({robots: users});
    // });
  }

  // onSearchChange = (event) => {
  //   this.setState({searchField: event.target.value});
  // }

  render(){
    // const {robots} = this.state;
    const {searchField, onSearchChange, robots, isPending, error} = this.props;
    const filterRobots = robots.filter(robot => {
      return (robot.name.toLocaleLowerCase().includes(searchField));
    });
    if(isPending){
      return (
        <h1>Loading</h1>
      );
    } else {
      return (
        <div className="tc">
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox 
            searchChange = {onSearchChange}
            searchField = {searchField}
          />
          <Scroll>
            <ErrorBoundry>
              <CardList robots = {filterRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
