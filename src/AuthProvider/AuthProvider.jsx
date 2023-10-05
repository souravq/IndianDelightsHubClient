import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../firebase.config";
import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "../router/Routes";

import { GoogleAuthProvider } from "firebase/auth";

import { GithubAuthProvider } from "firebase/auth";
import PrivateAuth from "./PrivateAuth";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

export default function AuthProvider() {

    const [userId, setUserId] = useState(false);

    const [user,setUser] = useState(null);

    const [ error, setError] = useState(false);

    const [loader, setLoader] = useState(true);

    // Register User using Email and Password

    function RegisterUser(email,password){
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const userData = userCredential.user;
            setUser(userData.email);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    // Login User using Email and Password

    function LoginUser(email,password){
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const userData = userCredential.user;
            setUser(userData.email);
        })
        .catch((error)=>{
            console.log(error)
            setError(true);
        });
    }

    // Sign In with Google

    function GoogleSignIn(){
        signInWithPopup(auth,googleProvider)
        .then((userCredential)=>{
            const userData = userCredential.user;
            setUser(userData.email);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    // Sign In with Github

    function GithubSignIn(){
        signInWithPopup(auth,githubProvider)
        .then((userCredential)=>{
            console.log(userCredential);
            const userData = userCredential.user;
            setUser(userData.displayName);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    // Sign Out 

    function LogOut(){
        signOut(auth)
        .then(()=>{
            console.log("Log out successfully !!!")
            window.location.reload();
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        const unsubscriber = onAuthStateChanged(auth, (user)=>{
            if(user){
                const uid = user.uid;
                console.log(uid);
                setLoader(false);
                setUserId(true);
                setUser(user.displayName);
            }
        })
        return(()=> {return unsubscriber; })
    })

    const contextValue ={
        user,
        userId,
        RegisterUser,
        LoginUser,
        GoogleSignIn,
        GithubSignIn,
        LogOut,
        error,
        loader
    }

  

  return (
    <AuthContext.Provider value={contextValue}>
        <PrivateAuth>
            <RouterProvider router={router}></RouterProvider>
        </PrivateAuth>    
    </AuthContext.Provider>
  )
}
