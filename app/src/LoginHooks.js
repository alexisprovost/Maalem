import React from 'react';
import { useGoogleLogin } from 'react-google-login';


// refresh token
import { refreshTokenSetup } from './utils/refreshToken.js';

const clientId =
  '701258491355-3qklmjijh8t6mb9a87dhgmtpqjmri5s3.apps.googleusercontent.com';

function LoginHooks() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully! Welcome ${res.profileObj.name}. \nCheck console for full profile object.`
    );
    refreshTokenSetup(res);  
    window.location.replace("/home");
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default LoginHooks;