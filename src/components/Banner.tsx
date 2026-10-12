import React from 'react';
import BannerImage from "../assets/Hero Section 1.png"

const Banner = () => {
    return (
        <div className='text-center container mx-auto'>
            <div className='max-w-2xl mx-auto py-8'>
                <h2 className='text-2xl font-bold text-center mb-2'>Freshness <span className='text-[#179800]'>You Can Count</span> On, Prices You'll Love!</h2>
                <p className='text-center'>Shop your daily essentials at unbeatable places. From fresh produce to pantry staples, we've got you convered every day!</p>
            </div>
            <img src={BannerImage} alt="" className='mx-auto max-w-[450px]' />
        </div>
    );
};

export default Banner;