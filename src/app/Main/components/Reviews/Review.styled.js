// src/app/Main/components/Reviews/Reviews.styled.js
import styled from "styled-components";

export const CommentsSection = styled.section`
  padding: 60px 20px;
  max-width: 1240px;
  margin: 0 auto;
`;

export const CustomersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h3 {
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 20px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const NavButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #333;
  transition: color 0.2s;

  &:hover {
    color: #555;
  }
`;

export const HappyCustomersWrapper = styled.div`
  .swiper {
    overflow: visible;
  }
`;
