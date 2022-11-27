import React from 'react';
import BikeDetails from './BikeDetails';

const BikePackage = () => {
    const bikePackage =
        [
            {
                "id": "1",
                "discription": "We Collect old simple bike and sell our Customer in low price.",
                "name": "Old Simple Bike",
                "rating": 4.8,
                "sell": 30,
                "img": "https://i.pinimg.com/originals/b1/0a/58/b10a58650281c867c5153a2049d920d7.jpg"
            },
            {
                "id": "2",
                "discription": "You get here all old standard bike.",
                "name": "Old Standard Bike",
                "rating": 4.9,
                "sell": 25,
                "img": "https://i.pinimg.com/originals/dd/dc/7d/dddc7dae7ab2e4875618c743ed387cb2.jpg"
            },
            {
                "id": "3",
                "discription": "premium and good quality old bike collection",
                "name": "Old Premium Bike",
                "rating": 5.00,
                "sell": 45,
                "img": "https://img.freepik.com/premium-photo/old-bike-isolated-background-3d-rendering-illustration_494250-648.jpg?w=2000"
            }
        ]

    return (
        <div className='my-10'>
            <div>
                <h3 className='text-4xl font-bold text-success text-center mb-10'>Our Package</h3>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                {
                    bikePackage.map(bike => <BikeDetails
                     key={bike.id}
                     bike={bike}
                    ></BikeDetails>)
                }
            </div>
        </div>
    );
};

export default BikePackage;