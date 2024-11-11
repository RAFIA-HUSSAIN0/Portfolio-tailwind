import Card from '@/components/Card';
import Heading from '@/components/Heading';
import { title } from 'node:process'

import React from 'react';

const projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      {/* Add more content here as needed */}
    </div>
  );
};


const data = [
  {
    id: 0,
    title: " Countdown Timer",
    desc: "A React and TypeScript based app for managing and organizing your tasks efficiently.",
    img: "/images/Screenshot (29).png",
    tags: ["React", "Node", "CSS", "Typescript"],
  },
  {
    id: 1,
    title: "Note Tacking App",
    desc: "A React and TypeScript based app for managing and organizing your tasks efficiently.",
    img: "/images/Screenshot (30).png",
    tags: ["React", "Node", "CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Master Card",
    desc: "A React and TypeScript based app for managing and organizing your tasks efficiently.",
    img: "/images/Screenshot (34).png",
    tags: ["React", "Node", "CSS", "Typescript"],
  },
  {
    id: 3,
    title: "Guess The Number",
    desc: "A React and TypeScript based app for managing and organizing your task efficiently. ",
    img: "/images/Screenshot (31).png",
    tags: ["React", "Node", "CSS", "Typescript"],
  },
  {
    id: 4,
    title: "Static Interactive Resume",
    desc: "A React and TypeScript based app for managing and organizing your task efficiently.",
    img: "/images/Screenshot (28).png",

    tags: ["React", "Node", "CSS", "Typescript"],

  },
  {
    id: 5,
    title: "University Manegment System",
    desc: "My first Website using HTML CSS and Typescript and fully Responsive Website",
    img: "/images/Screenshot (33).png",
    tags: ["Node", " HTML", "CSS", "Typescript"],

  },
];




export const Projects = () => {
  return (
    <div id="projects" className='container pt-32' >
      <Heading title='My projects' />
      <div className='grid gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
          key={el.id}
          title={el.title}
          desc={el.desc}
          img={el.img}
          tags={el.tags}

        />))}
      </div>

    </div>
  )
}

export default Projects
