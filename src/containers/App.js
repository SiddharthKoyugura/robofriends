import React, { useState, useEffect } from 'react';
import CardList from '../componenets/CardList';
import SearchBox from '../componenets/SearchBox';
import Scroll from '../componenets/Scroll';
import ErrorBoundary from '../componenets/ErrorBoundary';
import './App.css';

function App() {

  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  // }

  const [ robots, setRobots ] = useState([]);
  const [ searchfield, setSearchField ] = useState('');

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(users => this.setState({robots: users}));
  // }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then(users => setRobots(users));
    }, [])

    const onsearchchange = (e) => {
      setSearchField(e.target.value);
    }
    
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length? 
    <h1>Loading...</h1> : 
    (
      <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onsearchchange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
      </div>
    )
  }

export default App;