import React from "react";
import ServicesImage from "../assets/service.png";

const Services = () => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-4 py-8">
      <div className="border border-gray-500 rounded-md p-4">
        <img src={ServicesImage} alt="" className="mx-auto" />
        <h2 className="text-4xl font-bold text-center mb-2">
            Our <span className="text-[#179800]">Services</span>
        </h2>
        <p className="text-center">
            we offer a wide range of services to meet your needs. from fresh produce to pantry staples, we've got you covered every day!
        </p>
      </div>
      <div className="border border-gray-500 rounded-md p-4">
        <img src={ServicesImage} alt="" className="mx-auto" />
        <h2 className="text-4xl font-bold text-center mb-2">
            Our <span className="text-[#179800]">Services</span>
        </h2>
        <p className="text-center">
            we offer a wide range of services to meet your needs. from fresh produce to pantry staples, we've got you covered every day!
        </p>
      </div>
      <div className="border border-gray-500 rounded-md p-4">
        <img src={ServicesImage} alt="" className="mx-auto" />
        <h2 className="text-4xl font-bold text-center mb-2">
            Our <span className="text-[#179800]">Services</span>
        </h2>
        <p className="text-center">
            we offer a wide range of services to meet your needs. from fresh produce to pantry staples, we've got you covered every day!
        </p>
      </div>
    </div>
  );
};

export default Services;
