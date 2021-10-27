// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import config from "../../config";
function Notification() {
  // Your web app's Firebase configuration
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
