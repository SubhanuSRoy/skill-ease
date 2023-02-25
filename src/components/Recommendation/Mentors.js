import React from "react";

function Mentors({ imgUrl, name, quali, tags }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex gap-4">
      <img src={imgUrl} className="h-8 w-8" />
      <div className="flex flex-col text-black">
        <p>{name}</p>
        <p>{quali}</p>
        {/* <p>{tags}</p> */}
        {console.log(quali, tags)}
        {/* <div className="">
          {quali?.map((i) => {
            return <span>{i},</span>;
          })}
        </div> */}
        <div>
          {tags?.map((i) => {
            return <span>{i},</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Mentors;
