// import React, { useRef, useState } from "react";
// import Header from "./Header";
// import { checkValidData } from "../utils/validate";
// import "../App.css";

// const Login = () => {
//   const [isSignInForm, setIsSignInForm] = useState(true);
//   const [errorMessage, setErrorMessage] = useState(null);

//   // to get the values pass ref to input box
//   const name = useRef(null);
//   const email = useRef(null);
//   const password = useRef(null);

//   const handleButtonClick = () => {
//     console.log(name.current.value);
//     console.log(email.current.value);
//     console.log(password.current.value);
//     // validate the form data
//     const message = checkValidData(
//       name.current ? name.current.value : "";
//       email.current.value,
//       password.current.value
//     );
//     setErrorMessage(message);
//     console.log(message);

//     //signin / sign up
//   };

//   const toggleSigninForm = () => {
//     setIsSignInForm(!isSignInForm);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="absolute w-full">
//         <img
//           className="homeScrnLogo"
//           src="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/1/96/196787d7-3944-54cd-be9a-328a0198ade4/63ea27b298713.image.jpg?resize=1200%2C675"
//           alt="logo"
//         />
//       </div>
//       <form
//         action=""
//         onSubmit={(e) => e.preventDefault()}
//         className=" w-3/12 absolute py-2 px-4   bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-60 "
//       >
//         <h1 className="font-bold text-2xl py-4">
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </h1>

//         {!isSignInForm && (
//           <input
//             ref={name}
//             type="text"
//             placeholder="Full Name"
//             className="p-2 my-4 w-full bg-gray-700 bg-opacity-80 focus:outline-none focus:ring-0"
//           />
//         )}

//         <input
//           ref={email}
//           type="text"
//           placeholder="Email Address"
//           className="p-2 my-4 w-full bg-gray-700 bg-opacity-80 focus:outline-none focus:ring-0"
//         />

//         <input
//           ref={password}
//           type="password"
//           placeholder="Password"
//           className="p-2 my-2 w-full bg-gray-700 bg-opacity-80 focus:outline-none focus:ring-0"
//         />

//         <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>

//         <button
//           className="p-2 my-4 w-full text-white bg-red-700 rounded-lg bg-opacity-80"
//           onClick={handleButtonClick}
//         >
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </button>
//         <p className="p-4 cursor-pointer" onClick={toggleSigninForm}>
//           {isSignInForm
//             ? "New to Netflix? Sign Up Now"
//             : "Already Registered? SignIn Now"}
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import "../App.css";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // to get the values pass ref to input box
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const nameValue = name.current ? name.current.value : "";
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    // validate the form data
    const message = checkValidData(nameValue, emailValue, passwordValue, isSignInForm);
    setErrorMessage(message);
    console.log(message);

    //signin / sign up
  };

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img
          className="homeScrnLogo"
          src="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/1/96/196787d7-3944-54cd-be9a-328a0198ade4/63ea27b298713.image.jpg?resize=1200%2C675"
          alt="logo"
        />
      </div>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute py-2 px-4   bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-60 "
      >
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 bg-opacity-80 focus:outline-none focus:ring-0"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700 bg-opacity-80 focus:outline-none focus:ring-0"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700 bg-opacity-80 focus:outline-none focus:ring-0"
        />

        <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>

        <button
          className="p-2 my-4 w-full text-white bg-red-700 rounded-lg bg-opacity-80"
          onClick={handleButtonClick}
        >
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