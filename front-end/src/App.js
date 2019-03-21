import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './component/Login';
import Result from './component/Result';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path='/' exact component={Login}/>
        <Route path='/result' component={Result}/>
      </div>
      </Router>
    );
  }
}

export default App;
 