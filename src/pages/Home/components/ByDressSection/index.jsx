import React from "react";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import DressStyleSection from "../../../../app/Main/components/Styles";
import ReviewCard from "../../../../components/Review";
import { useComments } from "../../../../hooks";

import { Container, DressWrapper, CommentsWrapper } from "./ByDress.styled";

export default function ByDress() {
  const { data, isLoading, isError, error } = useComments();
  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <DressWrapper>
        <DressStyleSection />
      </DressWrapper>

      <CommentsWrapper>
        <div className="customers">
          <h3>OUR HAPPY CUSTOMERS</h3>
          <div className="icons">
            <div className="swiper-button-prev-custom">
              <GoArrowLeft />
            </div>
            <div className="swiper-button-next-custom">
              <GoArrowRight />
            </div>
          </div>
        </div>

        <div className="our-happy-customers">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {data.map((review, idx) => (
              <SwiperSlide key={idx}>
                <ReviewCard
                  width={400}
                  rating={review.rating}
                  user={review.user}
                  verified={review.verified}
                  text={review.text}
                  datePosted={review.datePosted}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </CommentsWrapper>
    </Container>
  );
}
