// src/components/common/SignUp/SignUpAd.jsx
import React, { useState } from "react";
import { SignUpWrapper } from "./SignUp.styled";
import { IoMdClose } from "react-icons/io";

const SignUpAd = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClearClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <SignUpWrapper>
      <div className="title">
        <p>
          Sign up and get 20% off your first order. <span>Sign Up Now</span>
        </p>
        <div
          aria-label="Close sign up promo"
          className="close-btn"
          onClick={handleClearClick}
        >
          <IoMdClose size={20} />
        </div>
      </div>
    </SignUpWrapper>
  );
};

export default SignUpAd;
