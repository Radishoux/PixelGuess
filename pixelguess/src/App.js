import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Socket from 'socket.io-client';
import './App.css';

var socket = Socket('http://localhost:3001');

export default function App() {
  return (
    <Router>
      <div>
        <nav>
              <Link to="/">Home</Link>
              <Link to="/Room">Room</Link>
              <Link to="/Search">Search</Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Room">
            <Room />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

function Home() {
  return (
  <div>
    <h2>Home</h2>
  </div>
  );
}

function Room() {
  return (
  <div>
    <h2>Room</h2>
  </div>
  );
}

function Search() {
  return (
  <div>
    <h2>Search</h2>
  </div>
  );
}