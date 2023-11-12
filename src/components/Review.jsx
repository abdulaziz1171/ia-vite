import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";


const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
         Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Abdullah salman" />
        <ReviewCard img={img1} name="Fahad Salm" />
        <ReviewCard img={img1} name="norah turki" />
      </div>
    </div>
  );
};

export default Review;