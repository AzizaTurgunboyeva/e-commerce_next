import styled from "styled-components";

export const DressStyleWrapper = styled.section`
  max-width: 1239px;
  margin: 0 auto;
  background-color: #f0f0f0;
  border-radius: 40px;
  padding: 1.5rem;

  .title p {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 64px;
  }

  .styles-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-bottom: 65px;
  }

  .card {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 289px;
      object-fit: cover;
      display: block;
    }

    &:nth-child(1),
    &:nth-child(4) {
      flex: 0 0 407px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      flex: 0 0 684px;
    }

    .card-title {
      position: absolute;
      top: 25px;
      left: 36px;
      margin: 0;
      font-size: 36px;
      font-weight: 700;
      color: #fff;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    }
  }

  /* === MOBILE RESPONSIVE STYLES === */
  @media (max-width: 400px) {
    border-radius: 20px;
    padding: 1rem;

    .title p {
      font-size: 32px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 24px;
    }

    .styles-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
    }

    .card {
      width: 100%;
      height: 190px;
      border-radius: 20px;
      overflow: hidden;
      position: relative;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

      .card-title {
        font-size: 24px;
        top: 12px;
        left: 12px;
        position: absolute;
        color: white;
        font-weight: 700;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
      }
    }
  }

`;
