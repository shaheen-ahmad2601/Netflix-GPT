import React, { useState } from "react";
import Header from "./Header";
import "../App.css";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img
          className="homeScrnLogo"
          src="https://s3-alpha.figma.com/hub/file/2347704102/3637cce4-2243-4e80-8e1a-bee460f26784-cover.png"
          alt="logo"
        />
      </div>
      <form
        action=""
        className=" w-4/12 absolute py-2 px-4  bg-black my-14 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-60 "
      >
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 bg-opacity-80 focus:outline-none focus:ring-0"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700 bg-opacity-80 focus:outline-none focus:ring-0"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700 bg-opacity-80 focus:outline-none focus:ring-0"
        />
        <button className="p-2 my-4 w-full text-white bg-red-700 rounded-lg bg-opacity-80">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSigninForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? SignIn Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
