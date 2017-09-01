import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Jane, JaneLayer, Source, MapLayer} from 'jane-maps';

import TestLayer from './TestLayer'

import logo from './logo.svg';
import 'jane-maps/dist/styles.css'
import './App.css';

injectTapEventPlugin();

const featureSource = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [36.8219, -1.2921]
      }
    }
  ]
};
const App = () => {
  const mapboxGLOptions = {
    mapbox_accessToken: 'pk.eyJ1IjoiY3dob25nbnljIiwiYSI6ImNpczF1MXdrdjA4MXcycXA4ZGtyN2x5YXIifQ.3HGyME8tBs6BnljzUVIt4Q',
    center: [
      36.8219, -1.2921 //center the map to Nairobi
    ],
    zoom: 13.62,
    minZoom: 9,
    maxZoom: null,
    pitch: 0,
    hash: false,
    navigationControlPosition: 'bottom-right'
  };

  const searchConfig = {
    mapzen_api_key: 'mapzen-ZyMEp5H',
    bounds: {
      minLon: 33.90958023071289,
      maxLon: 41.89101028442383,
      minLat: -4.674901008605957,
      maxLat: 5.482579231262207
    }
  };

  return (
    <MuiThemeProvider>
      <div style={{
        height: '500px',
        width: '500px'
      }}>
        <Jane mapboxGLOptions={mapboxGLOptions} search searchConfig={searchConfig}>
          <JaneLayer id="feature" name="Primary Schools" icon="university" defaultSelected component={< TestLayer />}>

            <Source id="feature" type="geojson" data={featureSource}/>

            <MapLayer id="feature" source="feature" type="circle" paint={{
              'circle-radius': 10,
              'circle-color': 'steelblue',
              'circle-opacity': 0.7
            }}/>
          </JaneLayer>
        </Jane>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
