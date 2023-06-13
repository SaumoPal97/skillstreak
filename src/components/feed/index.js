import React from "react";
import UpdateCard from "../updatecard";

function Feed() {
  const dummyData = [
    {
      user: {
        name: "Saumo Pal",
      },
      challenge: {
        name: "30 days of Tiktok",
        slug: "30-days-of-tiktok-rand",
        totalDays: 30,
        hashtags: ["30daysoftiktok", "skillstreak"],
      },
      updateCount: 29,
      updateContent: {
        text: "I just posted some content on how to start a new microsaas business, do check it out in the link below.",
        url: "www.google.com",
        image:
          "https://res.cloudinary.com/dwdrlrzkt/image/upload/f_auto,q_auto/maxresdefault_nmixup.jpg",
      },
      updateDate: "2023-06-13T05:28:20.038Z",
    },
    {
      user: {
        name: "Saumo Pal",
      },
      challenge: {
        name: "30 days of Tiktok",
        slug: "30-days-of-tiktok-rand",
        totalDays: 30,
        hashtags: ["30daysoftiktok", "skillstreak"],
      },
      updateCount: 29,
      updateContent: {
        text: "I just posted some content on how to start a new microsaas business, do check it out in the link below.",
        url: "www.google.com",
        image:
          "https://res.cloudinary.com/dwdrlrzkt/image/upload/f_auto,q_auto/maxresdefault_nmixup.jpg",
      },
      updateDate: "2023-06-13T05:28:20.038Z",
    },
    {
      user: {
        name: "Saumo Pal",
      },
      challenge: {
        name: "30 days of Tiktok",
        slug: "30-days-of-tiktok-rand",
        totalDays: 30,
        hashtags: ["30daysoftiktok", "skillstreak"],
      },
      updateCount: 29,
      updateContent: {
        text: "I just posted some content on how to start a new microsaas business, do check it out in the link below.",
        url: "www.google.com",
        image:
          "https://res.cloudinary.com/dwdrlrzkt/image/upload/f_auto,q_auto/maxresdefault_nmixup.jpg",
      },
      updateDate: "2023-06-13T05:28:20.038Z",
    },
    {
      user: {
        name: "Saumo Pal",
      },
      challenge: {
        name: "30 days of Tiktok",
        slug: "30-days-of-tiktok-rand",
        totalDays: 30,
        hashtags: ["30daysoftiktok", "skillstreak"],
      },
      updateCount: 29,
      updateContent: {
        text: "I just posted some content on how to start a new microsaas business, do check it out in the link below.",
        url: "www.google.com",
        image:
          "https://res.cloudinary.com/dwdrlrzkt/image/upload/f_auto,q_auto/maxresdefault_nmixup.jpg",
      },
      updateDate: "2023-06-13T05:28:20.038Z",
    },
    {
      user: {
        name: "Saumo Pal",
      },
      challenge: {
        name: "30 days of Tiktok",
        slug: "30-days-of-tiktok-rand",
        totalDays: 30,
        hashtags: ["30daysoftiktok", "skillstreak"],
      },
      updateCount: 29,
      updateContent: {
        text: "I just posted some content on how to start a new microsaas business, do check it out in the link below.",
        url: "www.google.com",
        image:
          "https://res.cloudinary.com/dwdrlrzkt/image/upload/f_auto,q_auto/maxresdefault_nmixup.jpg",
      },
      updateDate: "2023-06-13T05:28:20.038Z",
    },
  ];
  return (
    <div className="flex flex-col mx-4 my-2">
      {dummyData.map((data) => (
        <UpdateCard update={data} />
      ))}
    </div>
  );
}

export default Feed;
