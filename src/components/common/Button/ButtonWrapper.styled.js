import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  border-radius: 62px;
  border: none;

  .btn-primary {
    background-color: black;
    color: white;
  }
  .btn-secondary {
    background-color: #f0f0f0;
    color: black;
  }
  .btn-white {
    background-color: white;
    color: black;
  }
  .btn-medium {
    height: 48px;
  }
  .btn-small {
    height: 42px;
  }
  .btn-large {
    height: 56px;
  }

  .button.btn-full {
    width: 100%;
  }
  .button.p-0 {
    padding: auto 12px;
  }
`;