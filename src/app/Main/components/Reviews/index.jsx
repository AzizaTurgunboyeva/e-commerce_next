// src/app/Main/components/Reviews/ReviewSection.jsx
import React from "react";

// 1️⃣ React-wrapper and CSS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// 2️⃣ Correct module import
import { Navigation } from "swiper/modules";


import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useComments } from "../../../../hooks/useComments";
import ReviewCard from "../../../../components/Review";
import {
  CommentsSection,
  CustomersHeader,
  IconsContainer,
  NavButton,
  HappyCustomersWrapper,
} from "./Review.styled";

export default function ReviewSection() {
  const { data = [], isLoading, isError, error } = useComments();
  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <CommentsSection>
      <CustomersHeader>
        <h3>OUR HAPPY CUSTOMERS</h3>
        <IconsContainer>
          <NavButton className="swiper-button-prev-custom">
            <GoArrowLeft />
          </NavButton>
          <NavButton className="swiper-button-next-custom">
            <GoArrowRight />
          </NavButton>
        </IconsContainer>
      </CustomersHeader>

      <HappyCustomersWrapper>
        <Swiper
          modules={[Navigation]} // ✅ pass it here
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((rev, i) => (
            <SwiperSlide key={i}>
              <ReviewCard reviews={rev} width={300} />
            </SwiperSlide>
          ))}
        </Swiper>
      </HappyCustomersWrapper>
    </CommentsSection>
  );
}
