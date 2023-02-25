import React from "react";
import Courses from "../../components/Recommendation/Courses";

function CourseList() {
  const courses = [
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
  ];
  return (
    <div className="flex flex-wrap w-full p-4 gap-4">
      {courses?.map((course) => {
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
  );
}

export default CourseList;
