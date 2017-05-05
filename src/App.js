import React, { Component } from 'react'
import 'App.css'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Nav from 'containers/Nav/Nav'
import MovieList from 'containers/MovieList/MovieList'
import MovieShow from 'containers/MovieShow/MovieShow'
import NotFound from 'components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path="/" component={MovieList}/>
        <Route path="/movie/:id" component={MovieShow}/>
        <Route component={NotFound}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
