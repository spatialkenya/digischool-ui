import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './pages/app/App'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Analytics from './pages/analytics/Analytics';

const Explorer = () => (<App/>)

const RoutedApp = () => (
  <Router>
    <div>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
      <Route path={`${process.env.PUBLIC_URL}/explorer`}component={Explorer}/>
      <Route path={`${process.env.PUBLIC_URL}/analytics`}component={Analytics}/>
      <Route path={`${process.env.PUBLIC_URL}/about`} component={About}/>
    </div>
  </Router>
)

export default RoutedApp
