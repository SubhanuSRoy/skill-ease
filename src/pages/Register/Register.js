import React from "react";
import { useSelector } from "react-redux";
import ChooseType from "./ChooseType";
import RegisterForm from "./RegisterForm";

function Register() {
  const userType = useSelector((state) => state.auth.userType);
  console.log(userType);
  return (
    <div className="relative h-screen flex flex-col items-center justify-center gap-8 pt-4 bg-dark">
      {/* <div class="absolute inset-0 bg-transparent bg-gradient-to-b from-white/50 to-white/25"></div> */}

      {!userType && <ChooseType />}
      { userType && <RegisterForm />}
    </div>
  );
}

export default Register;
