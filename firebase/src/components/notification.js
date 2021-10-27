// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

function Notification() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD1QpWDF3SMXp1eja0IO52W0dfNN73k1KA",
    authDomain: "web-push-a451a.firebaseapp.com",
    projectId: "web-push-a451a",
    storageBucket: "web-push-a451a.appspot.com",
    messagingSenderId: "268149582404",
    appId: "1:268149582404:web:36b6a186a83afe3f556a11",
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);
  const messaging = getMessaging();

  getToken(messaging, {
    vapidKey:
      "BF3cGEceMJLVfCWojzUERr3iAVYndAmHvj3JsuV55nFr6AgFwBevu829m1pLk_EI3IclwehkYlEbPxJDFLPseeI",
  })
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        console.log(currentToken);
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one.",
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });

  return <div className='App'>Notification</div>;
}

export default Notification;
