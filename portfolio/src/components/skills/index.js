import React from 'react';
import ProgressBar from '../progress-bar';

const Skills = () => {
    const skills = [
        {
            id:1,
            name:'Html&Css',
            percentage:45
        },
        {
            id:2,
            name:'ReactJS',
            percentage:65
        },
        {
            id:3,
            name:'ReactJS',
            percentage:65
        },
        {
            id:4,
            name:'ReactJS',
            percentage:65
        },
        {
            id:4,
            name:'ReactJS',
            percentage:65
        }
    ]
  return (
    <div className='grid grid-cols-4 gap-4 m-40'>
      {skills.map((skill) => (
        <div key={skill.id} className='mb-4'>
          <div className='flex justify-between mb-1'>
            <span className='text-base font-medium text-blue-700'>
              {skill.name}
            </span>
            <span className='text-sm font-medium text-blue-700'>
              {skill.percentage}%
            </span>
          </div>
          <ProgressBar percentage={skill.percentage} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
