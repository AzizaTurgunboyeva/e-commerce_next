import React from 'react'
import ProductsList from '../../app/Main/components/NewArrival'
import ReviewCard from '../../components/common/Review';
import ReviewSection from '../../app/Main/components/Reviews';

const Home = () => {
  return (
    <>
      <ProductsList />
      <ReviewSection/>
    </>
  );
}

export default Home