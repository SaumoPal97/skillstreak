import React, { useState } from "react";
import NavBar from "../../components/navbar";
import "./styles.css";

function HomeFeed() {
  const [count, setCount] = useState(null);
  const [challenge, setChallenge] = useState("");

  return (
    <div className="font-poppins">
      <NavBar />
      <div className="flex flex-col items-center w-full mx-auto">
        <div>
          <p className="text-2xl font-bold mb-5 text-center">
            Create new challenge
          </p>
          <div className="flex flex-row items-center">
            <p className="font-semibold mr-2 ">Name:</p>
            <input
              type="number"
              placeholder="30"
              value={count}
              className="border w-16 mr-1 rounded-md px-2 py-1"
              onChange={(e) => setCount(e.target.value)}
            />
            <span>days of</span>
            <input
              type="text"
              placeholder="coding"
              value={challenge}
              className="border w-36 ml-1 rounded-md px-2 py-1"
              onChange={(e) => setChallenge(e.target.value)}
            />
          </div>
          <div className="mt-2 mb-2 border rounded-md w-full">
            <textarea
              placeholder="Add details about the challenge"
              className="p-2"
              style={{ width: "50vw", height: "50vh" }}
            />
          </div>
          <div className="border rounded-md flex flex-row mb-2">
            <img
              src="https://res.cloudinary.com/dwdrlrzkt/image/upload/v1686653994/discord_fktfuo.svg"
              alt="discord icon"
              className="bg-gray-300 mr-2 px-4 py-2"
            ></img>
            <input type="url" placeholder="http://discord.com" />
          </div>
          <div className="border rounded-md flex flex-row mb-2">
            <img
              src="https://res.cloudinary.com/dwdrlrzkt/image/upload/v1686653994/slack_aiqqky.svg"
              alt="slack icon"
              className="bg-gray-300 mr-2 px-4 py-2"
            ></img>
            <input type="url" placeholder="http://slack.com" />
          </div>
          <div className="border rounded-md flex flex-row mb-2">
            <img
              src="https://res.cloudinary.com/dwdrlrzkt/image/upload/v1686653994/twitter_wtgj1k.svg"
              alt="twitter icon"
              className="bg-gray-300 mr-2 px-4 py-2"
            ></img>
            <input type="url" placeholder="http://twitter.com" />
          </div>
        </div>
        <div>
          <button className="launch" id="everybodydance">
            <span>Launch</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeFeed;
