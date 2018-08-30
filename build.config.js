var nodeExternals = require("webpack-node-externals");

module.exports = {
  webpack: {
    externals: [
      nodeExternals(),
      { leaflet: "L" },
      { "leaflet.heatmap": { root: ["leaflet", "heatmap"] } }
    ]
  }
};
