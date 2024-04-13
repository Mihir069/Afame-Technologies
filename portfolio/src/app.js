import { useRef } from "react";
import AboutMe from "./components/about-me";
import Home from "./components/home";
import Navbar from "./components/navbar/navbar";

const App = () => {
    const nextSection = useRef(null);
    const scroll = () => {
        if (nextSection.current) {
            window.scrollTo({
                top: nextSection.current.offsetTop,
                behavior: "smooth"
            })
        }
    }
    return (
        <div>
            <div className=" fixed w-full z-10 opacity-80">
                <Navbar />
            </div>
            <Home scroll={scroll} />
            <div ref={nextSection}>
                <AboutMe />
            </div>

        </div>
    )
}
export default App;