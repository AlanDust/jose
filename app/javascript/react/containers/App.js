import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Homepage from './Homepage';
import DayoneContainer from'./DayoneContainer';
import DaytwoContainer from'./DaytwoContainer';
import DaythreeContainer from'./DaythreeContainer';
import DayfourContainer from'./DayfourContainer';
import DayfiveContainer from'./DayfiveContainer';


const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='' component={Homepage} />
      <Route path='/' >
        <IndexRoute component={Homepage} />
        <Route path='/dayone' component={DayoneContainer} />
        <Route path='/daytwo' component={DaytwoContainer} />
        <Route path='/daythree' component={DaythreeContainer} />
        <Route path='/dayfour' component={DayfourContainer} />
        <Route path='/dayfive' component={DayfiveContainer} />

      </Route>
    </Router>
  )
}

export default App
