// src/components/Review/ReviewCard.jsx
import React from "react";
import { ReviewCardWrapper } from "./Review.styled";
import StarRate from "../components/startRate";
import { FaCircleCheck, FaEllipsis } from "react-icons/fa6";

export default function ReviewCard({
  width = 600,//default berildi
  review: {
    rating = 4.5,
    userName = "Liam K.",
    verified = true,
    comment = "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    datePosted = "August 18, 2023",
  } = {},
}) {
  return (
    <ReviewCardWrapper width={width}>
      <div className="header">
        <div className="star">
          <StarRate rating={rating} />
        </div>
        {width > 400 && <FaEllipsis className="moreIcon" />}
      </div>

      <div className="user">
        <p>{userName}</p>
        {verified && <FaCircleCheck />}
      </div>

      <p className="comments">"{comment}"</p>

      {width > 400 && <p className="date">Posted on {datePosted}</p>}
    </ReviewCardWrapper>
  );
}
