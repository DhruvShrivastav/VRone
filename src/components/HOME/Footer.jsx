// Footer.js
import React from 'react';
import logof from "../../assets/logo.png"
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" mt-3 mx-1 rounded-xl bg-sky-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="flex items-center space-x-4 font-semibold">
            <img className="h-10"src={logof} alt="logo" />
            <p>Making the world a better place through constructing elegant hierarchies.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white"><FaFacebookF /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaGithub /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaYoutube /></a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Marketing</a></li>
              <li><a href="#" className="hover:underline">Maintanence</a></li>
              <li><a href="#" className="hover:underline">Design</a></li>
              <li><a href="#" className="hover:underline">Delivered</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Manfacture</a></li>
              <li><a href="#" className="hover:underline">Quality</a></li>
              <li><a href="#" className="hover:underline">Guides</a></li>
              <li><a href="#" className="hover:underline">API Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:underline">Work with us</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-8">Get in Touch</h3>
            <p className='font-semibold mb-2'>
            Registered Office – Plot No. 88  Dayma Road , 
            Near Ram Mandir , Kherwadi , Bandra East , Mumbai – 51
            <p className='font-semibold mb-2 mt-4'>
            Warehouse – Unit No. – 1 , Krishna Industrial Estate , Near Green Hills Resort ,    
            Wakan pada , Nallasopara (E), Thane 401208’
            </p>
 
            </p>
          </div>
        </div>
    
        <div className="text-center text-gray-500">
          © 2024 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
