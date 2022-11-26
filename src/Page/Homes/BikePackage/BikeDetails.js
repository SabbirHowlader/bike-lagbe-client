import React from 'react';

const BikeDetails = ({bike}) => {
    const {name, discription, img, sell, rating} = bike
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="bike" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{discription}</p>
                <p>{sell} pcs</p>
                <p>Ratings: {rating}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">See All</button>
                </div>
            </div>
        </div>
    );
};

export default BikeDetails;