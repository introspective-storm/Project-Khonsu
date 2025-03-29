import React, { useState, useEffect } from 'react';
import Maps from "../components/maps/googleMaps";
import BusinessList from '../components/page-components/BusinessList';
import AuthDetails from '../components/auth/authDetails';
import SignIn from "../components/auth/signIn";
import SignUp from "../components/auth/signUp";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const BusinessDashboard = () => {
  //TODO: move authentication logic somewhere else, and just call this function when needed.
  const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user)=> {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null)
            }
        });
        // return () => {
        //     listen();
        // }
    }, []);
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("signed out")
        }).catch(error => console.log(error))
    }

  return(
    <>
    {
      authUser ? 
      <>
      <div class= "map-container">
      <Maps/>
      </div>
      <BusinessList />
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
