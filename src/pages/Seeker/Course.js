import axios from "axios";
import React, { useState } from "react";

function Course() {
  const [video, setVideo] = useState(null);
  const seeVideo = async () => {
    axios
      .get(process.env.REACT_APP_AI_SERVER + "getInformation", {
        headers: {
          Accept: "video/mp4;charset=UTF-8",
        },
        responseType: "blob",
      })
      .then((response) => {
        const URL = window.URL || window.webkitURL;
        const url = URL.createObjectURL(
          new Blob([response.data], { type: "video/mp4" })
        );
        console.log(url);
        setVideo(url);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <button onClick={seeVideo} className="bg-primary p-4">
        Get Video
      </button>
      <video controls autoPlay loop muted>
        <source
          src="https://drive.google.com/file/d/1uyInTei3zeG7INEiGjxOOoOoadCk-LiB/view"
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
}

export default Course;
