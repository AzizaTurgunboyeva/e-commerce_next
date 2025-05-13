import styled from "styled-components";

export const SizeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  .size-item {
    padding: "10px 20px";
    margin: "5px";
    border-radius: "62px";
    cursor: "pointer";
    gap: "8px";
    display: "inline-block";
    text-align: "center";
  }
`;
