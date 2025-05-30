import styled from "styled-components";

export const ColorWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 5px;
  .color-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 37px;
    height: 37px;
    border-radius: 50%;
    border: 2px solid rgba($color: black, $alpha: 0.2);
  }
`;