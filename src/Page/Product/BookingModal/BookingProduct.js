import React from 'react';

const BookingProduct = ({ product, setProduct }) => {
    const { name, oldPrice,  SellerName } = product;

    const handleBooking =event => {
        event.preventDefault();
        const form = event.target;
        const seller = form.seller.value;
        const price = form.price.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;


        const booking ={
            sellerName: seller,
            oldPrice: price,
            buyerName: name,
            buyerEmail: email,
            buyerPhone: phone
            
        }

        console.log(booking);
        setProduct(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative" >
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10' align="center">

                        <span className="label-text font-bold">Seller Name : </span>
                        <input name="seller" type="text" align="center" disabled value={SellerName} className="input input-bordered w-full max-w-xs mx-auto rounded-lg" />

                        <span className="label-text font-bold">Selling Price : </span>
                        <input name="price" type="text" disabled value={oldPrice} className="input input-bordered mx-auto w-full max-w-xs rounded-lg" />
                           
                        <span className="label-text font-bold">Buyer Name : </span>
                        <input name='name' type="text" placeholder='Your name' className="input input-bordered w-full max-w-xs mx-auto rounded-lg" />

                        <span className="label-text font-bold">Buer Email : </span>
                        <input name='email' type="text" placeholder='Your email' className="input input-bordered w-full max-w-xs mx-auto rounded-lg" />
                        
                        <span className="label-text font-bold">Buyer Phone : </span>
                        <input name='phone' type="text" placeholder='Your phone' className="input input-bordered w-full max-w-xs mx-auto rounded-lg" />
                        <br />
                        <input type="submit" className='btn btn-success w-full max-w-xs mx-auto rounded-lg' value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingProduct;