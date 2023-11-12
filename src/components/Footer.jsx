import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">IaLockers</h1>
          <p className=" text-sm">
          in easily way and safety way reserve your Locker from any Where and any Time with Ialockers
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Lockers
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              About
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Menu
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Our Lockers
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Best Lockers
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              411100358@s.mu.edu.sa <br />
              411103909@s.mu.edu.sa 

            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +966 500000000
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor"> iaLocker group</span> 
            
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;