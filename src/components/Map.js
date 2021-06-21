import React from 'react'
import Styl from '../components/Map.css'
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import MarkerImg from '../images/marker.png'

export default function Map() {
    const initLat = 6.0470158;
    const initLong = -67.7689;


    const [state, setState] = useState(false);
    const [geolocalisationUser, setGeolocalisationUser] = useState([]);


    const success = (position) => {
        const localisation = position.coords;
        const geoLat = localisation.longitude;
        const geoLong = localisation.latitude;


        setGeolocalisationUser([geoLat, geoLong]);
    }


    const getPosition = () => {
        navigator.geolocation.getCurrentPosition(success);
    }


    const handleState = () => {
        setState(!state);
    }


    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: initLat,
        longitude: initLong,
        zoom: 4
    });





    if (geolocalisationUser == {}) {
        setState(false);
    }


    useEffect(() => {
        getPosition();
    })

    return (


        <div className="map-body">


            <ReactMapGL
                {...viewport}
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapboxApiAccessToken={`pk.eyJ1IjoiaGFmaWRhbSIsImEiOiJja21yaDV5cmUwM3B2MnBwY3U2NnI0M25vIn0.m-6J1n2Hs0TKJr5X9CxYeA`}
            >

                <button className="button-localisation" style={{ width: "200px" }} onClick={() => {
                    handleState()
                    return console.log(geolocalisationUser)
                }}> Clique </button>


                {state && (<Marker latitude={geolocalisationUser[0]} longitude={geolocalisationUser[1]}>

                    <img width="20" height="20" src={MarkerImg} />
                </Marker>)}



            </ReactMapGL>
            )


        </div>
    )





}
