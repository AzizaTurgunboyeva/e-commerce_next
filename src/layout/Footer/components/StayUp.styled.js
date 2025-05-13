import styled from "styled-components";

export const StayUptoWrapper = styled.div`
  background: #000;
  color: #fff;
  border-radius: 20px;
  padding: 32px 24px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  

  .left {
    font-size: 28px;
    font-weight: 700;
    text-transform: uppercase;
    max-width: 50%;
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 45%;
    position: relative;

    input {
      width: 100%;
      padding: 25px 50px 16px 68px;
      border-radius: 100px;
      font-size: 14px;
      border: none;
      background-color: #fff;
      color: #000;
    }

    svg {
      position: absolute;
      top: 22px;
      left: 28px;
      color: #7a7a7a;
      font-size: 20px;
      pointer-events: none;
    }

    .btn {
      width: 100%;
      padding: 12px;
      border-radius: 100px;
      font-weight: 600;
      font-size: 14px;
      background-color: #fff;
      color: #000;
      border: none;
    }
  }

  @media (max-width: 1024px) {
    padding: 28px 20px;
    gap: 30px;

    .left {
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 24px;
    padding: 24px 16px;

    .left {
      font-size: 20px;
      line-height: 28px;
      max-width: 100%;
    }

    .right {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .left {
      font-size: 18px;
      line-height: 24px;
    }

    .right {
      input {
        padding: 20px 40px 16px 50px;
      }

      svg {
        top: 18px;
        left: 20px;
      }
    }
  }
`;
