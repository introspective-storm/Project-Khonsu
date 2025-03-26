import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: "100%",
    height: "400px",
};

const center = {
    lat: 37.7749,
    lng: -122.4194,
};