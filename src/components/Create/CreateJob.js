import axios from "axios";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
function CreateJob() {
  const [role, setRole] = useState(null);
  const [org, setOrg] = useState(null);
  const [stipend, setStipend] = useState(null);
  const [quali, setQuali] = useState(null);
  const [contact, setContact] = useState(null);
  const [logoUrl, setLogoUrl] = useState(null);
  const [jobDesc, setJobDesc] = useState(null);
  const [loading, setloading] = useState(false);

  const getDesc = async (e) => {
    e.preventDefault();
    setloading(true);
    setJobDesc("");
    axios
      .post(process.env.REACT_APP_AI_SERVER + "get_job", {
        Role: role,
        Organisation: org,
        Stipend: stipend,
        Qualification: quali,
        Contact: contact,
      })
      .then((res) => {
        setloading(false);
        setJobDesc(res.data.Job_Description);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="bg-midnight p-4 w-full">
      <h2 className="text-3xl text-gray-50">Post a New Job</h2>
      <form className="">
        <div className="flex items-center justify-between w-full mt-4 ">
          <div className="w-1/4">
            <label for="jobRole" class="block  font-medium text-primary">
              Role
            </label>

            <input
              type="text"
              id="jobRole"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              placeholder="ex. Software Engineer 1"
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
            <label for="stipend" class="block  font-medium text-primary">
              Stipend
            </label>

            <input
              type="text"
              id="stipend"
              value={stipend}
              onChange={(e) => {
                setStipend(e.target.value);
              }}
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-4">
          <div className="w-1/4">
            <label for="logoUrl" class="block  font-medium text-primary">
              Url of the Org logo
            </label>

            <input
              type="text"
              id="logoUrl"
              value={logoUrl}
              onChange={(e) => {
                setLogoUrl(e.target.value);
              }}
              placeholder="ex. google drive link/image link from official website"
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
          <div className="w-1/4">
            <label for="quali" class="block  font-medium text-primary">
              Qualifications Required
            </label>

            <input
              type="text"
              id="quali"
              value={quali}
              onChange={(e) => {
                setQuali(e.target.value);
              }}
              placeholder="ex. BTech Grad/2-5 yrs experience"
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
          <div className="w-1/4">
            <label for="contact" class="block  font-medium text-primary">
              Contact
            </label>

            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
        </div>
        <div className="w-full mt-4">
          <label
            for="jobDescription"
            class="flex items-center justify-between  font-medium text-primary"
          >
            Job Description
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
            id="jobDescription"
            value={jobDesc}
            onChange={(e) => {
              setJobDesc(e.target.value);
            }}
            class="h-96 w-full rounded-md mt-4 bg-gray-200 p-4"
          ></textarea>
        </div>
        <button className="bg-primary my-4 text-gray-50 text-center font-bold  text-lg h-10 px-4 pt-2 rounded-md w-full shadown-md">
         Post Job
        </button>
      </form>
    </div>
  );
}

export default CreateJob;
