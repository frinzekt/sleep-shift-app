import React, { createContext, useState } from 'react';
import firebase, { provider } from "../../database/Firebase"
import Router from "next/router";
const AppContext = createContext({});

// Component System of Provider
export const AppProvider = (props) => {
    const [state, setState] = useState({});
    const [userState, setUserState] = useState({user:null,userId:null,userDisplayName:null})
    const googleOAuthSubmit = async () => {
        try {
            const loginResult = await firebase.auth().signInWithPopup(provider)
            const token = loginResult.credential.accessToken;
            const user = loginResult.user
            console.log(user)

            setUserState({user:user,userId:user.uid,userDisplayName:user.displayName})
            Router.push("/");
        }
        catch (error) {
            console.log(error)
        }
    }
    const logOut = async(e)=>{
        setUserState({user:null,userId:null,userDisplayName:null})
        await firebase.auth().signOut();
		Router.push("/");
    }
    const contextValue = {
        state, setState,
        userState, setUserState,
        firebase,
        googleOAuthSubmit,
        logOut

    };
    return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>;
};
export const AppConsumer = AppContext.Consumer;
export default AppContext;
