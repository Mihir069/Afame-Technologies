import React, { useState, useEffect } from 'react';
import "../../style.css";
const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentOffset = window.pageYOffset;
            const aboutMeSection = document.getElementById('aboutMe');

            if (aboutMeSection) {
                const sectionTop = aboutMeSection.offsetTop;
                const sectionHeight = aboutMeSection.offsetHeight;

                if (currentOffset > sectionTop - window.innerHeight + sectionHeight / 2) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            id="aboutMe"
            className='mt-40 mb-10 flex justify-center'>
            <div className="flex flex-row gap-32">
                <div className={`shadow-2xl shadow-gray-900 border  ${isVisible ? 'fade-in-right' : 'opacity-0'}`}>
                    <img
                        src="./svg/myimg.png"
                        alt="my-img"
                        className="h-80 w-72"
                    />
                </div>
                <div className={`w-96 ${isVisible ? 'fade-in-left' : 'opacity-0'}`}>
                    <h1 className="text-3xl font-bold">Mihir Kumar Sah</h1>
                    <h2 className="text-xl text-[#38B6FF] mb-4">Web Developer</h2>
                    <p className="text-gray-800">
                        I'm a passionate beginner web developer, eager to build innovative and user-friendly websites while continuously expanding my skills.
                    </p>
                    <div className="mt-4">
                        <ul className="list-none text-gray-700">
                            <li><span className='font-bold'>From:</span> Delhi, India</li>
                            <li><span className='font-bold'>Lives in:</span> Delhi, India</li>
                            <li><span className='font-bold'>Age:</span> 20</li>
                            <li><span className='font-bold'>Gender:</span> Male</li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <a href="./svg/my-Resume.pdf" download="my-Resume.pdf" className="bg-[#38B6FF] hover:bg-[#3867ff] text-white font-bold py-2 px-4 rounded">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
