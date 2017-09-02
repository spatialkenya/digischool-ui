import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './pages/app/App'
import Home from './pages/home/Home';

const Explorer = () => (<App/>)

const About = () => (
  <div>
    <h2>About
    </h2>
  </div>
)
const RoutedApp = () => (
  <Router>
    <div>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
      <Route path={`${process.env.PUBLIC_URL}/explorer`}component={Explorer}/>
      <Route path={`${process.env.PUBLIC_URL}/about`} component={About}/>
    </div>
  </Router>
)

export default RoutedApp
