import React, { useState } from "react";

function CreateJob() {
  const [role, setRole] = useState(null);
  const [org, setOrg] = useState(null);
  const [stipend, setStipend] = useState(null);
  const [quali, setQuali] = useState(null);
  const [contact, setContact] = useState(null);
  const [logoUrl, setLogoUrl] = useState(null);
  const [jobDesc, setJobDesc] = useState(null);
  return (
    <div className="bg-midnight p-4 w-full">
      <h2 className="text-3xl text-gray-50">Post a New Job</h2>
      <form className="mt-4">
        <div className="flex items-center justify-between w-full">
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
              type="number"
              id="stipend"
              value={stipend}
              onChange={(e) => {
                setStipend(e.target.value);
              }}
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="w-1/4">
            <label for="logoUrl" class="block  font-medium text-primary">
              LogoUrl
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
            <label for="org" class="block  font-medium text-primary">
              Qualifications Required
            </label>

            <input
              type="text"
              id="org"
              value={quali}
              onChange={(e) => {
                setQuali(e.target.value);
              }}
              placeholder="ex. BTech Grad/2-5 yrs experience"
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
          <div className="w-1/4">
            <label for="stipend" class="block  font-medium text-primary">
              Stipend
            </label>

            <input
              type="number"
              id="stipend"
              value={stipend}
              onChange={(e) => {
                setStipend(e.target.value);
              }}
              class="mt-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
            />
          </div>
        </div>

      </form>
    </div>
  );
}

export default CreateJob;
