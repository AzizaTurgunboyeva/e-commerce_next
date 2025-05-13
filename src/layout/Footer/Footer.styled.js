import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #f0f0f0;
  padding-top: 100px;
  position: relative;

  .newsletter-floating {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    top: -90px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 20px;
    box-sizing: border-box;

    position: relative;
    z-index: 8;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 80px 20px 40px;
  box-sizing: border-box;

  .paragrif-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding-bottom: 40px;

    .footer-paragrif {
      display: flex;
      flex-direction: column;
      gap: 16px;
      flex: 1;

      &:first-child {
        max-width: 300px;
      }

      span {
        font-size: 28px;
        font-weight: 900;
        font-family: "Poppins", sans-serif;
        color: #000;
      }

      p {
        color: rgba(0, 0, 0, 0.6);
        margin: 0;
        font-size: 14px;
        line-height: 1.5;
      }

      .footer-icons {
        display: flex;
        gap: 16px;
        margin-top: 16px;

        svg {
          width: 24px;
          height: 24px;
          cursor: pointer;
          color: #000000cc;
        }
      }

      &:not(:first-child) p:first-child {
        color: #000;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 8px;
        text-transform: uppercase;
      }

      &:not(:first-child) p:not(:first-child) {
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

  hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 20px 0;
  }

  .footer-finish {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
    }

    .payment-cards {
      display: flex;
      gap: 16px;

      img {
        width: 40px;
        height: auto;
      }
    }
  }

  /* Mobile styles (max-width: 400px) */
  @media (max-width: 400px) {
    padding: 60px 16px 30px;

    .paragrif-wrapper {
      flex-direction: column;
      gap: 32px;
      padding-bottom: 30px;

      .footer-paragrif {
        min-width: 100%;

        &:first-child {
          max-width: 100%;
        }

        span {
          font-size: 24px;
        }

        &:not(:first-child) p:first-child {
          font-size: 14px;
        }
      }
    }

    .footer-finish {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;

      .payment-cards {
        gap: 12px;

        img {
          width: 30px;
        }
      }
    }
  }
`;
