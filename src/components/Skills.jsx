import React from 'react';
import HTML from '../assets/Images/HTML.png';
import CL from '../assets/Images/C++.png';
import CSS from '../assets/Images/CSS.png';
import JS from '../assets/Images/Javascript.png';
import Reactjs from '../assets/Images/React Js.png';
import TailwindCss from '../assets/Images/Tailwind Css.png'
import Node from '../assets/Images/Node JS.png';
import Python from '../assets/Images/Python.png';
import C from '../assets/Images/C.png'
const skills = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', logo: HTML },
      { name: 'CSS', logo: CSS },
      { name: 'JavaScript', logo: JS  },
      { name: 'React JS', logo: Reactjs  },
      { name: 'Tailwind CSS', logo: TailwindCss },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node JS', logo: Node },
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C++', logo: CL },
      { name: 'C', logo: C },
      { name: 'Python', logo: Python },
      { name: 'JavaScript', logo: JS },
    ],
  },
];

const SkillComponent = () => {
  return (
    <div
      name="Skills"
      className="container max-w-screen-xl mx-auto mt-20 px-10 pt-30 h-screen" // Add padding-top here
      id="Skills"
    >
      <h1 className="w-full text-2xl mb-5 font-bold text-center">Skills</h1>
      {skills.map((skillCategory, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-bold mb-4">{skillCategory.category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {skillCategory.skills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center border-2 border-slate-800 rounded-2xl">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-16 h-16 mb-2"
                />
                <p className="text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillComponent;

