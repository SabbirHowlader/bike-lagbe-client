import React, { useEffect, useState } from 'react';
import Products from './Products';

const Product = () => {
   const [productDetails, setProductDEtails] = useState([]);
   
   useEffect(() => {
         fetch('http://localhost:5000/simpleBike')
         .then(res => res.json())
         .then(data =>setProductDEtails(data))
   }, []);
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                {
                    productDetails.map(product => <Products
                    key={product.id}
                    product={product}
                    ></Products>)
                }
            </div>
        </div>
    );
};

export default Product;