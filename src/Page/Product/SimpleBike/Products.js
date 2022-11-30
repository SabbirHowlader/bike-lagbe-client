import React from 'react';

const Products = ({ product, setProduct }) => {
    const { name, location, oldPrice, orginalPrice, useYear, time, img, SellerName } = product;
    return (
        <div className="card bg-base-100 shadow-xl w-80 mx-auto">
            <figure className="px-2 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" style={{ height: 200, width: 350 }} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-3xl">{name}</h2>
                <div className='text-start leading-10'>
                    <h5 className='font-bold text-green-600 '>SellerName: {SellerName}</h5>
                    <p>New Price: {orginalPrice} TK</p>
                    <p className='font-bold  text-green-600 '>Present Price: {oldPrice} TK</p>
                    <p>Used Time: {useYear} Years</p>
                    <p>Update Time: {time} Min</p>
                    <p>Location: {location}</p>
                </div>
                <div className="card-actions">
                    <label htmlFor="booking-modal" className="btn btn-primary rounded-lg"
                    onClick={() => setProduct(product)}>Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default Products;