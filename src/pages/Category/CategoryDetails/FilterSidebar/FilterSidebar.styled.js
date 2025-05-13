import styled from "styled-components";

export const FilterSidebarWrapper = styled.div`
  width: 295px;
  border: 1px solid #00000010;
  padding: 20px 24px;
  border-radius: 20px;
  font-family: "Roboto" sans-serif;

  .filter-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
  }
  .hr-line {
    width: 100%;
    height: 1px;
    margin-bottom: 24px;
    background-color: #00000010;
  }

  .filter-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-weight: 400px;
    color: #00000099;
  }

  .accordion {
    margin-bottom: 24px;

    .accordion-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        margin-top: 0;
        /* margin-bottom: 4px; */
        font-size: 20px;
        font-family: "Roboto" sans-serif;
        font-weight: 700;
      }
    }
    .open {
      margin-top: 20px;
    }
  }

  .arrow {
    transform: rotate(0);
    transition: 0.3s;
  }

  .arrow-top {
    transform: rotate(-90deg);
  }

  .arrow-bottom {
    transform: rotate(90deg);
  }

  .accordion-body {
    height: 70px;
    transition: 0.3s;
    overflow: hidden;
  }

  .color-accordion {
    height: 100px;
  }
  .accordion-size {
    height: auto;
    transition: 0.3s;
    overflow: hidden;
  }

  .accordion-body.hide {
    height: 0;
  }

  .hola * {
    background-color: #000 !important;
  }

  .hola {
    margin-top: 20px;
  }
`;
