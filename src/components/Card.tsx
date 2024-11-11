import React from 'react';
import Image from 'next/image';

interface PropTypes {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<PropTypes> = ({ title, desc, img, tags }) => {
    return (
        <div id='Card' className='border border-accent w-[300px] sm:w-[350px]' data-aos="zoom-in-up">
            <div>
                {/* Ensure image path is correct and layout is responsive */}
                <Image
                    className='w-[300px] sm:w-[350px] h-auto'
                    src={img}  // Image path from props (like "/images/Screenshot (28).png")
                    alt={title}
                    width={350}
                    height={350}
                    layout="responsive" // Makes the image responsive
                />
            </div>
            <div className='p-4 space-y-4'>
                {/* Title */}
                <div className='text-4xl font-extralight'>{title}</div>
                {/* Description */}
                <div>{desc}</div>
                {/* Tags */}
                <div>
                    {tags.map((el) => (
                        <div className='tags' key={el}>
                            {el}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
