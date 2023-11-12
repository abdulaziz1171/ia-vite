import React from "react";
import img1 from "../assets/img/img1.jpg";
import LockerCard from "../layouts/LockerCard";

const LockerTY = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        our lockers
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <LockerCard img={img1} title="locker 01" />
        <LockerCard img={img1} title="locker 02" />
        <LockerCard img={img1} title="locker 03" />
        <LockerCard img={img1} title="locker 04" />
        <LockerCard img={img1} title="locker 05" />
        <LockerCard img={img1} title="locker 05" />
      </div>
    </div>
  );
};

export default LockerTY;