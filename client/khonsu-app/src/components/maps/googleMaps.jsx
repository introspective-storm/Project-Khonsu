import React from "react";
import { useState } from "react";
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

const Maps = () => {

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 37.7749, // Default latitude
    lng: -122.4194, // Default longitude
  };

    return(
        <>
        <APIProvider 
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} 
        onLoad={() => console.log('Maps API has loaded.')}>
          <Map
          style={mapContainerStyle}
          defaultZoom={13}
          defaultCenter={center}
          gestureHandling={"greedy"}
          disableDefaultUI
          >
            <Marker position={center} />
          </Map>
        </APIProvider>
        </>

    )
}

export default Maps