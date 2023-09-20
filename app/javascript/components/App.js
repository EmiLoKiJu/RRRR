import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Greeting from './Greeting';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/greeting" component={Greeting} />
      </Switch>
    </Router>
  );
};

export default App;
