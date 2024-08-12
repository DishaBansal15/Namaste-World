import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Feed from './components/feed';
import Profile from './components/profile';
import Chat from './components/chat';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Feed} />
          <Route path="/profile" component={Profile} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
