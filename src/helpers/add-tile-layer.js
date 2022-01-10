import L from 'leaflet'

export function addTileLayer(map) {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2luZGx5aGlja29yeSIsImEiOiJja3k4d2QwemkwMG1iMnBucmVrMTltOXBmIn0.hFmtdySS457gVL8iNc3YnQ', {
    attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Your Name Here</a>.',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);
}