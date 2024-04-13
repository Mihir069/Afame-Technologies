import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {

    const [navBar, setNavBar] = useState(false);

    const handleNavBar = () => {
        setNavBar(!navBar);
    };

    const navItems = [
        {
            id: 1,
            text: 'Home'
        },
        {
            id: 2,
            text: 'About me',
        },
        {
            id: 3,
            text: 'Contact'
        },
        {
            id: 4,
            text: 'Projects'
        }
    ];
    return (
        <div className="bg-black flex justify-between items-center h-20 mx-auto px-20 text-white ">
            <div className="w-28">
                <img src="./svg/portfolio-logo.png" alt="logo" />
            </div>
            <ul className="hidden md:flex">
                {navItems.map(item => (
                    <li key={item.id} className="p-4 hover:bg-[#38B6FF] rounded-xl m-2 cursor-pointer hover:text-black">
                        {item.text}
                    </li>
                ))}
            </ul>

            <div className="block md:hidden" onClick={handleNavBar}>
                {navBar ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <ul className={navBar ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r order-r-gray-900 bg-[#000300] ease-in-out duration-500'
                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }
            >
                <div className="w-28 m-7">
                    <img src="./svg/portfolio-logo.png" alt="logo" />
                </div>

                {navItems.map(items => (
                    <li key={items.id} className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'>
                        {items.text}
                    </li>
                ))}

            </ul>


        </div>
    )
}
export default Navbar;