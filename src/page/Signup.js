import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButtonImplicit } from "../components/GoogleLoginButtonImplicit";
import { FacebookLoginButton } from "../components/FacebookLoginButton";
import { FacebookLoginButton2 } from "../components/FacebookLoginButton2";

export const Signup = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) navigate("/dashboard");
  });

  return (
    <div>
      {/* <GoogleLoginButton /> */}
      {/* <GoogleLoginButtonImplicit /> */}
      {/* <FacebookLoginButton /> */}
      <FacebookLoginButton2 />
    </div>
  );
};
