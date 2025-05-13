import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: 24px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #f2f0f1;
  padding: 60px 10%;
  position: relative;
  overflow: hidden;

  .left {
    width: 50%;
    z-index: 2;

    h1 {
      font-size: 64px;
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      line-height: 64px;
      margin-bottom: 32px;
    }

    p {
      font-weight: 400;
      color: #505050;
      margin-bottom: 32px;
      max-width: 545px;
    }

    .numbers {
      display: flex;
      margin-top: 48px;
      font-family: "Roboto", sans-serif;
      gap: 50px;

      div {
        padding: 0 10px;
        p:first-child {
          font-size: 40px;
          font-weight: 700;
          margin: 0;
          color: #000;
        }

        p:last-child {
          font-weight: 400;
          color: #505050;
          margin-top: 4px;
        }
      }
    }
    div:not(:first-child) {
      border-left: 1px solid #cfcfcf;
      align-self: center;
      height: 70px;
    }
  }

  .right {
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: visible;
    img[alt="models"] {
      width: auto;
      height: 663px;
      max-width: 100%;
      position: relative;
      bottom: -60px;
      object-fit: cover;
      z-index: 1;
    }
  }
`;

export const Brands = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 32px 0;
  background-color: #000000;
  color: #ffffff;

  p {
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 0;
  }

  p:nth-child(1) {
    font-family: "Times New Roman", serif;
    font-weight: 600;
  }

  p:nth-child(2) {
    font-weight: 700;
    letter-spacing: 2px;
  }

  p:nth-child(3) {
    font-family: "Times New Roman", serif;
    letter-spacing: 0;
  }

  p:nth-child(4) {
    letter-spacing: 4px;
  }

  p:nth-child(5) {
    font-family: "Helvetica", sans-serif;
    letter-spacing: 0.5px;
  }
`;

export const SmallStar = styled.img`
  position: absolute;
  top: 270px;
  left: 3%;

  z-index: 1;
`;

export const BigStar = styled.img`
  position: absolute;
  top: 100px;
  right: 30px;
  z-index: 1;
`;
