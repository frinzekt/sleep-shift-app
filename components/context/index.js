import React, { createContext, useState } from 'react';
import firebase, { provider } from "../../database/Firebase"
const AppContext = createContext({});

// Component System of Provider
export const AppProvider = (props) => {
    const [state, setState] = useState({});
    const [userState, setUserState] = useState({})
    const googleOAuthSubmit = async () => {
        try {
            const loginResult = await firebase.auth().signInWithPopup(provider)
            const token = loginResult.credential.accessToken;

            const user = loginResult.user
        }
        catch (error) {
            console.log(error)
        }
    }
    const contextValue = {
        state, setState,
        userState, setUserState,
        firebase,
        googleOAuthSubmit

    };
    return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>;
};
export const AppConsumer = AppContext.Consumer;
export default AppContext;
