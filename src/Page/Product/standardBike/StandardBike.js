import React, { useEffect, useState } from 'react';
import StandardBikes from './StandardBikes';

const StandardBike = () => {
    const [standardBikeDetails, setstandardBikeDetails] = useState([]);

    useEffect(() => {
              fetch('https://bike-lagbe-server.vercel.app/standardBike')
              .then(res => res.json())
              .then(data =>setstandardBikeDetails(data))
    }, []);
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                {
                    standardBikeDetails?.map(products=> <StandardBikes
                    key={products.id}
                    products={products}
                    ></StandardBikes>)
                }
            </div>
        </div>
    );
};

export default StandardBike;