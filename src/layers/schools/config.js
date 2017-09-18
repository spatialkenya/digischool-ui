const appConfig = {
  carto_user: 'erick-otenyo',
};

export const schoolLayers = {
  school_done: {
    type: 'circle',
    filter: ["has", "point_count"],
    paint: {
      "circle-color": "#51bbd6",
      "circle-radius": {
        property: "point_count",
        type: "interval",
        stops: [
          [0, 7],
          [20, 15],
          [50, 20],
          [100, 30],
          [750, 40]
        ]
      }
    },
  },
  cluster_count: {
    type: "symbol",
    filter: ["has", "point_count"],
    layout: {
      "text-field": "{point_count_abbreviated}",
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 12
    }
  },
  unclustered: {
    type: "circle",
    filter: ["!has", "point_count"],
    paint: {
      "circle-color": "#11b4da",
      "circle-radius": 7,
      "circle-stroke-width": 1,
      "circle-stroke-color": "#fff"
    }
  }
};

export const sources = {
  schoolsource: {
    data: `https://${appConfig.carto_user}.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20digischool&format=geojson`,
  },
};
