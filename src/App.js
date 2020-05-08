import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Group } from './group';
import { Hero } from './hero';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/personal">
            <Hero />
          </Route>
          <Route path="/group">
            <Group />
          </Route>
          <Route path="/">
            <div className="pick-wrapper">
              <div className="pick">
                <Link to="/group">
                  <img src="/public/images/group.png" />
                  <p>Our fate</p>
                </Link>
              </div>
              <div className="pick">
                <Link to="/personal">
                  <img src="/public/images/hero.jpg" />
                  <p>My fate</p>
                </Link>
              </div>
            </div>

          </Route>
        </Switch>

      </Router>
    </div >
  );
}

export default App;
