import React, { useState, useEffect } from 'react';
import Maps from "../components/maps/googleMaps";
import BusinessList from '../components/page-components/BusinessList';
import AuthDetails from '../components/auth/authDetails';
import SignIn from "../components/auth/signIn";
import SignUp from "../components/auth/signUp";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ConditionalMarkers } from '../components/maps/markers';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { haversine_distanceMiles, haversine_distanceKilometers } from "../components/maps/distanceBetweenPoints";

const BusinessDashboard = () => {
  //TODO: move authentication logic somewhere else, and just call this function when needed.
  const [authUser, setAuthUser] = useState(null);
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const mapContainerStyle = {width: "100%", height: "100%"};
  const center = { type: 'Point', coordinates: [-122.4194, 37.7749] }
  
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user)=> {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null)
      }
    });
  }, []);
  
  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log("signed out")
    }).catch(error => console.log(error))
  }

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_ENDPOINT_FIND_BUSINESS,
            {
                method: "POST",
                body: JSON.stringify({}),
            }
        )
        if (!response.ok) {
          throw new Error('Failed to fetch businesses');
        }
        const data = await response.json();
        setBusinesses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  if (loading) {
    return <p>Loading businesses...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  const businessesArray = Array.from(businesses);
  console.log(businessesArray);

  return(
    <>
    {
      authUser ? 
      <>
      <div class= "map-container">
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
            {businesses.map((business)=>(
              haversine_distanceKilometers(center, business.location)<=50 ? 
              <Marker
              key={business._id}
              position={
                {
                lat: business.location.coordinates[1],
                lng: business.location.coordinates[0]
              }
            }
            />
            : 
            null
            ))}
            </Map>
        </APIProvider>
      </div>
      {businesses.map((business)=> <BusinessList business={business} />)}
      <AuthDetails />
      </>
      :
      <>
      <SignIn />
      <SignUp />
      </>
    }
    </>
  );
};

export default BusinessDashboard;
