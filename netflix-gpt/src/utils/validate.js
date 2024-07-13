// export const checkValidData = (name, email, password) => {
//   const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z]$/.test(name);

//   const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
//     email
//   );
//   const isPasswordValid =
//     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
//       password
//     );

//   if(!isNameValid) return "Name is not a valid";
//   if (!isEmailValid) return "Email is not valid";
//   if (!isPasswordValid) return "Password is not valid";

//   return null;
// };



export const checkValidData = (name, email, password, isSignInForm) => {
    console.log("Validating data:", { name, email, password, isSignInForm });
    
    const isNameValid = isSignInForm || /^[A-Z][a-zA-Z '.-]*[A-Za-z]$/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
  
    if (!isNameValid) {
      console.log("Name is not valid:", name);
      return "Name is not valid";
    }
    if (!isEmailValid) {
      console.log("Email is not valid:", email);
      return "Email is not valid";
    }
    if (!isPasswordValid) {
      console.log("Password is not valid:", password);
      return "Password is not valid";
    }
  
    return null;
  };