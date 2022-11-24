import React from 'react';
import banner from '../../../Assest/banner/banner img.jpg'

const Banner = () => {
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 mx auto'>
                    <h1 className="text-5xl font-bold">Old Exclusive Bike here!</h1>
                    <p className="py-6">Here you can get all type old type bike. Exclusive and premium old bike collection in the bigget website BIKE LAGBE. You can easyly buy used bike with your nearest location.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
            </div>
        </div>
    );
};

export default Banner;