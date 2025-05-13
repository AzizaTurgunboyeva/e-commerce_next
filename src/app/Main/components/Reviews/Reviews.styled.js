import styled from "styled-components";

export const ReviewsSectionWrapper = styled.section`
  padding: 60px 20px;
  max-width: 1240px;
  margin: 0 auto;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h2 {
      font-size: 32px;
      font-weight: 700;
      text-transform: uppercase;
      margin: 0;
    }

    .navButtons {
      display: flex;
      gap: 12px;

      button {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: #333;
        transition: color 0.2s;
      }
      button:hover {
        color: #555;
      }
    }
  }

  /* Hide slick's built-in arrows & dots */
  .slick-arrow,
  .slick-dots {
    display: none !important;
  }

  /* Allow slides to overflow container so neighbors peek in */
  .slick-list {
    overflow: visible;
    padding: 0 10px; /* give a little breathing room */
  }

  .slick-slide > div {
    /* remove the blue focus outline */
    outline: none;
  }

  .slick-slide {
    /* horizontal gap between cards */
    padding: 0 10px;
    transition: transform 0.3s ease;
  }
  .slick-slide:hover {
    /* optional lift effect */
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    .top h2 {
      font-size: 28px;
    }
  }

  @media (max-width: 768px) {
    padding: 40px 16px;

    .top {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 20px;
    }
  }
`;
