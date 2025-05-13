import React from "react";
import { FaCircleCheck, FaEllipsis } from "react-icons/fa6";
import StarRate from "../components/startRate.jsx";
import { ReviewCardWrapper } from "./Review.styled.js";

export default function ReviewCard({c, width}) {
 
  const  { rating, user, verified, text, datePosted } =c;
  const showExtras = width > 400;
  console.log(c);
  
  return (
    <ReviewCardWrapper width={width}>
     
      <div className="header">
        <StarRate rating={rating} />
        {showExtras && <FaEllipsis className="moreIcon" />}
      </div>

      <div className="user">
        <p>{user}</p>
        {verified && showExtras && <FaCircleCheck />}
      </div>

      <p className="comments">"{text}"</p>

      {showExtras && <p className="date">Posted on {datePosted}</p>}
    </ReviewCardWrapper>
  );
}
