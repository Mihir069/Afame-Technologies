

const Home = ({ scroll }) => {

    return (
        <>
            <div className="relative h-screen">
                <img
                    src="./svg/pexels-background.png"
                    alt="bg"
                    className="absolute inset-0 object-cover w-full h-full opacity-70"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
                        <h1>Welcome</h1>
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
                        <h1>Hi! I'm <span className="text-[#38B6FF]">Mihir</span> Kumar</h1>
                    </div>
                    <div className="p-3 bg-[#38b6ff58] rounded-xl mb-4 text-lg sm:text-2xl md:text-3xl font-semibold text-[#38B6FF]">
                        <h1>Web Developer</h1>
                    </div>

                </div>
                <div className="absolute bottom-10 left-1/2">
                    <div className="flex justify-center cursor-pointer p-6 rounded-full border border-[#38B6FF] hover:bg-[#38b6ff58] animate-bounce" onClick={scroll}>
                        <img src="./svg/arrow-down-solid.svg" alt="arrow-down" className="w-5 " />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
