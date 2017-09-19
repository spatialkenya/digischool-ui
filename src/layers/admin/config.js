const appConfig = {
  carto_user: 'erick-otenyo',
};

export const countyLayer = {
  counties: {
    type: 'line',
    "layout": {
      "line-join": "round",
      "line-cap": "round"
    },
    "paint": {
      "line-color": "#454647",
      "line-width": 2
    }
  },
  counties_lot2: {
    type: 'fill',
    filter: [
      'all', [
        '==',
        'lot',
        2,
      ],
    ],
    'paint': {
      'fill-color': '#c3a1c6',
      'fill-opacity': 0.8
    }
  },
};

export const sources = {
  countysource: {
    data: `https://${appConfig.carto_user}.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20kenya_counties&format=geojson`,
  },
};
