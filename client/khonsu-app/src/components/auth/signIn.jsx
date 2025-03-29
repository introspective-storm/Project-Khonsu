import React from "react";
import { useState } from "react";
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebaseConfig"

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email,password)
        .then((userCredential)=>{
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }

    return(
        <div>
            <form onSubmit={signIn}>
                <h1> Log In</h1>
                <input 
                type="email" 
                placeholder="email" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}>
                </input>
                <input 
                type="password" 
                placeholder="password" 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}>
                </input>
                <button type="submit"> Log In</button>
            </form>
        </div>
    )
}

export default SignIn