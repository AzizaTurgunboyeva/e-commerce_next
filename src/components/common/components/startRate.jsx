import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRate = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <>
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={`full-${i}`} color="gold" />
      ))}

      {hasHalf && <FaStarHalfAlt key="half" color="gold" />}
    </>
  );
};

export default StarRate;
