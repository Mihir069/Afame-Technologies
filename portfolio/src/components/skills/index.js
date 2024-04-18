import React, { useEffect, useState } from 'react';
import ProgressBar from '../progress-bar';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentOffset = window.pageYOffset;
            const skillSection = document.getElementById('skills')

            if (skillSection) {
                const sectionTop = skillSection.offsetTop;
                const sectionHeight = skillSection.offsetHeight;

                if (currentOffset > sectionTop - window.innerHeight + sectionHeight / 3) {
                    setIsVisible(true)
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])
    const skills = [
        {
            id: 1,
            name: 'ReactJS',
            percentage: 90
        },
        {
            id: 2,
            name: 'JavaScript',
            percentage: 80
        },
        {
            id: 3,
            name: 'Html&CSS',
            percentage: 80
        },
        {
            id: 4,
            name: 'Express',
            percentage: 70
        },
        {
            id: 5,
            name: 'MySQL',
            percentage: 70
        },
        {
            id: 6,
            name: 'Python',
            percentage: 60
        },
        {
            id: 7,
            name: 'C++',
            percentage: 60
        },
        {
            id: 8,
            name: 'Java',
            percentage: 50
        }
    ]
    return (
        <div id='skills' className={` flex flex-col justify-center items-center `}>
            <div className={`text-center mt-10 text-5xl m-10 ${isVisible ? 'fade-in-out' : 'opacity-0'}`}>
                <h1>My Skills</h1>
            </div>
            <div className={`grid grid-cols-2 gap-4 w-5/6 `}>
                {skills.map((skill) => (
                    <div key={skill.id} className={`mb-4 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
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
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-11/12 mx-auto justify-items-center my-10'>
                <div className={`max-w-md bg-white divide-y divide-gray-200 p-4 rounded-md shadow-md ${isVisible ? 'fade-in-size' : 'opacity-0'}`}>
                    <h1 className='text-lg font-bold mb-4'>Education</h1>
                    <ul className='divide-y divide-gray-200'>
                        <li className='py-2'>
                            <div className='flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse'>
                                <div className='flex-shrink-0 sm:text-lg text-gray-800 font-medium'>
                                    BSc H Computer Science
                                </div>
                                <div className='flex-1 min-w-0'>
                                    <p className='text-sm text-gray-600 truncate'>
                                        University of Delhi
                                    </p>
                                    <p className='text-sm text-gray-500'>
                                        2021-2024
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={`max-w-md bg-white divide-y divide-gray-200 p-4 rounded-md shadow-md ${isVisible ? 'fade-in-size' : 'opacity-0'}`}>
                    <h1 className='text-lg font-bold mb-4'>Experience</h1>
                    <ul className='divide-y divide-gray-200'>
                        <li className='py-2'>
                            <div className='flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse'>
                                <div className='flex-shrink-0 sm:text-lg text-gray-800 font-medium'>
                                    Web Development Internship
                                </div>
                                <div className='flex-1 min-w-0'>
                                    <p className='text-sm text-gray-600 truncate'>
                                        Under the SkillForge
                                    </p>
                                    <p className='text-sm text-gray-500'>
                                        Feb 2024 - Mar 2024
                                    </p>
                                </div>
                            </div>
                        </li>
                       
                    </ul>
                </div>
            </div>
            <hr className={`w-1/2 h-1 mx-auto  bg-blue-900 border-0 rounded   ${isVisible ? 'fade-in-up' : 'opacity-0'}`} />
        </div>

    );
};
export default Skills;
