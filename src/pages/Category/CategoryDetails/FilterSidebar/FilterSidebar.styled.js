import styled from "styled-components";

export const Category = styled.div`
  display: flex;
  gap: 20px;
`;

export const FilterSidebarWrapper = styled.div`
  width: 300px;
  border: 1px solid #00000030;
  border-radius: 20px;
  padding: 20px 24px;
`;

export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
`;

export const HrLineFilter = styled.div`
  width: 100%;
  height: 1px;
  margin: 24px 0;
  background-color: #0000001a;
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const AccordionSection = styled.div`
  margin-bottom: 20px;
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  p {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }
`;

export const AccordionBody = styled.div`
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  height: ${({ open, maxHeight }) => (open ? maxHeight : 0)};
`;

export const Arrow = styled.div`
  transform: ${({ open }) => (open ? "rotate(-90deg)" : "rotate(90deg)")};
  transition: transform 0.3s ease-in-out;
`;

export const ColorAccordionBody = styled(AccordionBody)`
  max-height: 100px;
`;

export const SizeAccordionBody = styled(AccordionBody)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  max-height: 270px;
`;

export const DressStyleAccordionBody = styled(AccordionBody)`
  max-height: 150px;
`;

export const SizeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: ${({ active }) => (active ? "#fff" : "#00000099")};
  height: 42px;
  width: 100%;
  border-radius: 62px;
  background-color: ${({ active }) => (active ? "#000" : "#f0f0f0")};
`;

export const ApplyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: 62px;
  background-color: #000;
  color: #fff;
  font-weight: 500;
  margin-top: 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }

  p {
    margin: 0;
    color: #00000099;
    font-size: 16px;
  }
`;
