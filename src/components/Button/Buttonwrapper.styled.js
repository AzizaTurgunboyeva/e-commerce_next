import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  border-radius: 62px;
  border: none;
  cursor: pointer;

  /* Primary button styles */
  &.btn-primary {
    background-color: black;
    color: white;
  }

  /* Secondary button styles */
  &.btn-secondary {
    background-color: #f0f0f0;
    color: black;
  }

  /* White button styles */
  &.btn-white {
    background-color: white;
    color: black;
    border: 1px solid #e0e0e0;
  }

  /* Size variations */
  &.btn-medium {
    height: 48px;
    padding: 0 24px;
  }

  &.btn-small {
    height: 42px;
    padding: 0 16px;
    font-size: 0.9em;
  }

  &.btn-large {
    height: 56px;
    padding: 0 32px;
    font-size: 1.1em;
  }

  /* Full width modifier */
  &.btn-full {
    width: 100%;
  }

  /* Optional padding modifier */
  &.p-0 {
    padding: 0 12px;
  }
`;
