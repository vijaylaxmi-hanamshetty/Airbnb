import React from 'react'
import Dropdown from '../Component/Dropdown'

const Question = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-10 bg-white lg:px-20">
      <div>
        <h1 className="font-thin sm:text-3xl lg:text-6xl lg:font-thin">
          Frequently asked questions
        </h1>
      </div>
      <div>
        <div className="container mx-auto p-4">
          <div className="mb-4">
            <Dropdown title="What are the eligibility criteria to become an experienced Co-Host?">
              <p>
                Experienced Co-Hosts must be either Hosts or Co-Hosts who have
                hosted listings with an average guest rating of 4.8 or more and a
                less than 3% cancellation rate on at least 10 stays on Airbnb.
                Learn more about the eligibility criteria. This marketplace
                currently operates in France, Spain, Italy, Germany, the UK,
                Australia, Brazil, Canada and the US. As it grows, we’ll welcome
                experienced Co-Hosts who are ready to bring hosting services to
                additional corners of the world.
              </p>
            </Dropdown>
          </div>
          <div className="mb-4">
            <Dropdown title="How do I become a Co-Host?">
              <p>
                To become a Co-Host, you must be invited by a Host. Hosts can
                invite friends, family members, neighbors, or others they trust to
                help them manage their listings and guests.
              </p>
            </Dropdown>
          </div>
          <div className="mb-4">
            <Dropdown title="What are the responsibilities of a Co-Host?">
              <p>
                Co-Hosts can help with managing reservations, messaging guests,
                coordinating check-ins and check-outs, restocking essentials, and
                handling emergencies or guest inquiries.
              </p>
            </Dropdown>
          </div>
          <div className="mb-4">
            <Dropdown title="Can I charge for my Co-Host services?">
              <p>
                Yes, Co-Hosts can charge for their services. The fee structure and
                payment terms should be agreed upon between the Host and the
                Co-Host. It can be a percentage of the booking fee or a fixed
                amount per booking.
              </p>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question
