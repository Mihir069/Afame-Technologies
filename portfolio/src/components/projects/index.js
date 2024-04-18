import { useState, useEffect } from "react";

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const projects = [
        {
            id: 1,
            name: 'ECom',
            description: 'An online shopping portal',
            href: '#',
            imageSrc: './svg/e-com-project.png',
            imageAlt: 'e-com',
        },
        {
            id: 2,
            name: 'Movie Theatre',
            description: 'Discover movies',
            href: '#',
            imageSrc: './svg/movie-theatre-project.png',
            imageAlt: 'Movie-Theatre',
        },
        {
            id: 3,
            name: 'Multi-step login form',
            description: 'Multiple login form',
            href: '#',
            imageSrc: './svg/multiple-login-form.png',
            imageAlt: 'Multi-step-login-form',
        },
        {
            id: 4,
            name: 'Restaurant landing page',
            description: 'Landing Page for Restaurant',
            href: '#',
            imageSrc: './svg/restaurant.png',
            imageAlt: 'restaurant-page',
        },
    ];

    const handleProjectClick = (projectId) => {
        setSelectedProject(projectId);
    };

    const closePopup = () => {
        setSelectedProject(null);
    };


    useEffect(() => {
        const handleScroll = () => {
            const projectSection = document.getElementById('projectSection');

            if (projectSection) {
                const sectionTop = projectSection.offsetTop;
                const sectionHeight = projectSection.offsetHeight;
                const currentOffset = window.pageYOffset + window.innerHeight;

                if (currentOffset > sectionTop + sectionHeight / 2) {
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

            <div id="projectSection" className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className={`text-center mt-10 text-5xl m-10 ${isVisible ? 'fade-in-left' : 'opacity-0'}`}>
                    <h1>My Works</h1>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {projects.map((item) => (
                        <div
                            key={item.id}
                            className={`group relative cursor-pointer rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-500 ${isVisible ? 'fade-in-size' : 'opacity-0'}`}
                            onClick={() => handleProjectClick(item.id)}
                        >
                            <div
                                className={`aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none `}
                            >
                                <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-500"
                                />
                            </div>
                            <div className="my-5 text-center">
                                <h3 className="text-sm text-blue-700 font-medium">{item.name}</h3>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedProject && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white p-8 max-w-xl w-full rounded-lg shadow-lg text-center">
                            <button
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-100"
                                onClick={closePopup}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={3}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <img
                                src={projects.find((project) => project.id === selectedProject).imageSrc}
                                alt="Project Detail"
                                className="w-full h-auto rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-blue-700">
                                {projects.find((project) => project.id === selectedProject).name}
                            </h3>
                            <p className="text-sm text-gray-700 mt-2">
                                {projects.find((project) => project.id === selectedProject).description}
                            </p>
                        </div>
                    </div>
                )}
            </div>

    );
};

export default Project;
