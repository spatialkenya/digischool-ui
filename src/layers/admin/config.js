const appConfig = {
  carto_user: 'erick-otenyo',
};

export const schoolLayers = {
  school_done: {
    type: 'circle',
    filter: ['all', ['==', 'province', 'EASTERN', ], ],
    paint: {
      'circle-radius': 5,
      'circle-color': 'green'
    },
  },
  school_not: {
    type: 'circle',
    filter: ['all', ['==', 'province', 'NYANZA', ], ],
    paint: {
      'circle-radius':5,
      'circle-color': 'red'
    },
  }
};

export const sources = {
  schoolsource: {
    data: `https://${appConfig.carto_user}.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20kenya_open_data_initiative_kodi_primary_schools&format=geojson`,
  },
};
