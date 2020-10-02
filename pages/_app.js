/*!

=========================================================
* NextJS Material Kit v1.1.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React ,{useEffect,useContext} from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import Context,{ AppProvider } from 'components/context/index';


// OWN COMPONENTS
import Navbar from 'components/Layout/Navbar';
import Footer from "components/Footer/Footer.js";



import PageChange from "components/PageChange/PageChange.js";

import "assets/scss/nextjs-material-kit.scss?v=1.1.0";

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
const ComponentWrapper = ({children})=>{
  const {firebase, setUserState} = useContext(Context)
  useEffect(() => {
                    //  SET USER AUTH
                    firebase.auth().onAuthStateChanged(async (user) => {
                      if (user) {
                        setUserState({
                          user: user,
                          userId: user.uid,userDisplayName:user.displayName
                        });
                
                        // INSERT USERSPECFICI STUFF
                        // const meetingsRef = firebase.database().ref(`meetings/${user.uid}`);
                        // meetingsRef.on('value', (snap) => {
                        //   const meetings = snap.val();
                        //   const meetingsList = [];
                        //   for (let item in meetings) {
                        //     meetingsList.push({
                        //       meetingID: item,
                        //       meetingName: meetings[item].meetingName,
                        //     });
                        //   }
                      } else {
                        setUserState({user:null,userId:null,userDisplayName:null})
                      }
                    });
    
  }, [])
 return (<div>{children}</div>)
}
const MyApp = (props) => {
  const { Component, pageProps, router } = props;

  useEffect(() => {
		let comment = document.createComment(`
											=========================================================
											* NextJS Material Kit v1.1.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0
											=========================================================

											* Product Page: https://www.creative-tim.com/product/nextjs-material-kit
											* Copyright 2020 Creative Tim (https://www.creative-tim.com)
											* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)

											* Coded by Creative Tim

											=========================================================

											* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

                      `);


                    }, []);
    return (
      <AppProvider>
        <Head>
          <title>Sleep Shift App - System Health Lab</title>
        </Head>
        <Navbar></Navbar>
        <ComponentWrapper>
         <Component {...pageProps} />
        </ComponentWrapper>
        <Footer />
      </AppProvider>
    );
}

MyApp.getInitialProps = async ({ Component, router, ctx }) =>{
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}

export default MyApp;
