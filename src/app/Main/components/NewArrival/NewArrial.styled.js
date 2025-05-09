import styled from "styled-components";

export const ProductsListWrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
   gap: 20px;
  padding: 20px; 
`;
