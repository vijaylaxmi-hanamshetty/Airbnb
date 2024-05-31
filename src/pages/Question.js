import React from "react";
import Dropdown from "../Component/Dropdown";

const questions = [
  {
    title:
      "What are the eligibility criteria to become an experienced Co-Host?",
    content: (
      <p>
        Experienced Co-Hosts must be either Hosts or Co-Hosts who have hosted
        listings with an average guest rating of 4.8 or more and a less than 3%
        cancellation rate on at least 10 stays on Airbnb. Learn more about the
        eligibility criteria. This marketplace currently operates in France,
        Spain, Italy, Germany, the UK, Australia, Brazil, Canada and the US. As
        it grows, we’ll welcome experienced Co-Hosts who are ready to bring
        hosting services to additional corners of the world.
      </p>
    ),
  },
  {
    title: "How do I become a Co-Host?",
    content: (
      <p>
        To become a Co-Host, you must be invited by a Host. Hosts can invite
        friends, family members, neighbors, or others they trust to help them
        manage their listings and guests.
      </p>
    ),
  },
  {
    title: "What are the responsibilities of a Co-Host?",
    content: (
      <p>
        Co-Hosts can help with managing reservations, messaging guests,
        coordinating check-ins and check-outs, restocking essentials, and
        handling emergencies or guest inquiries.
      </p>
    ),
  },
  {
    title: "Can I charge for my Co-Host services?",
    content: (
      <p>
        Yes, Co-Hosts can charge for their services. The fee structure and
        payment terms should be agreed upon between the Host and the Co-Host. It
        can be a percentage of the booking fee or a fixed amount per booking.
      </p>
    ),
  },
];

const Question = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-10 bg-white lg:px-16 ">
        <div>
          <h1 className="font-thin sm:text-4xl lg:text-5xl  md:text-3xl lg:font-medium">
            Frequently asked questions
          </h1>
        </div>
        <div>
          <div className="container mx-auto p-4">
            {questions.map((question, index) => (
              <div key={index} className="mb-4">
                <Dropdown title={question.title}>{question.content}</Dropdown>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" p-10 lg:px-16">
        <p className=" text-base">
          The Co-Host Services Platform enables Hosts to connect with
          experienced Co-Hosts who provide a variety of hosting services. This
          platform service is powered by Airbnb Living LLC, Airbnb Global
          Services Limited and Airbnb Plataforma Digital Ltda. It is currently
          available in France, Spain, Italy, the UK, Germany, Australia, Canada,
          Brazil, Mexico and the United States. The Luckey platform is offered
          by Luckey SAS.
        </p>
        <p className=" text-base">
          * In many countries, you can share a part of each booking’s payout
          with your Co-Host through Airbnb. There are some limitations depending
          on your location and your Co-Host’s, or where your listing is located.
          Learn more.
        </p>
      </div>
    </>
  );
};

export default Question;
