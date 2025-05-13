import React, { useRef } from "react";
import Slider from "react-slick";
import { ReviewsSectionWrapper } from "./Reviews.styled.js";
import { useComments } from "../../../../hooks/useComments";
import ReviewCard from "../../../../components/common/Review";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// slick CSS import once in your app root (e.g. main.jsx):
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const ReviewSection = () => {
  const { data, isLoading, isError, error } = useComments();
  const sliderRef = useRef(null);
console.log("koment", data);

  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <ReviewsSectionWrapper>
      <div className="top">
        <h2>OUR HAPPY CUSTOMERS</h2>
        <div className="navButtons">
          <button onClick={() => sliderRef.current?.slickPrev()}>
            <FaArrowLeft />
          </button>
          <button onClick={() => sliderRef.current?.slickNext()}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {data?.map((c) => (
          <ReviewCard
          key={c?.id}
          width={400}
          // review={{
          //   rating: c.rating,
          //   userName: c.user,
          //   verified: c.verified,
          //   comment: c.text,
          //   datePosted: c.date,
          // }}
          c={c}
          />
        ))}
      </Slider>
    </ReviewsSectionWrapper>
  );
};

export default ReviewSection;
