import React from "react";
import Avatar from "boring-avatars";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Post from "../post";

function UpdateCard({ update }) {
  const percentage = Math.floor(
    (update.updateCount * 100) / update.challenge.totalDays
  );
  const date = new Date(update.updateDate);

  return (
    <div className="flex flex-col border rounded-md border-2 p-3 my-2">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <Avatar
            size={40}
            name={update.user.name}
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
          <p className="ml-2">{update.user.name}</p>
        </div>
        <div>
          <CircularProgressbar
            value={percentage}
            className="h-12 w-12"
            text={`${percentage}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#16697c",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </div>
      </div>
      <Post post={update.updateContent} />
      <p className="mt-2 text-sm font-normal italic text-gray-400">{`Updated on ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</p>
      <div></div>
    </div>
  );
}

export default UpdateCard;
