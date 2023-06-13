import React from "react";
import Avatar from "boring-avatars";
import { stringToColour } from "../../utils/colorUtils";
import { Link } from "react-router-dom";
import "./styles.css";

function ChallengeCard({ item }) {
  const date = new Date(item.endDate);
  const color = stringToColour();
  return (
    <div
      className="h-max w-max p-4 m-4 border rounded-md flex flex-col justify-between"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${color}, white)`,
        width: 400,
        height: 200,
      }}
    >
      <div>
        <p className="font-bold mx-1">{item.name}</p>
        <p className="mx-1">{`Ends on ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</p>
      </div>
      <div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row avatars">
            {item.topParticipants.map((name) => (
              <div class="avatar">
                <Avatar
                  size={40}
                  name={name}
                  variant="beam"
                  colors={[
                    "#92A1C6",
                    "#146A7C",
                    "#F0AB3D",
                    "#C271B4",
                    "#C20D90",
                  ]}
                />
              </div>
            ))}
          </div>
          <Link to={`/challenge/${item.slug}`}>
            <p className="px-2 py-1 border rounded-md bg-black text-white font-semibold">
              Join
            </p>
          </Link>
        </div>
        <p>{`+ ${item.participantCount} others`}</p>
      </div>
    </div>
  );
}

export default ChallengeCard;
