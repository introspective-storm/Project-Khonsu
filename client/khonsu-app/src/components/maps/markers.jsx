import React from "react";
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import { haversine_distanceMiles, haversine_distanceKilometers } from "./distanceBetweenPoints";
import business from "../../../../../db/schema";

const ConditionalMarkers = ({businesses}) => {
    const center = { type: 'Point', coordinates: [-122.4194, 37.7749] };
    console.log(businesses);
    businesses.map((business)=> {
        console.log(business.location.coordinates);
        if (haversine_distanceKilometers(center, business.location) <= 10) {
            return(<Marker 
                    key={business._id} 
                    position={
                        {
                            lat: business.location.coordinates[1], 
                            lng: business.location.coordinates[0]
                        }
                    }
                    />
                );
        } else {
            return null;
        }
    })
};

export {ConditionalMarkers};