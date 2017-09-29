import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Jane,Legend} from 'jane-maps';

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
              <AdminLayer/>
              <SchoolJaneLayer defaultSelected/>
              <Legend>
                <div className="legendSection">
                  <div>
                    <p>Legend</p>
                    <p><i style={{background:'#00bcd4',padding:'1px 8px',borderRadius:'50%'}}></i>-- Schools with Devices</p>
                    <p><i style={{background:'#ff6a00',padding:'1px 8px', borderRadius:'50%'}}></i>-- Schools yet to Receive</p>
                  </div>
                </div>
              </Legend>
            </Jane>
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
