import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../features/auth/auth-slice";
import SE_logo from "../../assets/images/SkillEase_logo.png";
import axios from "axios";
import { Link } from "react-router-dom";

function RegisterForm() {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.auth.userType);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const name = useSelector((state) => state.auth.userName);
  const pfp_link = useSelector((state) => state.auth.pfp_link);

  const [userEmail, setuserEmail] = useState(null);
  const [userName, setuserName] = useState(null);
  const [userPfp_Link, setuserPfp_Link] = useState(null);
  const [userPassword, setuserPassword] = useState(null);

  const reloadPage = () => {
    dispatch(authActions.setUserType(null));
    window.location.reload(true);
  };

  const registerAccount = async (e) => {
    e.preventDefault();
    if (userType == "Seeker") {
      axios
        .post(process.env.REACT_APP_BACKEND_SERVER + "signup/user", {
          first_name: name,
          last_name: name,
          email: email,
          password: password,
          creator: "no",
          user_attributes: [],
          registered_courses: [],
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else if (userType == "Contributor") {
      console.log(userType);
      axios
        .post(process.env.REACT_APP_BACKEND_SERVER + "signup/creator", {
          name: name,
          email: email,
          password: password,
          profile_photo_link: pfp_link,
          discription: "",
          qualifications: "",
          creator: "yes",
          creator_attributes_jobs: [],
          creator_attributes_courses: [],
          creator_attributes_sessions: [],
          tags: [],
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="float-left mt-4 ml-4 cursor-pointer text-white"
        onClick={reloadPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </div>
      <div className="max-w-sm w-full text-gray-100 bg-transparent py-4 px-8 rounded-lg border-2 border-gray-100">
        <div className="text-center">
          <img src={SE_logo} width={150} className="mx-auto" />

          <div className="mt-5 space-y-2">
            <h3 className="text-gray-50 text-2xl font-bold sm:text-3xl">
              Sign up as <span className="text-primary">{userType}</span>
            </h3>
          </div>
        </div>
        <form className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Name</label>
            <input
              type="text"
              required
              value={userName}
              onChange={(e) => {
                setuserName(e.target.value);
              }}
              className="w-full mt-2 px-3 py-2 text-gray-100 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              value={userEmail}
              onChange={(e) => {
                setuserEmail(e.target.value);
              }}
              className="w-full mt-2 px-3 py-2 text-gray-100 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              value={userPassword}
              onChange={(e) => {
                setuserPassword(e.target.value);
              }}
              placeholder="Must have 8 characters"
              className="w-full mt-2 px-3 py-2 text-gray-100 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
            />
          </div>
          {userType == "Contributor" && (
            <div>
              <label className="font-medium">Image URL</label>
              <input
                type="text"
                required
                value={userPfp_Link}
                onChange={(e) => {
                  setuserPfp_Link(e.target.value);
                }}
                placeholder="Hosted image link"
                className="w-full mt-2 px-3 py-2 text-gray-100 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
              />
            </div>
          )}

          <button
            onClick={registerAccount}
            className="w-full px-4 py-2 text-white font-medium bg-primary hover:bg-primary active:bg-primary rounded-lg duration-150"
          >
            Sign in
          </button>
          <div className="text-center">
            <p className="">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-primary hover:text-primary"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default RegisterForm;
