import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './component/Login';
import Result from './component/Result';
// import Loading from './component/Loading';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path='/' exact component={Login}/>
        <Route path='/result' component={Result}/>
        {/* <Route path='/loading' component={Loading}/> */}
      </div>
      </Router>
    );
  }
}

export default App;
 