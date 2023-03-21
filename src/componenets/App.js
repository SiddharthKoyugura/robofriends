import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import { useState } from 'react';

const App = () => {

    var [state, setState] = useState({robots:robots, searchfield:''});
    setState = (e) => {
        state.searchfield = e.target.value;
    }
    const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(state.searchfield.toLowerCase())
    });
  return (
    <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={setState} />
        <CardList robots={filteredRobots} />
    </div>
  )
}

export default App;