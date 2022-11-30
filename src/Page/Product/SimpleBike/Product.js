import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hook/useTitle';
import BookingProduct from '../BookingModal/BookingProduct';
import Products from './Products';

const Product = () => {
   const [productDetails, setProductDEtails] = useState([]);
   const [product, setProduct] = useState(null)
   useTitle('Product')

   
   useEffect(() => {
         fetch('https://bike-lagbe-server.vercel.app/simpleBike')
         .then(res => res.json())
         .then(data =>setProductDEtails(data))
   }, []);
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                {
                    productDetails.map(product => <Products
                    key={product._id}
                    product={product}
                    setProduct={setProduct}
                    ></Products>)
                }
            </div>
            {
                product &&
                <BookingProduct
               product={product}
               setProduct={setProduct}
            ></BookingProduct>}
        </div>
    );
};

export default Product;