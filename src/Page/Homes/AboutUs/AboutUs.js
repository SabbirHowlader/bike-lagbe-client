import React from 'react';
import bike from '../../../Assest/bike/Old Bike.jfif'

const AboutUs = () => {
    return (
        <div className='my-20'>
            <h2 className='text-5xl font-bold text-primary text-center mb-6'>About Us</h2>
            <div className="hero ">

                <div className="hero-content flex-col gap-10 lg:flex-row">
                    <img src={bike} className="h-96 rounded-lg shadow-2xl mx-auto" alt='' />
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Exceptional Bike Collection</h1>
                        <p className="py-6">A motorcycle, often called a motorbike. Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport (including racing), and off-road riding. Motorcycling is riding a motorcycle and being involved in other related social activity such as joining a motorcycle club and attending motorcycle rallies.
                            <br />
                            <br />
                            We start to sell use popular fresh conditons bike. In 2002 our bike sell journey was Started. We provide good service with fresh bike. all of conditiions are here. You can Easyly purches Our bike With your Sweetable place. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;