import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup,FacebookAuthProvider,signInWithPhoneNumber,RecaptchaVerifier,sendSignInLinkToEmail} from "firebase/auth"
// RecaptchaVerifier 

// const firebaseConfig = {
//     apiKey: "AIzaSyDQAsCWfRSz31CmJiHxlOSRg3F60N1ktqY",
//     authDomain: "craigrade-8f110.firebaseapp.com",
//     projectId: "craigrade-8f110",
//     storageBucket: "craigrade-8f110.appspot.com",
//     messagingSenderId: "1049017199665",
//     appId: "1:1049017199665:web:17936dc5f4b59b2c1bf910",
//     measurementId: "G-57SWNPYWTH"
//   };
const firebaseConfig = {
    apiKey: "AIzaSyD4BHjMCAX_iGhNDpn_bHxDjimUIyyE1MY",
    authDomain: "sample-2a68e.firebaseapp.com",
    projectId: "sample-2a68e",
    storageBucket: "sample-2a68e.appspot.com",
    messagingSenderId: "146010862421",
    appId: "1:146010862421:web:863561a1eeb6a2486975dc"
  };
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)

const provider= new GoogleAuthProvider()

export const signInWithGoogle=async()=>{
    console.log("okpassesd")
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // const user = result.user;
        // console.log("USER    in google", user);
        // console.log("credential in google", credential);
        // console.log("toketokenn in google", token);
        // console.log("USER in google", user);
        return result;
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        return error;
      }

}
const pro=new FacebookAuthProvider()

export const signInWithFacebook=async()=>{
    try{
        const result =await signInWithPopup(auth, pro);
        console.log("resultasad",result)
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log("sdfstudf",user)
        return user
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(errorCode)
        return error
  };
}




export const signInEmail=async()=>{
    try {
        console.log("dataapased")
        const result = await signInWithPopup(auth, provider);
        // const result =await sendSignInLinkToEmail(auth, email, actionCodeSettings)
        console.log("resultemail",result)
    } catch (error) {
        console.log(error)   
    }
   
}