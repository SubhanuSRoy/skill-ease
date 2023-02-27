import axios from "axios";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateCourse() {
  const [title, setTitle] = useState(null);
  const [duration, setDuration] = useState(null);
  const [Ins_Name, setIns_Name] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);
  const [courseStruc, setCourseStruc] = useState(null);
  const [loading, setloading] = useState(false);
  const [email, setEmail] = useState(null);

  const notify = (value) => {
    if (value == "success") {
      toast.success("🦄 Course Created", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }else {
      toast.error("❌ Some error occured", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const getCourseStruc = async (e) => {
    e.preventDefault();
    setloading(true);
    setCourseStruc("");
    axios
      .post(process.env.REACT_APP_AI_SERVER + "get_course", {
        Course_Title: title,
        Course_Duration: duration,
        Instructor_Name: Ins_Name,
        Course_Structure: courseStruc,
      })
      .then((res) => {
        setloading(false);
        // console.log(res)
        setCourseStruc(res.data.Course_description);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const postCourse = async (e) => {
    e.preventDefault();

    axios
      .post(process.env.REACT_APP_BACKEND_SERVER + "creator/add_course", {
        email: email,
        title:title,
        duration:duration,
        Instructor_Name:Ins_Name,
        thumbnail:thumbnail,
        courseDetails:courseDetails,
        courseStruc:courseStruc
      })
      .then((res) => {
        setloading(false);
        console.log(res);
        notify("success");
        // setJobDesc(res.data.Job_Description);
      })
      .catch((error) => {
        console.log(error.message);
        notify("error");
      });
  };
  return (
    <div className="bg-midnight p-4 w-full">
      <ToastContainer />
      <h2 className="text-3xl text-gray-50">Create Course Structure</h2>
      <form className="">
        <div className="flex items-center justify-between w-full mt-4 ">
          <div className="w-1/4">
            <label for="title" class="block  font-medium text-primary">
              Title
            </label>

            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="ex. Python Crash Course 30 days"
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
          <div className="w-1/4">
            <label for="duration" class="block  font-medium text-primary">
              Duration
            </label>

            <input
              type="text"
              id="duration"
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value);
              }}
              placeholder="ex. Microsoft, Google, FIDE"
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
          <div className="w-1/4">
            <label for="ins_name" class="block  font-medium text-primary">
              Instructor Name
            </label>

            <input
              type="text"
              id="ins_name"
              value={Ins_Name}
              onChange={(e) => {
                setIns_Name(e.target.value);
              }}
              placeholder="Ashish Solanki"
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-4">
          <div className="w-full">
            <label for="thumbnail" class="block  font-medium text-primary">
              Thumbnail
            </label>

            <input
              type="text"
              id="thumbnail"
              value={thumbnail}
              onChange={(e) => {
                setThumbnail(e.target.value);
              }}
              placeholder="ex. google drive link/image link from official website"
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
        </div>
        <div className="w-full mt-4">
          <label for="courseDetails" class="block  font-medium text-primary">
            Course Details
          </label>

          <input
            type="text"
            id="courseDetails"
            value={courseDetails}
            onChange={(e) => {
              setCourseDetails(e.target.value);
            }}
            placeholder="ex. covering x,y,z topics, general course structure"
            class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
          />
        </div>
        <div className="w-full mt-4">
          <label
            for="jobDescription"
            class="flex items-center justify-between  font-medium text-primary"
          >
            Detailed Course Structure
            <span className="flex gap-4 items-center">
              <button
                onClick={getCourseStruc}
                className="flex items-center gap-4 font-semibold px-4 py-2 bg-transparent border-2 border-primary text-gray-50 rounded-md font-semi
              "
              >
                Create with AI <img src={logo} className="h-5 w-5" />
              </button>
              {loading ? (
                <img
                  className="h-12"
                  src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
                />
              ) : (
                <></>
              )}
            </span>
          </label>
          <textarea
            id="courseStruc"
            value={courseStruc}
            onChange={(e) => {
              setCourseStruc(e.target.value);
            }}
            class="h-96 w-full rounded-md mt-4 bg-gray-200 p-4"
          ></textarea>
        </div>
        <div className="w-full mt-4 flex gap-4 items-center justify-between">
          <div className="w-1/4 ">
            {/* <label for="confirmEmail" class="block  font-medium text-primary">
              Confirm your email
            </label> */}

            <input
              type="email"
              id="confirmEmail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Confirm your Email"
              class=" w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
          {loading ? (
            <img
              className="h-12"
              src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
            />
          ) : (
            <div></div>
          )}
          <button
            onClick={postCourse}
            className="bg-primary  text-gray-50 text-center font-bold  text-lg h-10 px-4 pt-2 rounded-md w-3/4 shadown-md"
          >
            Create Course
          </button>
        </div>
        {/* <button className="bg-primary my-4 text-gray-50 text-center font-bold  text-lg h-10 px-4 pt-2 rounded-md w-full shadown-md">
          Add Course
        </button> */}
      </form>
    </div>
  );
}

export default CreateCourse;
