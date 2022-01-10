import 'babel-polyfill'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {validateIp, addTileLayer, getAddress, addOffset} from './helpers'
import icon from '../images/icon-location.svg';


const ip = document.querySelector('.search-bar__input');
const sendButton = document.querySelector('.search-bar__btn');

const ipAddres = document.querySelector('.ip');
const location = document.querySelector('.location');
const timezone = document.querySelector('.timezone');
const isp = document.querySelector('.isp');
console.log(ipAddres);

sendButton.addEventListener('click', getIp);
ip.addEventListener('keydown', handleEnter);

const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 40],  
});

const mapArea = document.querySelector(".map")
const map = L.map(mapArea, {
    center: [51.505, -0.09],
    zoom: 13,
})

addTileLayer(map);

L.marker([51.505, -0.09], {icon: markerIcon}).addTo(map);

function getIp() {
    if (validateIp(ip.value)) {
        getAddress(ip.value)
            .then(setInfo)
    }
}

function handleEnter(e) {
    if (e.key === 'Enter') {
        getIp();
    }
}

function setInfo(info) {
    console.log(info);
    const {lat, lng, country, region, zone} = info.location;
    ipAddres.innerText = info.ip;
    location.innerText = country + ' ' + region;
    timezone.innerText = info.location.timezone;
    isp.innerText = info.isp;

    map.setView([info.location.lat, info.location.lng]);
    L.marker([lat, lng], {icon: markerIcon}).addTo(map);

    if (matchMedia("max-width: 1023px").matches) {
        addOffset(map)
    }

}

document.addEventListener('DOMContentLoaded', ()=>{
    getAddress('102.22.22.1').then(setInfo);
})