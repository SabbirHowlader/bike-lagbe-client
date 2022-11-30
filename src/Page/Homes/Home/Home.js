import React from 'react';
import useTitle from '../../../Hook/useTitle';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import BikePackage from '../BikePackage/BikePackage';

const Home = () => {
  useTitle('Home')
    return (
        <div>
          <Banner></Banner>
          {/* <AddBanner></AddBanner> */}
          <BikePackage></BikePackage>
          <AboutUs></AboutUs>
        </div>
    );
};

export default Home;<h2>Home</h2>