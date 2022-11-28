import React from 'react';

const Products = ({ product }) => {
    const { name, location, oldPrice, orginalPrice, useYear, time, img, SellerName} = product;
    return (
        <div className="card bg-base-100 shadow-xl w-80 mx-auto">
            <figure className="px-2 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" style={{height:200, width:350}} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold ">{name}</h2>
                <h5 className='font-bold'>SellerName: {SellerName}</h5>
                <p>Old Price: {oldPrice} TK</p>
                <p>Orginal Price: {orginalPrice} TK</p>
                <p>Used Time: {useYear}</p>
                <p>Update Time: {time} Min</p>
                <p>Location: {location}</p>

                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Products;