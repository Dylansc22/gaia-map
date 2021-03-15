import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoiZHlsYW5jIiwiYSI6Im53UGgtaVEifQ.RJiPqXwEtCLTLl-Vmd1GWQ";

// const map =
new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/dylanc/ckm60iiq30tz817p3whz91c5j", // style URL
  center: [-110.92, 32.22], // starting position [lng, lat]
  zoom: 10, // starting zoom
});
