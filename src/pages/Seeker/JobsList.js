import React from "react";
import Jobs from "../../components/Recommendation/Jobs";

function JobsList() {
  const jobs = [
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
  ];
  return (
    <div className="flex flex-wrap w-full p-4 gap-4">
      {jobs?.map((job) => {
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
  );
}

export default JobsList;
