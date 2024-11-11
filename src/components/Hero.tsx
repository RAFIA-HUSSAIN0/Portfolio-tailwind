import React from 'react';
import Link from 'next/link';




const Hero = () => {
    return (
        <div
            id="hero"
            className='min-h-screen bg-no-repeat bg-left lg:bg-[15%] bg-cover'
            style={{
                backgroundImage: "url('/images/logo.png')",
                backgroundSize: "35%",
                borderRadius: '20px', // Rounds the corners of the image
                overflow: 'hidden', // Ensures the background image is clipped to the rounded corners
                paddingLeft: '20px' // Adds a gap from the left
            }}>


            <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
                <div className='hidden lg:block'></div>
                <div className='text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center '>
                    <p data-aos="zoom-in-up">I am Rafia Hussain </p>


                </div>
            </div>

        </div>


    );

}

export default Hero;
