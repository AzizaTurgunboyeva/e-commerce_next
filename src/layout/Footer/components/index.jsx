import React from 'react'
import { StayUptoWrapper } from './StayUp.styled'
import { TfiEmail } from "react-icons/tfi";
import Button from '../../../components/Button';
import { btnSizes, btnTypes } from '../../../components/Button/constant';

const FooterDetail = () => {
  return (
    <StayUptoWrapper>
      <div className="left">
        <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
      </div>
      <div className="right">
        <input type="email" placeholder='Enter your email address'/>
        <TfiEmail />
        <Button type={btnTypes.white} size={btnSizes.lg} px={12} className="btn">Subscribe to Newsletter</Button>
      </div>
    </StayUptoWrapper>
  );
}

export default FooterDetail