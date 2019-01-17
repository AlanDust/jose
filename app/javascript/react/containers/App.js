import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Homepage from './Homepage';
import VideosContainer from'./VideosContainer';
import DayoneContainer from'./DayoneContainer';
import DaytwoContainer from'./DaytwoContainer';
import DaythreeContainer from'./DaythreeContainer';
import DayfourContainer from'./DayfourContainer';
import DayfiveContainer from'./DayfiveContainer';
import DaysixContainer from'./DaysixContainer';
import DaysevenContainer from'./DaysevenContainer';
import DayeightContainer from'./DayeightContainer';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='' component={Homepage} />
      <Route path='/' >
        <IndexRoute component={Homepage} />
        <Route path='/videos' component={VideosContainer} />
        <Route path='/dayone' component={DayoneContainer} />
        <Route path='/daytwo' component={DaytwoContainer} />
        <Route path='/daythree' component={DaythreeContainer} />
        <Route path='/dayfour' component={DayfourContainer} />
        <Route path='/dayfive' component={DayfiveContainer} />
        <Route path='/daysix' component={DaysixContainer} />
        <Route path='/dayseven' component={DaysevenContainer} />
        <Route path='/dayeight' component={DayeightContainer} />

      </Route>
    </Router>
  )
}

export default App
