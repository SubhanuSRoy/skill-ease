import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Courses from "../../components/Recommendation/Courses";
import Jobs from "../../components/Recommendation/Jobs";
import Mentors from "../../components/Recommendation/Mentors";

function Converse() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [searchQuery, setSearchQuery] = useState(null);

  const listen = () => {
    resetTranscript();
    setSearchQuery(transcript);
    SpeechRecognition.startListening();
  };
  const updateQuery = () => {
    SpeechRecognition.stopListening();
    setSearchQuery(transcript);
  };

  const data = {
    jobs: [
      {
        role: "SDE",
        company: "Microsoft",
        salary: "15LPA",
        logo: "https://drive.google.com/file/d/1fkR0HV1uPCTEKos7I4QpJG7zwVVK5S0l/view?usp=sharing",
      },
      {
        role: "SDE",
        company: "Microsoft",
        salary: "15LPA",
        logo: "https://drive.google.com/file/d/1fkR0HV1uPCTEKos7I4QpJG7zwVVK5S0l/view?usp=sharing",
      },
    ],
    courses: [
      {
        title: "Java Crash Course",
        course_creator: "Tim Buchalka",
        totalTime: "15hrs",
        logo: "https://drive.google.com/file/d/1fkR0HV1uPCTEKos7I4QpJG7zwVVK5S0l/view?usp=sharing",
      },
      {
        title: "Java Crash Course",
        course_creator: "Tim Buchalka",
        totalTime: "15hrs",
        logo: "https://drive.google.com/file/d/1fkR0HV1uPCTEKos7I4QpJG7zwVVK5S0l/view?usp=sharing",
      },
    ],
    mentors: [
      {
        mentor_name: "Jonathan Watson",
        quali: ["Btech", "MTech"],
        tags: ["software", "backend"],
        img: "https://drive.google.com/file/d/1fkR0HV1uPCTEKos7I4QpJG7zwVVK5S0l/view?usp=sharing",
      },
      {
        mentor_name: "Jonathan Watson",
        quali: ["Btech", "MTech"],
        tags: ["software", "backend"],
        img: "https://drive.google.com/file/d/1fkR0HV1uPCTEKos7I4QpJG7zwVVK5S0l/view?usp=sharing",
      },
    ],
  };
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="flex items-center gap-8 ">
        <div className="flex flex-col items-center gap-4 border-2 border-gray-500 rounded-md p-4">
          <h1 className="text-gray-50">Jobs</h1>
          {data.jobs.map((job) => {
            return (
              <Jobs
                logo={job.logo}
                role={job.role}
                company={job.company}
                salary={job.salary}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-4 items-center border-2 border-gray-500 rounded-md p-4">
          <h1 className="text-gray-50">Courses</h1>
          {data.courses.map((course) => {
            return (
              <Courses
                logo={course.logo}
                title={course.title}
                creator_name={course.course_creator}
                totalTime={course.totalTime}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-4 items-center border-2 border-gray-500 rounded-md p-4">
          <h1 className="text-gray-50">Mentors</h1>
          {data.mentors.map((mentor) => {
            return (
              <Mentors
                imgUrl={mentor.img}
                name={mentor.mentor_name}
                quali={mentor.quali}
                tags={mentor.tags}
              />
            );
          })}
        </div>
      </div>
      <div className="fixed bottom-8 w-3/4">
        <form class="w-full">
          <div class="relative flex items-center">
            <input
              class="h-20 w-full rounded-lg border-gray-200 pl-8 pr-10 text-gray-300 text-lg outline-none bg-midnight placeholder-gray-300 focus:z-10"
              placeholder="Computer jobs in India..."
              value={searchQuery || transcript}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              type="text"
            />

            {!listening && (
              <button
                type="submit"
                onClick={listen}
                class="absolute  right-2 rounded-full p-2  text-gray-50 hover:bg-primary"
              >
                <span class="sr-only">Start Listening</span>
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
                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                  />
                </svg>
              </button>
            )}
            {listening && (
              <button
                type="submit"
                onClick={updateQuery}
                class="absolute right-2 rounded-full p-2  text-red-500 bg-primary"
              >
                <span class="sr-only">Stop Listening</span>
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
                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                  />
                </svg>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Converse;
