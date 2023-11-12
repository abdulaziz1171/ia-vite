import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-7xl">
 Welcome to IaLocker        </h1> <br />
        <p className=" text-backgroundColor text-2xl">
        Now you can easily and safely reserve your Locker from any Where and any Time with  <b> "IaLocker"</b>
        </p>
        <div className=" lg:pl-44">
          <Button title="Get a Locker"  />
        </div>
      </div>
    </div>
  );
};

export default Home;