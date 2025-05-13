import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;

  .logo {
    height: 22px;
    width: auto;
  }

  .sections ul {
    display: flex;
    list-style: none;
    gap: 32px;
    padding: 0;
    margin: 0;
    font-weight: 400;
    font-family: "Roboto", sans-serif;

    li {
      display: flex;
      align-items: center;
      gap: 4px;

      a {
        text-decoration: none;
        font-size: 16px;
        color: #000;
        font-weight: 400;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .input {
    display: flex;
    padding: 12px 16px;

    align-items: center;
    border-radius: 62px;
    width: 100%;
    max-width: 577px;
    gap: 8px;
    background-color: #f0f0f0;

    img {
      width: 18px;
      height: 18px;
      order: 1;
    }

    input {
      border: none;
      background: transparent;
      outline: none;
      font-size: 14px;
      flex: 1;
      order: 2;
    }
  }

  .icons {
    display: flex;
    gap: 14px;

    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;

    .input {
      order: 3;
      width: 100%;
      max-width: 100%;
    }
  }
`;
export const MobileWrapper=styled.div``