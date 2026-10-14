import React from "react";
import ServicesImage from "../assets/service.png";

const Services = () => {
  return (
    <div className="container mx-auto my-[80px]">
      <h2 className="text-3xl font-bold mb-4 text-[#179800]">Our Services</h2>
      <div className=" grid grid-cols-3 gap-4 py-8 ">
        <div className="shadow-2xl rounded-md p-4">
          <img src={ServicesImage} alt="" className="mx-auto" />
          <h2 className="text-4xl font-bold text-center mb-2">
            Our <span className="text-[#179800]">Services</span>
          </h2>
          <p className="text-center">
            we offer a wide range of services to meet your needs. from fresh
            produce to pantry staples, we've got you covered every day!
          </p>
        </div>
        <div className="shadow-2xl rounded-md p-4">
          <img src={ServicesImage} alt="" className="mx-auto" />
          <h2 className="text-4xl font-bold text-center mb-2">
            Our <span className="text-[#179800]">Services</span>
          </h2>
          <p className="text-center">
            we offer a wide range of services to meet your needs. from fresh
            produce to pantry staples, we've got you covered every day!
          </p>
        </div>
        <div className="shadow-2xl rounded-md p-4">
          <img src={ServicesImage} alt="" className="mx-auto" />
          <h2 className="text-4xl font-bold text-center mb-2">
            Our <span className="text-[#179800]">Services</span>
          </h2>
          <p className="text-center">
            we offer a wide range of services to meet your needs. from fresh
            produce to pantry staples, we've got you covered every day!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
