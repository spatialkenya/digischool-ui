import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './pages/app/App';
import SchoolDetailPage from './pages/schooldetail/SchoolDetailPage';
import CountyDetailPage from './pages/countydetail/CountyDetailPage';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Analytics from './pages/analytics/Analytics';

const Explorer = () => (<App/>)

const RoutedApp = () => (
  <Router>
      <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
      <Route path={`${process.env.PUBLIC_URL}/schools/explorer`} component={Explorer}/>
      <Route path={`${process.env.PUBLIC_URL}/schools/:schoolId`} component={SchoolDetailPage}/>
      <Route path={`${process.env.PUBLIC_URL}/county/:countyId`} component={CountyDetailPage}/>
      <Route path={`${process.env.PUBLIC_URL}/analytics`} component={Analytics}/>
      <Route path={`${process.env.PUBLIC_URL}/about`} component={About}/>
      </Switch>
  </Router>
)

export default RoutedApp
