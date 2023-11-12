import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img"  />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
         What is IaLocker?
        </h1>
        <br />
        <p>
        iaLocker is a simple website with an Arduino-based locker system for college students.
         It helps alleviate the burden of heavy backpacks and promotes a secure and healthier lifestyle.
          Students can reserve lockers using unique codes, ensuring their belongings are stored securel
        </p><br /><br />
        The objective of iaLocker project is to developing an online locker reservation system designed to simplify the process of reserving and managing lockers.
         the goal is to create a secure, user-friendly, and efficient system that streamlines the locker reservation process, reduces wait times, and automates locker assignment.
        <p>
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;