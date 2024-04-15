import React, { useEffect, useState } from 'react';
import ProgressBar from '../progress-bar';

const Skills = () => {
    const [isVisible,setIsVisible] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            const currentOffset = window.pageYOffset;
            const skillSection = document.getElementById('skills')
    
            if(skillSection){
                const sectionTop = skillSection.offsetTop;
                const sectionHeight = skillSection.offsetHeight;
    
                if(currentOffset>sectionTop-window.innerHeight + sectionHeight/3){
                    setIsVisible(true)
                }
            }
        }
        window.addEventListener('scroll',handleScroll);
        return()=>{
            window.removeEventListener('scroll', handleScroll);
        }

    },[])
    const skills = [
        {
            id: 1,
            name: 'Html&CSS',
            percentage: 90
        },
        {
            id: 2,
            name: 'JavaScript',
            percentage: 80
        },
        {
            id: 3,
            name: 'ReactJS',
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
        </div>

    );
};
export default Skills;
