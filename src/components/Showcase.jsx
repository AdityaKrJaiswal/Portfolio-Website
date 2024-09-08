// src/components/Showcase.js
import React from 'react';
import Card from './Card';
// import anime from '../assets/Images/Anime.jpg';

const projects = [
  {
    title: 'Anime T-shirt',
    description: 'This project is based on the anime commerce website',
    image:'https://img.freepik.com/free-photo/anime-style-portrait-traditional-japanese-samurai-character_23-2151499070.jpg?t=st=1725773747~exp=1725777347~hmac=d507716fefe44cfbb1109bd9133eaf9628c5940342a4b36f2c49305fe9c8daa8&w=826',
    link: 'https://github.com/AdityaKrJaiswal/Anime-T-Shirts-Website',
  },
  {
    title: 'Simon Games',
    description: 'Simon Games is developed with the help of html,css and javascript.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Simon_Electronic_Game.jpg/330px-Simon_Electronic_Game.jpg',
    link: 'https://github.com/AdityaKrJaiswal/Simon-Games.git',
  },
  {
    title: 'Branding Page',
    description: 'Making a branding page using react js.',
    image: 'https://www.betterup.com/hs-fs/hubfs/Man%20has%20overwork%20and%20sitting%20with%20laptop%20and%20table%20lamp.%20Mental%20work%20with%20paper.%20Empty%20office.jpg?width=1446&name=Man%20has%20overwork%20and%20sitting%20with%20laptop%20and%20table%20lamp.%20Mental%20work%20with%20paper.%20Empty%20office.jpg',
    link: 'https://github.com/AdityaKrJaiswal/React.git',
  },
];

const Showcase = () => {
  return (
    <div name="Projects" className="flex flex-wrap justify-center mt-20 pt-10 container max-w-screen-xl mx-auto ">
   
     <h1 className='w-full text-2xl mb-5 font-bold text-center'>Projects</h1>

      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Showcase;
