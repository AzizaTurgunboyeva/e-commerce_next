import { ButtonWrapper } from "./Buttonwrapper.styled";
import { btnSizes, btnTypes } from "./constant";

const Button = (props) => {
  const {
    type = btnTypes.primary,
    size = btnSizes.md,
    children,
    px = 12,
  } = props;
  return (
    <ButtonWrapper
      className={`button btn-${type} btn-${size}`}
      style={{ padding: `0 ${px}px 0 ${px}px` }}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
