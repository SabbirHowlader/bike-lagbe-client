import React from 'react';

const BikeDetails = ({bike}) => {
    const {name, img, sell, rating} = bike
    return (
        <div className="card bg-base-200 shadow-xl w-72 mx-auto">
            <figure className="px-2 pt-2">
                <img src={img} alt="bike" className="rounded-xl"  style={{height:180, width: 350}}/>
            </figure>
            <div className="card-body items-center text-center gap-1">
                <h2 className="card-title font-bold">{name}</h2>
                <p>Sell: {sell}pcs</p>
                <p className='text-yellow-500'>Ratings: {rating}</p>
                <div className="card-actions mt-6">
                    <button className="btn btn-primary">See All</button>
                </div>
            </div>
        </div>
    );
};

export default BikeDetails;