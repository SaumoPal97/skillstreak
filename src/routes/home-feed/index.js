import React from "react";
import NavBar from "../../components/navbar";
import CarouselComponent from "../../components/carousel";
import Feed from "../../components/feed";
import LeaderBoard from "../../components/leaderboard";

function HomeFeed() {
  return (
    <div className="font-poppins">
      <NavBar />
      <div className="p-8">
        <div className="flex flex-row justify-between">
          <p className="text-xl font-semibold">🔥 Hot Challenges</p>
          <p className="px-2 py-1 border rounded-md">See all challenges</p>
        </div>
        <CarouselComponent />
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <p className="text-xl font-semibold">🛠 Feed</p>
            <Feed />
          </div>
          <div>
            <p className="text-xl font-semibold">📊 LeaderBoard</p>
            <LeaderBoard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFeed;
