import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeers from './components/RandomBeers';
import NewBeer from './components/NewBeer';


class App extends Component {
  render() {

    return (
      <div>
      <Switch>
        <Route exact path='/beers' component={Beers}/>
        <Route exact path='/random-beer' component={RandomBeers} />
        <Route exact path='/new-beer' component={NewBeer}/>
      </Switch>
      </div>
    );
  }
}

export default App;
