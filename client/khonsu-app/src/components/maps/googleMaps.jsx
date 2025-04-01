import React from "react";
import { useState, useEffect } from "react";
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import { haversine_distanceMiles, haversine_distanceKilometers } from "./distanceBetweenPoints";
import business from "../../../../../db/schema";
//import { ConditionalMarkers } from "./markers";

const Maps = ({businesses, ConditionalMarkers}) => {
    return(
        <>
        <APIProvider 
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} 
        onLoad={() => console.log('Maps API has loaded.')}>
          <Map
          style={mapContainerStyle}
          defaultZoom={13}
          defaultCenter={{lat: center.coordinates[1], lng: center.coordinates[0]}}
          gestureHandling={"greedy"}
          disableDefaultUI
          >
            <Marker position={{lat: center.coordinates[1], lng: center.coordinates[0]}} />
            {}
          </Map>
        </APIProvider>
        </>

    )
}

export default Maps