import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="p-10 my-10 bg-base-300 ">
            <div className='footer flex justify-around'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Bike Design</Link>
                    <Link to='/' className="link link-hover">Logo art</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Service</Link>
                    <Link to='/' className="link link-hover">Blog</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Service policy</Link>
                </div>

            </div>
            <div className='text-center mt-10'>
                <p className='font-bold'>Copyright © 2022 - All right reserved by Bike Lagbe Ltd.</p>
            </div>
        </footer>
    );
};

export default Footer;