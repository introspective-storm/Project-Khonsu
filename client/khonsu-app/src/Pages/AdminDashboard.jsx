import React, { useState, useEffect } from 'react';
import Maps from "../components/maps/googleMaps";
import BusinessList from '../components/page-components/BusinessList';
import AdminList from '../components/page-components/AdminList';
import AuthDetails from '../components/auth/authDetails';
import SignIn from "../components/auth/signIn";
import SignUp from "../components/auth/signUp";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AdminDashboard = () => {
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
      <BusinessList/>
      <AdminList />
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

export default AdminDashboard;
