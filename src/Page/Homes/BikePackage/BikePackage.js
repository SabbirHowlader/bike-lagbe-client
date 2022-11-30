import React from 'react';
import { Link } from 'react-router-dom';

const BikePackage = () => {

    return (
        <div > 
            <h2 className='font-bold text-center text-5xl text-success'>Our Product</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-2 pt-2">
                        <img src="https://i.pinimg.com/originals/b1/0a/58/b10a58650281c867c5153a2049d920d7.jpg" alt="Shoes" className="rounded-xl"  style={{height:200, width:350}}/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold mb-6 text-3xl">Used Simple Bike</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary rounded-lg"><Link to='/product'>See All</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-2 pt-2">
                        <img src="https://i.pinimg.com/originals/dd/dc/7d/dddc7dae7ab2e4875618c743ed387cb2.jpg" alt="Shoes" className="rounded-xl" style={{height:200, width:350}} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold mb-6 text-3xl">Used Standard Bike</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary rounded-lg"><Link to='/product'>See All</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-2 pt-2">
                        <img src="https://img.freepik.com/premium-photo/old-bike-isolated-background-3d-rendering-illustration_494250-648.jpg?w=2000" alt="Shoes" className="rounded-xl" style={{height:200, width:350}}/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold mb-6 text-3xl">Used Premium Bike</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary rounded-lg"><Link to='/product'>See All</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikePackage;