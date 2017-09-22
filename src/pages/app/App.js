import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Jane} from 'jane-maps';

import {mapboxGLOptions, searchConfig} from '../../map.config';

import SchoolJaneLayer from '../../layers/schools/SchoolLayer';
import AdminLayer from '../../layers/admin/AdminLayer';

import Topbar from '../topbar/Topbar';
import 'jane-maps/dist/styles.css'
import './App.css';

injectTapEventPlugin();

const App = () => {

  return (
    <div>
      <Topbar subhead={"Schools Explorer"}/>
      <MuiThemeProvider>
        <div>
          <div className="fullscreen">
            <Jane mapboxGLOptions={mapboxGLOptions} search searchConfig={searchConfig}>
              <AdminLayer />
              <SchoolJaneLayer defaultSelected />
            </Jane>
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
