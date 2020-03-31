import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListPage from './components/ListPage';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/movie/:id' component={DetailsPage} />
        <Route path='/' component={ListPage} />
      </Switch>
    </Router>
  );
}

export default App;
