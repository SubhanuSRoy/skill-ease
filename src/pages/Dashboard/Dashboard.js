import React, { useState } from "react";
import AddSession from "../../components/Create/AddSession";
import CreateCourse from "../../components/Create/CreateCourse";
import CreateJob from "../../components/Create/CreateJob";

function Dashboard() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="flex flex-col items-center px-32 py-8">
      {/* tab header */}
      <div className="w-full flex items-center justify-center text-gray-50 border-2 border-gray-500 text-xl font-semibold">
        <button
          className={
            toggleState === 1
              ? "bg-midnight p-4 border-2 border-gray-500 w-1/3"
              : "w-1/3 bg-transparent p-4 text-gray-50 "
          }
          onClick={() => toggleTab(1)}
        >
          Job Listing
        </button>
        <button
          className={
            toggleState === 2
              ? "bg-midnight p-4 border-2 border-gray-500 w-1/3"
              : "w-1/3 bg-transparent p-4 text-gray-50 "
          }
          onClick={() => toggleTab(2)}
        >
          Create Course
        </button>
        <button
          className={
            toggleState === 3
              ? "bg-midnight p-4 border-2 border-gray-500 w-1/3"
              : "w-1/3 bg-transparent p-4 text-gray-50 "
          }
          onClick={() => toggleTab(3)}
        >
          Mentor Sessions
        </button>
      </div>

      {/* tab panel */}
      <div className="w-full">
        <div
          className={toggleState === 1 ? "w-full" : "hidden"}
        >
          <CreateJob />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "hidden"}
        >
          <CreateCourse />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "hidden"}
        >
          <AddSession />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
