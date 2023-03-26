import React, {Component} from 'react';
import CardList from '../componenets/CardList';
import SearchBox from '../componenets/SearchBox';
import Scroll from '../componenets/Scroll';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }

  onsearchchange = (e) => {
    this.setState({searchfield: e.target.value});
  }


  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length? 
    <h1>Loading...</h1> : 
    (
      <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onsearchchange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
      </div>
    )
  }
}

export default App;