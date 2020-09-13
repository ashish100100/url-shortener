import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Stats from './components/Stats';
import ProcessUniqueCode from './components/ProcessUniqueCode';
import Notfound from './components/Notfound';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stats" component={Stats} />
        <Route exact path="/404" component={Notfound} />
        <Route exact path="/:unique_code" component={ProcessUniqueCode} />
      </Switch>
    </div>
  );
};






function App() {
  return (
    <Router>
    <Routes />
  </Router>
  );
}

export default App;
