import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/*The BrowserRouter allows me to create an url for each component of the App. I create a basename
        based on the github subpages. */}
        <BrowserRouter basename="/free&#45;mind">
        {/* Switch goes through each Route looking for the specific path. If the first one isn't, it checks the
        second one, etc. The default case is the one without path. */}
          <Switch>
            <Route exact path="/" component={Home}  />
            <Route component={NotFound} />
          </Switch>

        </BrowserRouter>
      </div>

    );
  }
}

export default App;