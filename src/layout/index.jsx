import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
    <Navbar/>
      <Header />

      {<Outlet/>}
      <Footer />
    </>
  );
}

export default Layout