import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import ChallengeCard from "../challengecard";

function CarouselComponent() {
  const [activeSlide, setActiveSlide] = useState(0);
  const dummyData = [
    {
      name: "30 Days of Tiktok",
      slug: "30-days-of-tiktok-123",
      participantCount: 30,
      topParticipants: ["Saumo", "Sayantan", "Debdeep", "Shukla", "Kamal"],
      endDate: "2023-06-13T05:28:20.038Z",
    },
    {
      name: "30 Days of Tiktok",
      slug: "30-days-of-tiktok-123",
      participantCount: 30,
      topParticipants: ["Saumo", "Sayantan", "Debdeep", "Shukla", "Kamal"],
      endDate: "2023-06-13T05:28:20.038Z",
    },
    {
      name: "30 Days of Tiktok",
      slug: "30-days-of-tiktok-123",
      participantCount: 30,
      topParticipants: ["Saumo", "Sayantan", "Debdeep", "Shukla", "Kamal"],
      endDate: "2023-06-13T05:28:20.038Z",
    },
    {
      name: "30 Days of Tiktok",
      slug: "30-days-of-tiktok-123",
      participantCount: 30,
      topParticipants: ["Saumo", "Sayantan", "Debdeep", "Shukla", "Kamal"],
      endDate: "2023-06-13T05:28:20.038Z",
    },
    {
      name: "30 Days of Tiktok",
      slug: "30-days-of-tiktok-123",
      participantCount: 30,
      topParticipants: ["Saumo", "Sayantan", "Debdeep", "Shukla", "Kamal"],
      endDate: "2023-06-13T05:28:20.038Z",
    },
    {
      name: "30 Days of Tiktok",
      slug: "30-days-of-tiktok-123",
      participantCount: 30,
      topParticipants: ["Saumo", "Sayantan", "Debdeep", "Shukla", "Kamal"],
      endDate: "2023-06-13T05:28:20.038Z",
    },
    {
      name: "30 Days of Tiktok",
      slug: "30-days-of-tiktok-123",
      participantCount: 30,
      topParticipants: ["Saumo", "Sayantan", "Debdeep", "Shukla", "Kamal"],
      endDate: "2023-06-13T05:28:20.038Z",
    },
  ];

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
          },
        }}
        autoplay={true}
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 10,
              width: 10,
              borderRadius: "50%",
              border: 0,
              background: "gray",
              margin: "4px",
            },
          },
          activeItemBtnProps: {
            style: {
              height: 10,
              width: 10,
              borderRadius: "50%",
              border: 0,
              background: "black",
              margin: "4px",
            },
          },
        }}
        delay={2000}
        itemsToShow={4}
        speed={400}
        infinite={true}
      >
        {dummyData.map((item, index) => (
          <div key={index}>
            <ChallengeCard item={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
