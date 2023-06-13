import React from "react";
import Avatar from "boring-avatars";

function LeaderBoard({ isStreak }) {
  const dummyData = [
    {
      rank: 1,
      name: "Saumo Pal",
      challengesCompleted: 10,
    },
    {
      rank: 2,
      name: "Saumo Pal",
      challengesCompleted: 10,
    },
    {
      rank: 3,
      name: "Saumo Pal",
      challengesCompleted: 10,
    },
    {
      rank: 4,
      name: "Saumo Pal",
      challengesCompleted: 10,
    },
    {
      rank: 5,
      name: "Saumo Pal",
      challengesCompleted: 10,
    },
    {
      rank: 6,
      name: "Saumo Pal",
      challengesCompleted: 10,
    },
    {
      rank: 7,
      name: "Saumo Pal",
      challengesCompleted: 10,
    },
    {
      rank: 8,
      name: "Saumo Pal",
      challengesCompleted: 10,
    },
    {
      rank: 9,
      name: "Saumo Pal",
      challengesCompleted: 10,
    },
    {
      rank: 10,
      name: "Saumo Pal",
      challengesCompleted: 10,
    },
  ];

  const rankToEmoji = (rank) => {
    if (rank === 1) {
      return `🥇`;
    }
    if (rank === 2) {
      return `🥈`;
    }
    if (rank === 3) {
      return `🥉`;
    }
    return rank;
  };
  return (
    <div class="relative overflow-x-auto mt-4 border rounded-md">
      <table class="w-full text-sm text-left text-black">
        <thead class="text-xs text-gray-700 uppercase bg-white">
          <tr>
            <th scope="col" class="text-left px-2 py-1">
              Rank
            </th>
            <th scope="col" class="text-center px-2 py-1">
              Name
            </th>
            <th scope="col" class="text-right px-2 py-1">
              {isStreak ? "Streak Duration" : "Challenges Completed"}
            </th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((data) => (
            <tr class="bg-white border-b dark:bg-gray-100 dark:border-gray-300">
              <td class="px-6 py-4 text-left">{rankToEmoji(data.rank)}</td>
              <th
                scope="row"
                class="text-center px-6 py-4 font-medium text-black whitespace-nowrap flex flex-row items-center"
              >
                <Avatar
                  size={40}
                  name={data.name}
                  variant="beam"
                  colors={[
                    "#92A1C6",
                    "#146A7C",
                    "#F0AB3D",
                    "#C271B4",
                    "#C20D90",
                  ]}
                />
                <p className="ml-2">{data.name}</p>
              </th>
              <td class="px-6 py-4 text-right">{data.challengesCompleted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
