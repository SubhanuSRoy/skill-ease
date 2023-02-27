import axios from "axios";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddSession() {
  const [email, setEmail] = useState(null);
  const [org, setOrg] = useState(null);
  const [expertise, setExpertise] = useState(null);
  const [quali, setQuali] = useState(null);
  const [contact, setContact] = useState(null);
  const [mentorDesc, setMentorDesc] = useState(null);
  const [pfpUrl, setpfpUrl] = useState(null);
  const [mentor_name, setMentor_name] = useState(null);
  const [loading, setloading] = useState(false);

  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const notify = (value, message) => {
    if (value == "success") {
      toast.success("🦄 "+ message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
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
  const getDesc = async (e) => {
    e.preventDefault();
    setloading(true);
    setMentorDesc("");
    axios
      .post(process.env.REACT_APP_AI_SERVER + "get_Mentor", {
        Mentor_Name: mentor_name,
        Qualification: quali,
        Organisation: org,
        Expertise: expertise,
        Contact: contact,
      })
      .then((res) => {
        setloading(false);
        // console.log(res)
        notify("success", "🤖AI made Mentor Description!");
        setMentorDesc(res.data.Mentor_description);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const updateMentor = async (e) => {
    e.preventDefault();

    axios
      .post(process.env.REACT_APP_BACKEND_SERVER + "update/mentor", {
        email: email,
        name: mentor_name,
        profile_photo_link:pfpUrl,
        description:mentorDesc,
        qualification: quali,
        // Organisation: org,
        // Contact: contact,
      })
      .then((res) => {
        setloading(false);
        console.log(res);
        notify("success", "Updated mentor details");
        // setJobDesc(res.data.Job_Description);
      })
      .catch((error) => {
        console.log(error.message);
        notify("error");
      });
  };
  const addSession = async (e) => {
    e.preventDefault();

    axios
      .post(process.env.REACT_APP_BACKEND_SERVER + "creator/session", {
        email: email,
        date: date,
        time: time,
      })
      .then((res) => {
        setloading(false);
        console.log(res);
        notify("success", "Added new session");
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
      <h2 className="text-3xl text-gray-50">Mentorship Sessions</h2>
      <form className="">
        <div className="flex items-center justify-between w-full mt-4 ">
          <div className="w-1/4">
            <label for="confirmEmail" class="block  font-medium text-primary">
              Confirm your email
            </label>

            <input
              type="email"
              id="confirmEmail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="ex. ashish@gmail.com"
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
          <div className="w-1/4">
            <label for="org" class="block  font-medium text-primary">
              Organisation
            </label>

            <input
              type="text"
              id="org"
              value={org}
              onChange={(e) => {
                setOrg(e.target.value);
              }}
              placeholder="ex. Microsoft, Google, FIDE"
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
          <div className="w-1/4">
            <label for="Quali" class="block  font-medium text-primary">
              Qualification
            </label>

            <input
              type="text"
              id="Quali"
              value={quali}
              onChange={(e) => {
                setQuali(e.target.value);
              }}
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-4">
          <div className="w-1/4">
            <label for="pfpUrl" class="block  font-medium text-primary">
              PFP Url
            </label>

            <input
              type="text"
              id="pfpUrl"
              value={pfpUrl}
              onChange={(e) => {
                setpfpUrl(e.target.value);
              }}
              placeholder="hosted image link"
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
          <div className="w-1/4">
            <label for="Contact" class="block  font-medium text-primary">
              Contact
            </label>

            <input
              type="text"
              id="Contact"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
              placeholder="email or phone number"
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
          <div className="w-1/4">
            <label for="mentor_name" class="block  font-medium text-primary">
              Mentor Name
            </label>

            <input
              type="text"
              id="mentor_name"
              value={mentor_name}
              onChange={(e) => {
                setMentor_name(e.target.value);
              }}
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
        </div>

        <div className="w-full mt-4">
          <label for="expertise" class="block  font-medium text-primary">
            Expertise{" "}
            <span className="text-xs text-gray-50">comma separated values</span>
          </label>

          <input
            type="email"
            id="expertise"
            value={expertise}
            onChange={(e) => {
              setExpertise(e.target.value);
            }}
            placeholder="ex. cybersecurity"
            class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
          />
        </div>

        <div className="w-full mt-4">
          <label
            for="mentorDescription"
            class="flex items-center justify-between  font-medium text-primary"
          >
            Mentor Description
            <span className="flex gap-4 items-center">
              <button
                onClick={getDesc}
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
            id="mentorDescription"
            value={mentorDesc}
            onChange={(e) => {
              setMentorDesc(e.target.value);
            }}
            class="h-96 w-full rounded-md mt-4 bg-gray-200 p-4"
          ></textarea>
        </div>
        <div className="w-full mt-4 flex gap-4 items-center">
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
            onClick={updateMentor}
            className="bg-orange-500  text-gray-50 text-center font-bold  text-lg h-10 px-4 pt-2 rounded-md w-3/4 shadown-md"
          >
            Update Mentor
          </button>
        </div>
      </form>
      <h2 className="text-3xl text-gray-50 mt-4">Add a session</h2>
      <form>
        <div className="flex items-center justify-between w-full my-4">
          <div className="w-1/4">
            <label for="dateSession" class="block  font-medium text-primary">
              Date of Session
            </label>

            <input
              type="date"
              id="dateSession"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
          <div className="w-1/4">
            <label for="time" class="block  font-medium text-primary">
              Time of Session
            </label>

            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
          <div className="w-1/4">
            <label for="confirmEmail" class="block  font-medium text-primary">
              Confirm your email
            </label>

            <input
              type="email"
              id="confirmEmail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="ex. ashish@gmail.com"
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
        </div>
        <button
          onClick={addSession}
          className="bg-primary  text-gray-50 text-center font-bold  text-lg h-10 px-4 pt-2 rounded-md w-full shadown-md"
        >
          Add Session
        </button>
      </form>
    </div>
  );
}

export default AddSession;
