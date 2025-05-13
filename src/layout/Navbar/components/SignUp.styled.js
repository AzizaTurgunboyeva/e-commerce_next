import styled from "styled-components";

export const SignUpWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: #000000;
  color: #ffffff;
  .title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
    padding: 12px;
    font-size: 14px;
    font-weight: 400;

    span {
      text-decoration: underline;
      cursor: pointer;

      font-weight: 450;
    }
    svg {
      cursor: pointer;
    }
  }
`;
