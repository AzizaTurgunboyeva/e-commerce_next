import styled from "styled-components";

export const BrandsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 70px;
`;

export const BrandName = styled.p`
  font-size: 50px;
  margin: 0;
  font-family: ${(props) => props.fontFamily};
`;
