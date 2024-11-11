import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 ap-20 items-center' data-aos="zoom-in-up">
        <div>
          <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up">Technolgies i work with</h2>
          <p className='text-gray-500 pt-2'>As a web developer, I work with a wide range of technologies to build dynamic and responsive websites. My expertise includes front-end technologies like HTML, CSS, and JavaScript, along with frameworks such as React and Next.js for creating interactive user interfaces. I also work with Tailwind CSS for utility-first design, ensuring fast and scalable styling. Additionally, I am familiar with using TypeScript for type safety and JavaScript-based tools like Node.js for backend development. I focus on responsive design and ensuring that websites work seamlessly across all devices, providing users with an optimal experience. I am also skilled in integrating various APIs and using Git for version control to manage projects efficiently.

          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl '>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">Html</h2>
              <h2 data-aos="zoom-in-up">Css</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Talwind</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
