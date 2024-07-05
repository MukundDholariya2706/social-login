import React from "react";
import { LoginSocialFacebook } from "reactjs-social-login";

export const FacebookLoginButton2 = () => {
  const handleSuccess = (response) => {
    const { data } = response;
    console.log(data, "data");
  };

  const handleReject = (error) => {
    console.log(error, "error");
  };

  return (
    <div>
      <LoginSocialFacebook
        appId={process.env.REACT_APP_FACEBOOK_APPID}
        onResolve={handleSuccess}
        onReject={handleReject}
      >
        FaceBook Login
      </LoginSocialFacebook>
    </div>
  );
};
