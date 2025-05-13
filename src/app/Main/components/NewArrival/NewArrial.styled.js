import styled from "styled-components";

export const ProductsListWrapper = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-family: "Roboto", sans-serif;
    font-size: 48px;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 55px;
  }

  .view-all {
    margin-top: 40px;

    button {
      width: 218px;
      padding: 12px 0;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 62px;
      cursor: pointer;
      /* transition: background 0.2s; */

      &:hover {
        background-color: #f5f5f5;
        color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
`;
