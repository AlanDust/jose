import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Homepage from './Homepage';
import DayoneContainer from'./DayoneContainer';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='' component={Homepage} />
      <Route path='/' >
        <IndexRoute component={Homepage} />
        <Route path='/dayone' component={DayoneContainer} />
      </Route>
    </Router>
  )
}

export default App
