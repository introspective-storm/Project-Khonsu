import React from "react";
import {useEffect, useState} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../../firebaseConfig";
import SignIn from "./signIn";
import SignUp from "./signUp";
import AuthDetails from "./authDetails";

const Autherize = () => {
    const [authUser, setAuthUser] = useState(null);


    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user)=> {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null)
            }
        });
        return () => {
            listen();
        }
    }, []);
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("signed out")
        }).catch(error => console.log(error))
    }

    const SignUpOrSignIn = () => {
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(u=>{})
        .catch(error => {
            switch (error.code) {
                case 'auth/email-already-in-use':
                  console.log(`Email address ${this.state.email} already in use.`);
                  return(<><p>Email already in use, log-in</p><SignIn/></>)
                case 'auth/invalid-email':
                  console.log(`Email address ${this.state.email} is invalid.`);
                  return(<><p>Email is invalid</p><SignUp/></>);
                case 'auth/operation-not-allowed':
                  console.log(`Error during sign up.`);
                  return(<><p>Error during sign up, try again</p><SignUp/></>);
                case 'auth/weak-password':
                  console.log('Password is not strong enough. Add additional characters including special characters and numbers.');
                  return(<><p>Password is not strong enough</p><SignUp/></>);
                default:
                  console.log(error.message);
                  break;
              }
        })
    }

    return (
        <>
        <button onClick={<SignUp/>}>Sign Up</button>
        <button onClick={<SignIn />}>Sign In</button>
        </>
    )
}

export default Autherize;