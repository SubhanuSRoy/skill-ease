import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { authActions } from "../../features/auth/auth-slice";
import seeker from "../../assets/images/seeker.png";
import contributor from "../../assets/images/contributor.png";

function ChooseType() {
  const dispatch = useDispatch();
  const makeSeeker = () => {
    dispatch(authActions.setUserType("Seeker"));
  };
  const makeAdmin = () => {
    dispatch(authActions.setUserType("Contributor"));
  };
  return (
    <div>
      <h1 class="relative text-center mb-12 text-gray-50 font-extrabold text-5xl shadow-md">
        Upskill easily using AI.
        <strong class="font-extrabold text-primary block mt-2 sm:mt-4">
          Register on SkillEase
        </strong>
      </h1>
      <div className="flex w-full justify-center gap-4 md:gap-12">
        {/* Seeker */}
        <motion.div
          class="  cursor-pointer"
          whileHover={{ scale: 0.9 }}
          onClick={makeSeeker}
        >
          <div class="max-w-sm mx-auto shadow-lg ">
            <div class="relative bg-transparent border-gray-500 border-2 rounded-lg shadow-lg p-2 sm:p-5 overflow-hidden ">
              <div class="flex flex-col items-center justify-center gap-4">
                <div class="text-xl sm:text-3xl font-bold uppercase text-white tracking-widest mb-2">
                  Seeker
                </div>
                <img src={seeker} className="h-32 sm:h-56" />
                {/* <h3 class="text-2xl font-extrabold text-primary leading-snug mb-2">
                  Find jobs, courses, mentors
                </h3> */}
                <p class="text-gray-50 text-center">
                  Are you seeking to <span className="text-primary">upskill?</span> Chat with our AI to find relevant
                  courses, mentors, job opportunities and much more!
                </p>
                <a
                  class="inline-flex w-11 h-11 justify-center items-center bg-primary hover:bg-primary-300 text-pink-50 hover:text-white rounded-full transition duration-150"
                  href="#0"
                >
                  <span class="sr-only">Read more</span>{" "}
                  <span class="font-bold -mt-px">▶</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Contributor */}
        <motion.div
          class="h-full cursor-pointer"
          whileHover={{ scale: 0.9 }}
          onClick={makeAdmin}
        >
          <div class="max-w-sm mx-auto shadow-lg">
            <div class="relative bg-transparent border-gray-500 border-2 rounded-lg shadow-lg p-2 sm:p-5 overflow-hidden h-1/2">
              <div class="flex flex-col items-center justify-center gap-4 h-full">
                <div class="text-xl sm:text-3xl font-bold uppercase text-white tracking-widest mb-2">
                  Contributor
                </div>
                <img src={contributor} className="h-32 sm:h-56" />
                {/* <h3 class="text-2xl font-extrabold text-primary leading-snug mb-2">
                  Find jobs, courses, mentors
                </h3> */}
                <p class="text-gray-50 text-center">
                  Are you an expert looking to <span className="text-primary">contribute?</span> Our AI will help post
                  jobs, schedule mentorship sessions and create course content
                  in multiple languages all in just a few clicks!
                </p>
                <a
                  class=" inline-flex w-11 h-11 justify-center items-center bg-primary hover:bg-primary-300 text-pink-50 hover:text-white rounded-full transition duration-150"
                  href="#0"
                >
                  <span class="sr-only">Read more</span>{" "}
                  <span class="font-bold -mt-px">▶</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ChooseType;
