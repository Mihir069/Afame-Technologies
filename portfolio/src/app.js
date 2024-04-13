import Home from "./components/home";
import Navbar from "./components/navbar/navbar";

const App = () =>{
    return(
        <div>
            <div className=" fixed w-full z-10 my-5 opacity-80">
                <Navbar/>
            </div>
            <Home/>
        </div>
    )
}
export default App;