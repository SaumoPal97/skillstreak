import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar";
import Feed from "../../components/feed";
import LeaderBoard from "../../components/leaderboard";
import Confetti from "react-confetti";
import Modal from "react-modal";
import ModalForm from "../../components/modal-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ChallengeFeed() {
  const dummyData = {
    name: "30 Days of Tiktok",
    slug: "30-days-of-tiktok-123",
    details:
      "As you start - don’t be alarmed if you are the first one to start or there’s not too many people in the challenge yet. Be proud to be one of the pioneers! :) Give me a shout by mentioning me in the tweet @ka11away. One you’ve made a decision to commit to one of the challenges, read the Steps page to learn, ahemm well, the next steps. For any of these, tweet your progress every day with 2 hashtags: 1. the #100DaysOfX hashtag 2. the hashtag of your challenge: for example, #100DaysOfArt. Connect with other pioneers here: #100DaysOfX Hashtag. Remember to add the #100DaysOfX hashtag to your daily update for any challenge that you are taking to make it easier to connect with others! I am planning to add a separate information page for each challenge as we go along, so if you have some questions, it’s perfectly fine and will actually help us improve the challenges – ask me in DM on Twitter: @ka11away. If you don’t find a challenge around a habit you’re looking to acquire, read the instructions on the bottom of this page.",
    participantCount: 30,
    topParticipants: ["Saumo", "Sayantan", "Debdeep", "Shukla", "Kamal"],
    endDate: "2023-06-13T05:28:20.038Z",
    twitter: "https://twitter.com",
    discord: "https://discord.com",
    slack: "https://slack.com",
  };
  const [shouldRun, setShouldRun] = useState(false);
  const [showUpdateButton, setShowUpdateButton] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [numberOfPieces, setNumberOfPieces] = useState(200);

  useEffect(() => {
    if (shouldRun) {
      setTimeout(() => {
        setNumberOfPieces(0);
      }, 5000);
    } else {
      setNumberOfPieces(200);
    }
  }, [shouldRun]);

  return (
    <div className="font-poppins">
      <Confetti run={shouldRun} numberOfPieces={numberOfPieces} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <div className="flex justify-end">
          <button
            className="px-2 py-1 border rounded-sm"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
        <ModalForm setShouldRun={setShouldRun} setIsOpen={setIsOpen} />
      </Modal>
      <NavBar />
      <div className="p-8">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <p className="text-xl font-semibold">
              👋 Welcome to {dummyData.name}
            </p>
            {!showUpdateButton ? (
              <p
                className="px-2 py-1 border rounded-md cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Update progress
              </p>
            ) : (
              <p
                className="px-2 py-1 border rounded-md cursor-pointer"
                onClick={() => setShouldRun(true)}
              >
                Join challenge
              </p>
            )}
          </div>
          <p className="text-md mt-4 mb-2">{dummyData.details}</p>
          <div className="flex flex-row mb-5">
            <div className="flex flex-row border rounded-md bg-gray-300 items-center pl-3 mr-5">
              <span>Follow on</span>
              <img
                src="https://res.cloudinary.com/dwdrlrzkt/image/upload/v1686653994/twitter_wtgj1k.svg"
                alt="twitter icon"
                className="bg-gray-300 mx-2 py-2"
              ></img>
            </div>
            <div className="flex flex-row border rounded-md bg-gray-300 items-center pl-3 mr-5">
              <span>Join</span>
              <img
                src="https://res.cloudinary.com/dwdrlrzkt/image/upload/v1686653994/discord_fktfuo.svg"
                alt="discord icon"
                className="bg-gray-300 mx-2 py-2"
              ></img>
            </div>
            <div className="flex flex-row border rounded-md bg-gray-300 items-center pl-3 mr-5">
              <span>Join</span>
              <img
                src="https://res.cloudinary.com/dwdrlrzkt/image/upload/v1686653994/slack_aiqqky.svg"
                alt="slack icon"
                className="bg-gray-300 mx-2 py-2"
              ></img>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <p className="text-xl font-semibold">🛠 Feed</p>
            <Feed />
          </div>
          <div>
            <p className="text-xl font-semibold">📊 Challenge Streaks</p>
            <LeaderBoard isStreak={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChallengeFeed;
