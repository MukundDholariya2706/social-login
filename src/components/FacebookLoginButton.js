import React from "react";
import FacebookLogin from "react-facebook-login";

export const FacebookLoginButton = () => {
  const responseFacebook = async (response) => {
    console.log(response, "response");
  };

  const failureFacebook = async (error) => {
    console.log(error, "error");
  };

  return (
    <div>
      <FacebookLogin
        textButton={`Sign up with Facebook`}
        appId={process.env.REACT_APP_FACEBOOK_APPID}
        size="small"
        autoLoad={true}
        fields="name,first_name,last_name"
        callback={responseFacebook}
        onFailure={failureFacebook}
        cssClass="flex items-center bg-white border rounded-lg px-2 text-black font-semibold text-[14px] h-[40px]"
        icon="fa-facebook text-blue-700 pr-2"
      />
    </div>
  );
};
