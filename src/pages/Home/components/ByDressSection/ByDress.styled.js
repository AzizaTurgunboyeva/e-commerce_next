import styled from "styled-components";

// Container wrapper
export const Container = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
`;

// DressWrapper replaces your .dress-wrapper SCSS
export const DressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  width: 100%;
  max-width: 1239px;
  border-radius: 62px;
  background-color: #f0f0f0;

  h3 {
    font-family: "Poppins";
    margin-top: 70px;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .img-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .img-row {
      display: flex;
      gap: 20px;

      img {
        cursor: pointer;
        border-radius: 8px;
        transition: transform 0.3s ease;
        &:hover {
          transform: scale(1.01);
        }
      }
    }
  }
`;

// CommentsWrapper replaces your .coments SCSS
export const CommentsWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 90px;
  .customers {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 48px;
      font-weight: 700;
      text-transform: uppercase;
      /* margin: 0; */
      margin-bottom: 20px;
    }

    .icons {
      display: flex;
      gap: 20px;

      .swiper-button-prev-custom,
      .swiper-button-next-custom {
        font-size: 24px;
        cursor: pointer;
        color: #333;
        transition: color 0.3s ease;
        outline: none;

        &:hover {
          color: #000;
        }
      }
    }
  }

  .our-happy-customers {
    margin-top: 30px;

    /* force slides to equal height */
    .swiper-slide {
      display: flex;
      align-items: stretch;
      outline: none;
    }
    .swiper-slide > div {
      flex: 1;
      outline: none;
    }
  }
`;
