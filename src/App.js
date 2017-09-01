import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Jane} from 'jane-maps';

import {mapboxGLOptions, searchConfig} from './map.config'

import SchoolJaneLayer from './schools/SchoolLayer';

import logo from './logo.svg';
import 'jane-maps/dist/styles.css'
import './App.css';

injectTapEventPlugin();

const App = () => {

  return (
    <MuiThemeProvider>
        <Jane mapboxGLOptions={mapboxGLOptions} search searchConfig={searchConfig}>
          <SchoolJaneLayer defaultSelected/>
        </Jane>
    </MuiThemeProvider>
  );
};

export default App;
